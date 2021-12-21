import React, { Component } from 'react';
import '../App.css';
import firebase from 'firebase'
class Bacsi extends Component {
    constructor(props) {
        super(props);
        this.state = {
            datafirebase:[]
        }
    }
  componentDidMount(){
      let noteData= firebase.database().ref('BacSi/')
      noteData.on('value',(note)=>
      {  var arrayData=[];
        note.forEach(element=>
            {
                const key = element.key;
                const chucvi = element.val().chucvi;
                const chuyennganh = element.val().chuyenNganh;
                const email = element.val().email;
                const hoten= element.val().hoten;
                const maPK=element.val().maPK;
                const gioithieu = element.val().gioiThieu;
            
        arrayData.push(
            { id:key,
              chuyennganh:chuyennganh,
              chucvi:chucvi,
              email:email,
              gioithieu:gioithieu,
              hoten:hoten,
              maPK:maPK
              
            }
        )
       
        }
        )
        this.setState({datafirebase:arrayData}) 
      }
      
      )
  }
  allCv=(key)=>{
      alert( 
         "Chức vụ : "+this.state.datafirebase[key].chucvi+"\n"+
         "Chuyên ngành : "+this.state.datafirebase[key].chuyennganh+"\n"+
         "Email : "+this.state.datafirebase[key].email+"\n"+
         "Họ tên : "+this.state.datafirebase[key].hoten+"\n"+
         "Giới thiệu: "+this.state.datafirebase[key].gioithieu+"\n"+
         "Ma phòng khám : "+this.state.datafirebase[key].maPK+"\n"

      ) 
  }

  render() {
    if(this.state.datafirebase)
      var Cv=this.state.datafirebase.map((key,id)=>{
        return  <div class="col-xs-4 col-sm-4 col-md-4 col-lg-4">
        <div class="thumbnail">
            <img data-src="" alt="" src="https://st.quantrimang.com/photos/image/072015/22/avatar.jpg" height="400" width="200"/>
            <div class="caption">
                <h3>{key.hoten}</h3>
                <p>
                    {key.chuyennganh}<br></br>{key.email}<br></br>{key.chucvi}
                </p>
                     
            <button type="button" class="btn btn-primary" onClick={()=>this.allCv(id)}>chi tiết</button>
            </div>
        </div>
    </div>
    })
    
    return (
       
       <div class="row">
           <div class="col-xs-9 col-sm-9 col-md-9 col-lg-9">
       <div id="carousel-id" class="carousel slide" data-ride="carousel" data-interval="2500">
           <ol class="carousel-indicators">
               <li data-target="#carousel-id" data-slide-to="0" class=""></li>
               <li data-target="#carousel-id" data-slide-to="1" class=""></li>
               <li data-target="#carousel-id" data-slide-to="2" class="active"></li>
           </ol>
           <div class="carousel-inner">
               <div class="item ">
                   <img alt="First slide" src="https://invisaligncenter.com.vn/wp-content/uploads/2020/09/co-so-vat-chat-3.jpg"/>
               </div>
               <div class="item">
                   <img data-src="holder.js/900x500/auto/#666:#6a6a6a/text:Second slide" alt="Second slide" src="https://phongkhamhoadiep.files.wordpress.com/2017/05/cropped-phc3b2ng-khc3a1m-nhi-hoa-c491ie1bb87p.jpg"/>
               </div>
               <div class="item active">
                   <img data-src="holder.js/900x500/auto/#555:#5a5a5a/text:Third slide" alt="Third slide" src="https://www.hanhphuchospital.com/wp-content/uploads/2020/07/cover-FB_4-buoc.jpg"/>
               </div>
           </div>
           <a class="left carousel-control" href="#carousel-id" data-slide="prev"><span class="glyphicon glyphicon-chevron-left"></span></a>
           <a class="right carousel-control" href="#carousel-id" data-slide="next"><span class="glyphicon glyphicon-chevron-right"></span></a>
       </div>
       <br></br>
       {Cv}
       </div>
       <div class="col-xs-3 col-sm-3 col-md-3 col-lg-3">
       
       <div class="list-group">
           <a href="" class="list-group-item active">Bệnh viện liên kết</a>
           <a href="#" class="list-group-item">	Phòng đa khám Hoàng Việt</a>
           <a href="#" class="list-group-item">2</a>
           <a href="#" class="list-group-item">3</a>
           <a href="#" class="list-group-item">4</a>
           <a href="#" class="list-group-item">5</a>
           <a href="#" class="list-group-item">6</a>
           <a href="#" class="list-group-item">7</a>
       </div>
       
       </div>
       </div>
      
    )

  }
}

export default Bacsi;
