import React, { Component } from 'react';
import Post from './Post';
import './Postcontainer.css';


class Postcontainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data : []
        }
    }

    getData = ()=> {/*
        let json =[
            {
                "post_id":1,
                "user_id":1223654,
                "user_img":"",
                "user_name":"nantenaina",
                "description":"Loved this wallpaper",
                "post_img":"" ,
                "like":"25"
            },
            {
                "post_id":2,
                "user_id":1223654,
                "user_img":"",
                "user_name":"Sarobidy",
                "description":"Loved this wallpaper",
                "post_img":"",
                "like":"25"
            },
            {
                "post_id":3,
                "user_id":1223654,
                "user_img":"",
                "user_name":"Sitraka ",
                "description":"Loved this wallpaper",
                "post_img":"",
                "like":"25"
            }
        ]
        this.setState({data:json});*/


        
        const thisContext = this;

        fetch("http://localhost:8080/api/postService/getPost")
        .then(response => response.json())
        .then(json => {
            thisContext.setState({data: json});
        })
        .catch(error => {
                  
        })


    }
     

     componentDidMount(){
        this.getData();
     }

    render() { 
        return ( 
            <div>
                {
                    this.state.data.map((item)=>(
                        <Post object={item}/>
                    ))
                }
            </div>
         );
    }
}
 
export default Postcontainer;