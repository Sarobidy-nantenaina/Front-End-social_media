import { Grid } from '@mui/material';
import React, { Component } from 'react';
import './Mainpage.css';
import LeftSide from './LeftSidePanel/LeftSide';
import StatusBar from './StatusBar/StatusBar';
import UploadSection from './UploadSection/UploadSection';
import Postcontainer from './PostContainer/Postcontainer';
import RightSide from './RightSidePanel/RightSide';

class Layout extends Component {
    constructor(props) {
        super(props);
        this.state = { 

        }
    }

     letUpdate = ()=>{
         this.refs.child.getData();
     }

    render() { 
        return ( 
            <div className='mainpage_container'>
               <Grid container>
                   <Grid item xs={3}>
                        <LeftSide/>
                   </Grid>
                   <Grid item xs={6} className='middlecontainer Middle'>
                        
                        <StatusBar/>  
                        <UploadSection update={this.letUpdate} />
                        <Postcontainer ref="child"/>

                   </Grid>
                   <Grid item xs={3}>
                        <RightSide/>
                   </Grid>
               </Grid>
            </div>
         );
    }
}
 
export default Layout;