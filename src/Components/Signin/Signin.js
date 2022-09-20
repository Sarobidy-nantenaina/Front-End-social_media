import { async } from '@firebase/util';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import React, { useRef, useState } from 'react';



export default function Signin(){

    const [loading,setLoading]=useState(false);

     const emailRef=useRef();
     const passwordRef=useRef();
     const auth = getAuth();

     function login(email,password){
        return signInWithEmailAndPassword(auth,email,password)
        .then((userCredential)=>{
             var user = userCredential.user;
             localStorage.set("user",JSON.stringify(user));
             window.location.reload();
        })
        .catch((error)=>{
            var errorCode = error.code;
            var errorMessage = error.message;
        })

    }

    async function handleSignin(){
      setLoading(true)
      try{
        await login(emailRef.current.value,passwordRef.current.value);
     }catch{
        alert("Error!");
     }
     setLoading(false);

    }
        
        return ( 
            <div className='logincontainerSignin' >
                <input ref={emailRef} className='logintext inputtext1' type='text' placeholder='Email adress' />
                <input ref={passwordRef} className='loginpassword inputtext2'  type='password' placeholder='password'/>
                <button disabled={loading} onClick={handleSignin} className='loginbouton inputbutt'>Log In</button>
            </div>
         );
}
 