import React, { useState } from 'react';
import './Navbar.css';
import { Avatar, Grid } from '@mui/material';
import facebook8logo from '../../images/facebook8logo.png';
import house from '../../images/house.png';
import facebookpage from '../../images/facebookpage.png';
import watch2 from '../../images/watch2.jpg';
import avatar from '../../images/avatar.jpg';
import group from '../../images/group.png';
import market from '../../images/market.png';
import {logout} from '../../firebase';
import LoginHome from '../LoginForm/LoginHome';
import Layout from '../MainPage/Layout';

export default function Navbar() {
    
    const [loading,setLoading]=useState(false);

    async function handleLogout(){
        setLoading(true);
        try {
           await logout();
        } catch {
            alert("error")
        }
        setLoading(false);
    }

        return ( 
            <div className='Navbar'>
                <Grid container className='navbar-main' >
                    <Grid item xs ={3}>
                        <div className='navbar-left'>
                           <img className='navbar-logo' src={facebook8logo}/>
                           <input className='navbar-search' placeholder='search here' type="text"/>
                        </div>
                    </Grid>
                    <Grid item xs ={6} >
                        <div className='navbar-container'>
                            <div className='ext-nav-img active'>
                               <img className='navbar-img' src={house}/>
                               <div className='botom_img'></div>
                            </div>
                            <div className='ext-nav-img'>
                            <img className='navbar-img' src={facebookpage}/>
                            </div> 
                            <div className='ext-nav-img'>
                                <img className='navbar-img' src={watch2}/>
                            </div>
                            <div className='ext-nav-img'>
                                <img className='navbar-img img_group' src={group}/>
                            </div>
                            <div className='ext-nav-img'>
                                <img className='navbar-img' src={market}/>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs ={3}>
                        <div className='navbar-right'>
                            <div className='navbar_righttab'>
                               <Avatar className='navbar_rightimg' src={avatar}/> 
                               <div className='navbar_profilename'>ArchLinux</div>
                            </div>
                            <button className='logout' disabled={loading} onClick={handleLogout ? <span><LoginHome/></span> : <span><Navbar/><Layout/></span>} >Log Out</button>

                        </div>
                    </Grid> 
                    </Grid>
            </div>
         );
}
