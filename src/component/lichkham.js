import React, { Component } from 'react';
import '../App.css';
import firebase from  'firebase'
class Lichkham extends Component {
  constructor(props) 
  {
    super(props);
    this.state = {
                    datafirebase:[],
                    searchdata:""
                 }
  }
  componentDidMount(){
    let noteData= firebase.database().ref('LichHen')
    noteData.on('value',(note)=>
    {  var arrayData=[];
      note.forEach(element=>
          { const key=element.key;
            let active= element.val().dakham;
            let name= element.val().hoten;
            let day=element.val().ngayhen;
            let namepk=element.val().tenphongkham;
            let time=element.val().thoigianhen;
            arrayData.push(
              { id:key,
                active:active,
                name:name,
                namepk:namepk,
                day:day,
                time:time,
              }
            )
          }
      )
      this.setState({datafirebase:arrayData})
      console.log(this.state.datafirebase) 
    }
    
    
    )
}
reset=()=>{
  let noteData= firebase.database().ref('LichHen')
  noteData.on('value',(note)=>
  {  var arrayData=[];
    note.forEach(element=>
        { const key=element.key;
          let active= element.val().dakham;
          let name= element.val().hoten;
          let day=element.val().ngayhen;
          let namepk=element.val().tenphongkham;
          let time=element.val().thoigianhen;
          arrayData.push(
            { id:key,
              active:active,
              name:name,
              namepk:namepk,
              day:day,
              time:time,
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

delete=(a)=>{
  let noteData= firebase.database().ref('LichHen');
   noteData.child(a).remove();
}
onsubmit = (event) => { event.preventDefault(); }
loc=()=>
{ 
  let noteData= firebase.database().ref('LichHen')
    noteData.on('value',(note)=>
    {  var arrayData=[];
      note.forEach(element=>
          { const key=element.key;
            let active= element.val().dakham;
            let name= element.val().hoten;
            let day=element.val().ngayhen;
            let namepk=element.val().tenphongkham;
            let time=element.val().thoigianhen;
            if(this.state.searchdata===name)
            arrayData.push(
              { id:key,
                active:active,
                name:name,
                namepk:namepk,
                day:day,
                time:time,
              }
            )
          }
      )
      this.setState({datafirebase:arrayData}) 
      console.log(this.state.datafirebase)
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
          <td>{key.time}</td>
          <td>{key.namepk}</td>
          <td>
            <button type="button" class={key.active?"btn btn-success btn-sm px-3":"btn btn-danger btn-sm px-3"}>
              <i class="fas fa-times">{key.active?"???? kh??m":"ch??a kh??m"}</i>
            </button>
          </td>
          <td>
            
            <button type="button" class="btn btn-primary " onClick={()=>this.delete(key.id)}>H???y</button>
            
          </td>
        </tr>
         )
        
      
        
        }
    
    )
    return (  

        
        <div class="container">
        <div class="panel panel-default">
            <div class="panel-body">
            <form class="navbar-form navbar-left" action="/action_page.php" onSubmit={this.onsubmit}>
            <div class="input-group">
            <input 
               type="text" 
               class="form-control" 
               placeholder="Search=T??n-M?? h??? s??" 
               name="search" 
               onChange={this.search}
            />
            <div class="input-group-btn"  >
              <button class="btn btn-default" type="button" onClick={this.loc}>
                <i class="glyphicon glyphicon-search" ></i>
              </button>
              <button class="btn btn-default" type="button" onClick={this.reset} title="hi???n th??? t???t c??? l???ch h???n">
                 <i class="glyphicon glyphicon-repeat"></i>
              </button>
            </div>
          </div>
        </form>
        
        <table class="table align-middle" >
        <thead>
          <tr>
            <th scope="col">M?? L???ch kh??m</th>
            <th scope="col">H??? v?? T??n</th>
            <th scope="col">Th???i Gian</th>
            <th scope="col">ph??ng kh??m</th>
            <th scope="col">Tr???ng th??i</th>
            <th scope="col">c???p nh???t</th>

          </tr>
        </thead>
        <tbody>
          {List}
        </tbody>
      </table>
      </div>
      </div>
      </div>  
    )

  }
}

export default Lichkham;
