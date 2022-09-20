import React, { Component } from 'react';
import './RightSide.css';
import ImageLayout from '../ImageLayout';

class RightSide extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    getData=()=>{
        let jsondata = [
            {
               "image":"",
               "text":"your friend"
            },
            {
                "image":"",
                "text":"your contact"
             },
             {
                "image":"",
                "text":"your friend"
             },
             {
                "image":"",
                "text":"your friend"
             }
             
        ];
        this.setState({data : jsondata});
     }

     componentDidMount() {
        this.getData();
     }
    render() { 
        return ( 
            <div className='rightside_container'>
                 <div className='rightside_header'>
                     Contacts
                 </div>
                 <div className='rightside_content'>
                    <div>
                  {
                    this.state.data.map((item)=>(
                        <ImageLayout image={item.image} text={item.text}/>
                    ))
                 } 
                 </div>
                 </div>
            </div>
         );
    }
}
 
export default RightSide;