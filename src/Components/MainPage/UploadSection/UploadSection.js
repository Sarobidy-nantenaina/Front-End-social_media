import { Avatar,Dialog, Paper } from '@mui/material';
import React, { Component } from 'react';
import './UploadSection.css';
import avatar from '../../../images/avatar.jpg';
import live from '../../../images/live.jpg';
import gallery from '../../../images/gallery.png';
import {getStorage} from 'firebase/storage';

class UploadSection extends Component {
    constructor(props) {
        super(props);
        this.state = {
            open : false,
            uploadImage : null,
            description : null
        };
    };

    handleClose=()=>{
       this.setState({open:false});
    };

    openDialog=(event)=>{
        this.setState({open:true});
        this.setState({uploadImage: URL.createObjectURL(event.target.files[0])});
        this.setState({image:event.target.files[0]});
    };

    uploadToFirebase=()=>{
        const thisContext=this;
        var uploadTask = getStorage.ref("image").child(this.state.image.name).put(this.state.image);

        uploadTask.on(
            "state_changed",
            function(snapshot){

            },
            function(error){

            },
            function(){
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                    
                    let payload = {
                        "usermediaId": JSON.parse(localStorage.getItem("user")).usermediaId,
                        "userName":JSON.parse(localStorage.getItem("user")).userName,
                        "description": this.state.description,
                        "postImgURL":downloadURL
                     };
                  
                  const requestOptions = {
                    method:"POST",
                    headers:{'Content-type':'application/json'},
                    body : JSON.stringify(payload),
                  };
                  
                  fetch("http://localhost:8080/api/postService/save",requestOptions)
                  .then(response => response.json())
                  .then(data => {
                      thisContext.setState({open:false});
                      thisContext.props.update();
                  })
                  .catch(error => {
                  
                  });

                })
            }

        );
    }

    render() { 
        return ( 
            <div>
                
                
                <Dialog aria-labelledby='simple-dialog-title' className='upload_dialogbox' open={this.state.open}>
                    <div className='upload_header'> Create Post </div>
                    <input type='text' value='write your comments here' className='upload_textbox' onChange={(event)=>this.state.description=event.currentTarget.value} />
                    <img src={this.state.uploadImage} className='upload_preview' />
                    <button className='upload_bouton' onClick={this.uploadToFirebase} >Post</button>
                </Dialog>
                

                <Paper className='upload-container'>
                   <div className='upload-top'>
                      <div>
                          <Avatar src={avatar} className='uploadimg'/>
                      </div>
                      <div>
                          <input className='uploadbox' placeholder="What's on your mind ?" type="text"/>  
                       </div>
                    </div>
                    <div className='uploadbottom'>
                        <div className='upload-tabs1'>
                            <img className='uplimg1' src={live}/>
                            <div className='upload-text'> Live Video</div>
                        </div>
                        <div className='upload-tabs2'>
                            <label for="file-upload" className='upload-tabs2'>
                               <img className='uplimg2' src={gallery}/>
                               <div className='upload-text1'> Photo/Video</div>
                            </label>
                            <input type="file" id="file-upload" onChange={this.openDialog}/>
                        </div>
                        <div className='upload-tabs3'>
                            <img className='uplimg3' src={avatar}/>
                            <div className='upload-text2'> Feeling/Activity</div>
                        </div>
                    </div>
                </Paper>
            </div>
         );
    }; 
}
 
export default UploadSection;