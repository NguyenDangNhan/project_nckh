import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase'
class Datlich extends Component {
    constructor(props) {
        super(props);
        this.state = {
              active: false,
              thanhtoan: false,
              email:"",
              Name :"",
              benh:"",
              lichkham:"",
              phikham:"",
              tenphongkham:"",
              time:"",
              thuocdangsudung:"",
              thuocdieutri:"",
              tiensu:"",
              trieuchung:""


        };
    }
Onsubmit = (event) => { event.preventDefault(); } 
Save=()=>
{ let lichhen= firebase.database().ref('LichHen/')
  lichhen.push(
    { dakham: this.state.active,
     dathanhtoan:this.state.thanhtoan,
     email:this.state.email,
     hoten:this.state.Name,
     macbenh:this.state.benh,
     ngayhen:
     { date:0,
       day:0,
       hours:0,
       minutes:0,
       month:0,
       seconds:0,
       time:0,
       timezoneOffset:0,
       year:0

     },
     phikham:this.state.phikham,
     tenphongkham:this.state.tenphongkham,
     thoigianhen:this.state.time.toString(),
     thuocdangsudung:this.state.thuocdangsudung,
     thuocdieutri:this.state.thuocdieutri,
     tiensubenhan:this.state.tiensu,
     trieuchung:this.state.trieuchung,
    }
   )
   window.alert("Đặt lịch thành công")
   this.setState({
    active: false,
    thanhtoan: false,
    email:"",
    Name :"",
    benh:"",
    lichkham:"",
    phikham:"",
    tenphongkham:"",
    time:"",
    thuocdangsudung:"",
    thuocdieutri:"",
    tiensu:"",
    trieuchung:""
   })
  } 

onChanename=(name)=>
{this.setState({Name: name.target.value})}

onChaneemali=(Email)=>
{this.setState({email: Email.target.value})}

onChanephongkham=(pk)=>
{this.setState({tenphongkham: pk.target.value})}

onChanengaykham=(nk)=>
{this.setState({lichkham: nk.target.value})
  console.log(nk.target.value)
}

onChanebenhan=(ba)=>
{this.setState({tiensu: ba.target.value})}

onChanetrieuchung=(tt)=>
{this.setState({trieuchung:tt.target.value})}

onChanetime=(time)=>
{this.setState({time:time.target.value})}
  render() {
    return (   
     
     
    
  
            
        
       
            
      <div>
    <div class="row">
    <div class="col-xs-6 col-sm-6 col-md-6 col-lg-6">
        <div class="panel panel-body ">
         
            <div class="panel-body">
            <form >
             <legend>Điền thông tin cá nhân</legend>
         
             <div class="form-group">
                 <label for="">Họ và Tên</label>
                 <input type="text" class="form-control" value={this.state.Name} onChange={this.onChanename}/>
                 <label for="">căn cước(chứng minh thư)</label>
                 <input type="text" class="form-control" />
                 <label for="">Email</label>
                 <input type="text" class="form-control" value={this.state.email} onChange={this.onChaneemali}/>
                 <label for="">Số điện thoại</label>
                 <input type="text" class="form-control"  />
             </div>
             
         </form>
        </div> 
        </div>
        </div>
        <div class="col-xs- col-sm-6 col-md-6 col-lg-6">
        <div class="panel panel-warning">
                  <div class="panel-heading">
                        <h3 class="panel-title">Chọn lịch khám</h3>
                  </div>
                  <div class="panel-body">
                  <label for="">Phòng Khám</label>
                  <input type="text" class="form-control" value={this.state.tenphongkham} onChange={this.onChanephongkham}/>
                  <label for="">Lịch khám</label>
                  <input type="date" class="form-control" value={this.state.lichkham} onChange={this.onChanengaykham}/>
                  <label for="">thời gian</label>
                  <input type="time" class="form-control" value={this.state.time}  onChange={this.onChanetime}/>
                  <label for="">Tiền sử bệnh án</label>
                  <input type="text" class="form-control" value={this.state.tiensu} onChange={this.onChanebenhan}/>
                  <label for="">Triệu chứng mắc phải</label>
                 <input type="text" class="form-control" value={this.state.trieuchung} onChange={this.onChanetrieuchung}/>
                  </div>
            </div>
            </div>
       
    </div> 
    <button type="submit" class="btn btn-primary" onClick={this.Save}>Đặt lịch khám</button>
    </div>     
    )

  }
}

export default Datlich;
