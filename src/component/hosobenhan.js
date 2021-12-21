import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase'
import {Firebasedata} from '../firebasedata'
class Hosobenhan extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {  display:true,
                    datafirebase:[],
                    searchdata:"",
                    key:"",
                    benh:"",
                    tenphongkham:"",
                    thuocdangsudung:"",
                    tiensu:"",
                    trieuchung:"",
                    chitiet:"",
                    tt:[]
                 }
  }
  componentDidMount(){
    let noteData= firebase.database().ref('LichHen')
    noteData.on('value',(note)=>
    {  var arrayData=[];
      note.forEach(element=>
          { const key=element.key;
            let benh= element.val().macbenh;
            let name= element.val().hoten;
            let trieuchung=element.val().trieuchung;
            let namepk=element.val().tenphongkham;
            arrayData.push(
              { id:key,
                benh:benh,
                name:name,
                namepk:namepk,
                trieuchung:trieuchung
              }
            )
          }
      )
      this.setState({datafirebase:arrayData})
      console.log(this.state.datafirebase) 
    }
    
    
    )
}
Onsubmit = (event) => { event.preventDefault(); } 
Save=()=>
{ let noteData= firebase.database().ref('LichHen/'+this.state.key)
          if(this.state.tenphongkham!="")
          noteData.update(
           {
            tenphongkham: this.state.tenphongkham})
          if(this.state.benh!="")
          noteData.update(
           {
            macbenh: this.state.benh} ) 
          if(this.state.thuocdangsudung!="")
          noteData.update(
           {
            thuocdangsudung: this.state.thuocdangsudung}
          )
          if(this.state.trieuchung!="")
          noteData.update(
          {
            trieuchung: this.state.trieuchung}
          )
          if(this.state.tiensu!="")
          noteData.update(
           {
            tiensubenhan: this.state.tiensu}
          )
          noteData.update({dakham:true})
          this.setState({key:"",
                         display:!this.state.display,
                         benh:"",
                         tenphongkham:"",
                         thuocdangsudung:"",
                         tiensu:"",
                         trieuchung:""
          })
          alert("cập nhật thành công")

}
onChanephongkham=(pk)=>
{this.setState({tenphongkham: pk.target.value})}

onChanebenh=(nk)=>
{this.setState({benh:nk.target.value})
  console.log(nk.target.value)
}
onChanebenhan=(ba)=>
{this.setState({tiensu: ba.target.value})}
onThuocdsd=(ba)=>
{this.setState({thuocdangsudung: ba.target.value})}
onChanetrieuchung=(tt)=>
{this.setState({trieuchung:tt.target.value})}

upDate=(k)=>
{ 
    this.setState({key:k.target.value,
                   display:!this.state.display
                   })
    console.log(this.state.display)
}

reset=()=>{
  let noteData= firebase.database().ref('LichHen')
  noteData.on('value',(note)=>
  {  var arrayData=[];
    note.forEach(element=>
      { const key=element.key;
        let benh= element.val().macbenh;
        let name= element.val().hoten;
        let trieuchung=element.val().tiensubenhan;
        let namepk=element.val().tenphongkham;
        arrayData.push(
          { id:key,
            benh:benh,
            name:name,
            namepk:namepk,
            trieuchung:trieuchung
          }
        )
      }
    )
    this.setState({datafirebase:arrayData})
    console.log(this.state.datafirebase) 
  }
  
  
  )
}

search=(data)=>
{
   this.setState({searchdata:data.target.value})
   console.log(this.state.searchdata)
}

onsubmit = (event) => { event.preventDefault(); }
loc=()=>
{ 
  let noteData= firebase.database().ref('LichHen')
    noteData.on('value',(note)=>
    {  var arrayData=[];
      note.forEach(element=>
        { const key=element.key;
          let benh= element.val().macbenh;
          let name= element.val().hoten;
          let trieuchung=element.val().trieuchung;
          let namepk=element.val().tenphongkham;
          if(this.state.name===name)
          arrayData.push(
            { id:key,
              benh:benh,
              name:name,
              namepk:namepk,
              trieuchung:trieuchung,
            }
          )
        }
      )
      this.setState({datafirebase:arrayData}) 
      console.log(this.state.datafirebase)
    }
    
    
    )
}
allinformation=(d)=>{
let noteData= firebase.database().ref('LichHen/'+d.target.value)
noteData.on('value',element=>{
       alert(
        "Tên phòng khám : "+element.val().tenphongkham+"\n"+
        "Mã bác sĩ phụ trách : "+element.val().maBS+"\n"+
        "Họ tên : "+ element.val().hoten+"\n"+
        "Mắc bệnh : "+element.val().macbenh+"\n"+
        "Triệu chứng : "+element.val().trieuchung+"\n"+
        "Thuốc đang sử dụng : "+element.val().thuocdangsudung+"\n"+
        "Tiền sử bệnh án :"+element.val().tiensubenhan+"\n")
        
    }
    
)
}


  render() {
    let List=this.state.datafirebase.map((key,id)=>
         { 
           return(
          <tr>
          <th scope="row">{key.id}</th>
          <td>{key.name}</td>
          <td>{key.benh}</td>
          <td>{key.trieuchung}</td>
        
          <td>
            
            <button type="button" class="btn btn-primary" value={key.id} onClick={this.upDate}>Cập nhập</button>
            
          </td>
          <td>
            <button type="button" class="btn btn-defaul" value={key.id} onClick={this.allinformation}>Chi tiết...</button>
          </td>
        
        </tr>
         )
      
        
      
        
        }
    
    )
    return (  

       this.state.display?
        <div class="container">
        <div class="panel panel-default">
            <div class="panel-body">
            <form class="navbar-form navbar-left" action="/action_page.php" onSubmit={this.onsubmit}>
            <div class="input-group">
            <input 
               type="text" 
               class="form-control" 
               placeholder="Search=Tên-Mã hồ sơ" 
               name="search" 
               onChange={this.search}
            />
            <div class="input-group-btn"  >
              <button class="btn btn-default" type="button" onClick={this.loc}>
                <i class="glyphicon glyphicon-search" ></i>
              </button>
              <button class="btn btn-default" type="button" onClick={this.reset} title="hiển thị tất cả lịch hẹn">
                 <i class="glyphicon glyphicon-repeat"></i>
              </button>
            </div>
          </div>
        </form>
        
        <table class="table align-middle" >
        <thead>
          <tr>
            <th scope="col">Mã Lịch Hẹn</th>
            <th scope="col">Họ và Tên</th>
            <th scope="col">Bệnh</th>
            <th scope="col">Triệu chứng</th>
            <th scope="col">Cập nhật</th>
            <th scope="col">chi tiết</th>
            

          </tr>
        </thead>
        <tbody>
          {List}
        </tbody>
      </table>
      </div>
      </div>

      </div>:
    <div class="Center">
    <div class="row">
      
      <div class="col-xs-8 col-sm-8 col-md-8 col-lg-8">
        

      
        <div class="panel panel-warning">
                  <div class="panel-heading">
                        <h3 class="panel-title">Cập nhật hồ sơ có mã : {this.state.key}</h3>
                  </div>
                  <div class="panel-body">
                  <label for="">Bệnh</label>
                  <input type="text" class="form-control" value={this.state.benh}  onChange={this.onChanebenh}/>
                  <label for="">Tiền sử bệnh án</label>
                  <input type="text" class="form-control" value={this.state.tiensu} onChange={this.onChanebenhan}/>
                  <label for="">thuốc đang sử dụng</label>
                  <input type="text" class="form-control" value={this.state.thuocdangsudung} onChange={this.onThuocdsd}/>
                  <label for="">Triệu chứng mắc phải</label>
                 <input type="text" class="form-control" value={this.state.trieuchung} onChange={this.onChanetrieuchung}/>
                  <br></br>
                 <button type="submit" class="btn btn-primary" onClick={this.Save}>cập nhật</button>
                  </div>
                   
            </div>
            </div>
       
    </div> 
    
    </div>  
    )

  }
}

export default Hosobenhan;

