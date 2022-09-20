import React ,{ useRef,useState } from 'react';
import '../LoginForm/LoginHome.css';
import './Signup.css';
import { getAuth , createUserWithEmailAndPassword} from 'firebase/auth';

export default function Signup() {
    
    const [ loading, setLoading]=useState(false);
    
    const emailRef=useRef();
    const passwordRef=useRef();
    const NameRef=useRef();
    const  auth = getAuth();
    function signup (email, password){
        return createUserWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
            var user = userCredential.user
            let payload={
                "usermediaId":user.uid,
                "userName":NameRef,
                "userImage":"www.sarobidy.com"
            }
            const requestOptions = {
                method: "POST",
                headers: {'Content-Type':'application/json'},
                body : JSON.stringify(payload)
            };
        
            fetch("http://localhost:8080/userService/save",requestOptions)
            .then(Response =>Response.json())
            .then(data => {
                var user = userCredential.user;
                localStorage.set("user",JSON.stringify(user));
                window.location.reload();
            })
            .catch(error =>{
        
            })
        })
         

    }

    async function handleSignup(){
        setLoading(true);
        try{
           await signup(emailRef.current.value,passwordRef.current.value);
        }catch{
            alert("error");
        }
        setLoading(false);

    }


        return ( 
            <div className='logincontainerSignup'>
                <input ref={emailRef} className='logintext' type='text' placeholder='Email adress' />
                <input ref={NameRef} className='logintext' type='text' placeholder='Name' />
                <input ref={passwordRef} className='loginpassword'  type='password' placeholder='password'/>
                <button disabled={loading} onClick={handleSignup} className='loginbouton'>Sign Up</button>
            </div>
        );
};
 