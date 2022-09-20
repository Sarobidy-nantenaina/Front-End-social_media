import { Paper } from '@mui/material';
import React, { Component } from 'react';
import './StatusBar.css';
import plus from '../../../images/plus.png';
import {getStorage} from "firebase/storage";

class Status extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

     openDialog=(event)=>{
        let image=event.target.files[0];

            if(image==undefined || image==null){
                return;
            }

        const thisContext=this;
        var uploadTask = getStorage.ref("status").child(image.name).put(image);

        uploadTask.on(
            "state_changed",
            function(snapshot){

            },
            function(error){

            },
            function(){
                uploadTask.snapshot.ref.getDownloadURL().then(function(downloadURL){
                    
                    let payload = {
                        "userId": JSON.parse(localStorage.getItem("user")).userId,
                        "userName":JSON.parse(localStorage.getItem("user")).userName,
                        "statusImageURL":downloadURL
                     };
                  
                  const requestOptions = {
                    method:"POST",
                    headers:{'Content-type':'application/json'},
                    body : JSON.stringify(payload),
                  };
                  
                  fetch("http://localhost:8080/api/statusService/save",requestOptions)
                  .then(response => response.json())
                  .then(data => {

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

                {
                    this.props.uploader == "true" ? 

                    <Paper className='statusbar-status image'>
                        <label for="file-upload" className='upload_icon'>
                            <img src={plus} className='upload_icon' />
                        </label>
                        <input type="file" id="file-upload" onChange={this.openDialog}/>

                    </Paper> 
                    :
                    <Paper className='statusbar-status'>
                        <img src={this.props.object.statusImageURL} className="status_image" />
                    </Paper>
                }

            </div>
         );
    }
}
 
export default Status;