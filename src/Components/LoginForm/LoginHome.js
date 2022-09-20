import React, { Component } from 'react';
import './LoginHome.css';
import facebook8logo from '../../images/facebook8logo.png';
import Signup from '../Signup/Signup';
import Signin from '../Signin/Signin';


class LoginHome extends Component {
   constructor(props) {
      super(props);
      this.state = { 
          isLogin:true
      }
   }

    

   changeLogin=()=>{
      if(this.state.isLogin){
          this.setState({isLogin : false});
      }
      else {
         this.setState({isLogin : true});
      }
   }

   render() { 
      return ( 
         <div className='loginpage'>
            <div className='logincontainer'>

                 {
                    this.state.isLogin ? <Signup/> : <Signin/>
                 }

                 <div className='loginOR'>
                    <div className='tire'></div>
                    <div className='text'>
                      OR
                    </div>
                    <div className='tire'></div>
                 </div>

                 <div className='logfb'> <img src={facebook8logo}/> Log in with Facebook</div>
                 <div className='logforgot'> Forgot password  ?</div>
            </div>
            <div className='up-in'>
                {
                  this.state.isLogin ? 
                   <div className='signup'>
                      Have an account? <h3 onClick={this.changeLogin}>Sign In</h3>
                   </div>
                   :
                   <div className='signin'>
                      Don't have account? <h3 onClick={this.changeLogin}>Sign up</h3>
                   </div>
                }
                   
               
            </div>
         </div>
       );
   }
}
 
export default LoginHome;