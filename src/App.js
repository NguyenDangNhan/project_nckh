import React, { Component } from 'react';
import './App.css';
import Hosobenhan from "./component/hosobenhan"
import Home from "./component/home"
import Datlich from "./component/datlich"
import Lichkham from "./component/lichkham"
import Bacsi from "./component/bacsi"
import Login from "./Login"
import {Firebasedata} from './firebasedata'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
     use:"",
     nextpage: 1
    }  
  } 
  handleLogout = () => 
  {
    Firebasedata.auth().signOut();
    this.setState({use:""});
  }
  checkPass=(user)=>{
      this.setState({use:user})
      console.log(this.state.use)
  }
 
  NextpageHome=()=>
  {
    this.setState({nextpage: 0})
  }

  NextpageHoso=()=>
  {
    this.setState({nextpage: 1})
  }

  NextpageDatlich=()=>
  {
    this.setState({nextpage: 2})
  }

  NextpageLichkham=()=>
  {
    this.setState({nextpage: 3})
  }
  NextpageBacsi=()=>
  {
    this.setState({nextpage: 4})
  }
  render() {
    let element;
    if(this.state.nextpage==1)
       element=<Hosobenhan/>
        else if(this.state.nextpage==2)
          element=<Datlich/>
            else if(this.state.nextpage==3)
              element=<Lichkham/>
               else if(this.state.nextpage==4)
                element=<Bacsi/>
                 else 
                  element=<Home/>; 
   
    
    return (
      this.state.use?
      <div>
      <nav class="navbar navbar-inverse navbar-fixed-top"> 
      <div class="container-fluid">
        <div class="navbar-header active">
        <a class="navbar-brand " onClick={this.NextpageBacsi} >Trang Chủ</a>
        </div>
        <ul class="nav navbar-nav">
          <li onClick={this.NextpageHoso}><a href="#">Hồ Sơ Bệnh Án</a></li>
          <li onClick={this.NextpageDatlich}><a href="#">Đặt Lịch Khám</a></li>
          <li onClick={this.NextpageLichkham}><a href="#">Lịch Khám</a></li>
          <li ><a href="#">Thông tin Bác Sĩ</a></li>
        </ul>
        <form class="navbar-form navbar-right" action="/action_page.php" >
          <div class="input-group">
            
            <button type="button" class="btn btn-default" onClick={this.handleLogout}>Đăng Xuất <i class="glyphicon glyphicon-off"></i></button>
            
          </div>
        </form>
      </div>
     </nav>
     <div class="container">
     <p><br></br><br></br><br></br></p> 
       {element}
     
     </div>
    
      </div>:<div>
      <Login checkPass={this.checkPass}/>
      </div>  
    

     
      
    )

  }
}

export default App;
