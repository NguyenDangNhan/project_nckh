import react from 'react';
import './App.css';
import React, { Component } from 'react';
import {Firebasedata} from './firebasedata'
import firebase from 'firebase'
class Login extends Component{ 
    constructor(props) {
        super(props);
        this.state = {
            user:"",
            email:"",
            password:"",
            hasAccout:true,
            name:"",
            phone:"",
            cmt:"",
            diachi:""
            
           
        }  
      } 
    onChanename=(name)=>
      {this.setState({name: name.target.value})}
    onChanecmt=(cmt)=>
      {this.setState({cmt: cmt.target.value})}
    onChanePhone=(p)=>
      {this.setState({phone: p.target.value})} 
    onChaneDiachi=(d)=>
      {this.setState({diachi: d.target.value})} 
     
    
    handlepassword=(e)=>
    {
        this.setState({password:e.target.value})
    }
    handleEmail=(e)=>{
        this.setState({email:e.target.value})
    }
    handleLogin = () => 
    { 
        this.setState({
            email:"",
            password:""
        })
      console.log(this.state.user)
      Firebasedata.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then(()=>{  this.props.checkPass(this.state.user)  }).catch((err)=>{
          switch(err.code)
          {
              case "auth/invalid-email":
              case  "auth/use-disabled":
              case  "auth/use-not-found":
                alert("Tài khoản hoặc mật khẩu không đúng")
                  break;
              case "auth/wrong-password":
                alert("mật khẩu hoặc tài khoản không đúng")
                  break;      
          }
          
      })

        
    }
          
    handleSingup = () => 
    {  this.setState({
        email:"",
        password:""
    })
    
    if(this.state.password.length<6)
    {
       alert("mật khẩu phải có 6 kí tự trở lên")
       this.setState({
        email:"",
        password:"",
        name:"",
        phone:"",
        cmt:"",
        diachi:""
       })  
    }
      else 
      {let user= firebase.database().ref('User/')
      user.push(
        { cmt: this.state.cmt,
          diachi:this.state.diachi,
          email:this.state.email,
          hoten:this.state.name,
          sdt: this.state.phone
  
        }
       )
       this.setState({
        email:"",
        password:"",
        name:"",
        phone:"",
        cmt:"",
        diachi:""
       })  
       Firebasedata.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
       alert("Đăng ký thành công")
      }
    }

  
    componentDidMount(){
        Firebasedata.auth().onAuthStateChanged((use)=>{
            if(use){ 
                this.setState({
                    email:"",
                    password:""
                })
               this.setState({user:use});
            } else {
                this.setState({user:""});
            }
          })
    }
    
    render(){
     return(
        <section className="container loginContainer">
           
        <div class="panel panel-danger">
              <div class="panel-heading">
                    <h3 class="panel-title"></h3>
              </div>
              <div class="panel-body">
                   
              {this.state.hasAccout? (
               <>
               <form >     
               <div class="input-group">
                 <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                 <input id="email" type="text" class="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
               </div>
               <div class="input-group">
                 <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                 <input id="password" type="password" class="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handlepassword}/>
              </div>
              </form>
              
                  <button className="button" onClick={this.handleLogin}>Đăng nhập</button>
                  <p>Chưa có tài khoản này ? <span onClick={()=>this.setState({hasAccout:!this.state.hasAccout})}>Đăng ký</span></p>
              </>
            ):(
             <>
              <form >
                 <label for="">Họ và Tên</label>
                 <input type="text" class="form-control" value={this.state.name} onChange={this.onChanename}/>
                 <label for="">Căn cước(chứng minh thư)</label>
                 <input type="text" class="form-control" value={this.state.cmt} onChange={this.onChanecmt}/>
                 <label for="">Số điện thoại</label>
                 <input type="text" class="form-control"  value={this.state.phone} onChange={this.onChanePhone}/>  
                 <label for="">Địa chỉ</label>
                 <input type="text" class="form-control"  value={this.state.diachi} onChange={this.onChaneDiachi}/>  
                 <label for="">Tạo tài khoản</label>   
               <div class="input-group">
                 <span class="input-group-addon"><i class="glyphicon glyphicon-user"></i></span>
                 <input id="email" type="text" class="form-control" name="email" placeholder="Email" value={this.state.email} onChange={this.handleEmail}/>
               </div>
               <div class="input-group"> 
                 <span class="input-group-addon"><i class="glyphicon glyphicon-lock"></i></span>
                 <input id="password" type="password" class="form-control" name="password" placeholder="Password" value={this.state.password} onChange={this.handlepassword}/>
              </div>
              </form>
             <button className="button" onClick={this.handleSingup}>Đăng ký</button>
             <p>Bạn có tài khoản ? <span  onClick={()=>this.setState({hasAccout:!this.state.hasAccout})}>Đăng nhập</span></p>
           </>
            )

            }   
                       
                   
              </div>
        </div>


</section>
        
      )
     
}}
export default Login;



