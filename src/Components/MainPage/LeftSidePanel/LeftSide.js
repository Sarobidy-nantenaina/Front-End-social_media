import React, { Component } from 'react';
import ImageLayout from '../ImageLayout';
import './LeftSide.css';
import covid from '../../../images/covid.png';
import add from '../../../images/add.jpg';
import blood from '../../../images/blood.png';
import buisness from '../../../images/buisness.jpg';
import memories from '../../../images/memories.jpg';
import messenger from '../../../images/messenger.png';
import equipe from '../../../images/equipe.png';
import NameRef from '../../Signup/Signup';
import avatar from '../../../images/avatar.jpg'

class LeftSide extends Component {
    constructor(props) {
        super(props);
        this.state ={
            data : []
        }
    }

     getData=()=>{
        let jsondata = [
            {
                "image":avatar,
                "text":NameRef
            },
            {
               "image":covid,
               "text":"COVID-19 information center"
            },
            {
                "image":messenger,
                "text":"Messenger kids"
             },
             {
                "image":'https://static.xx.fbcdn.net/rsrc.php/v3/yJ/r/fGWbDwbx9W4.png?_nc_eui2=AeH-3M_7DSs5YD79DGob2MtYe9VFok25NGt71UWiTbk0a796N03I9tJl500UZi7B1Gj6KRniT60s6m6Y4ZmedA7T',
                "text":"Gaming"
             },
             {
                "image":'https://static.xx.fbcdn.net/rsrc.php/v3/y5/r/duk32h44Y31.png?_nc_eui2=AeGhW_xRns1zLE0NjXBIUgLG2NRDTXGHJ53Y1ENNcYcnnb_5GesfmTUcIZtNw9I3RJz_uXVMaRCn2vcjB0Ks8o7x',
                "text":"Watch"
             },
             {
                 "image":memories,
                 "text":"Memories"
             },
             {
                 "image":add,
                 "text":"Ad manager"
             },
             {
                 "image":blood,
                 "text":"Blood Donations"
             },
             {
                 "image":equipe,
                 "text":"Friends"
             },
             {
                 "image":buisness,
                 "text":"Buisness Manager"
             }
             
        ];
        this.setState({data : jsondata});
     }

     componentDidMount() {
        this.getData();
     }

    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <ImageLayout image={item.image} text={item.text}/>
                    ))
                }
                 

            
            </div>
         );
    }
}
 
export default LeftSide;