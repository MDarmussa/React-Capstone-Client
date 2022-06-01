import React from 'react';
import { AppBar, Stack, Button } from '@mui/material';
import  Toolbar from '@mui/material/Toolbar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import "../pages/Home.css"
import axios from 'axios'


export default function NavDash() {
  const handleChange = () => {
    axios({  
      url: 'http://localhost:8080/user/logout/', 
      method: 'GET'
        })
        .then( (response)=>{
          // on Logout - we update the global state (isLoggedIn) to false
          window.sessionStorage.setItem('isLoggedIn', false)
          window.sessionStorage.setItem('user', '')
          // we navigate to the login page on Logout
          window.location.href = 'http://localhost:3000/logIn/' 
          console.log('Data has been sent to the server! Im A LOGOUT ')
        })
        .catch(()=>{
          console.log('ERROR; Data has NOT been sent to the server!')
        } )
  };
  
  return (
    <AppBar position= 'sticky' >
      <div className='navBar'>
        <Toolbar className='AppBar'>
          <div className='leftSide'> 
            <div>
               <a href="/">
               <CurrencyExchangeIcon className='homeIcone' sx={{ fontSize: 30, color: 'white', ml: 2 }} color="action" />
              </a>
            </div>
          </div>
            <div className='toolbarActions'>
              <Stack direction='row'> 
               
               {/* We use the global state isLoggedIn, to dynamically render the login/register buttons  */}
               {/* if isLoggedIn is set to false, we display the login/register buttons  */}
              {window.sessionStorage.isLoggedIn === 'false' && <div> <a href='/login'>
                  <Button  className='navRight' sx={{ fontSize: 18, color: '#FBCD8A'}}>Log In</Button>
                </a>
                <a href='/register'>
                  <Button className='navRight' sx={{ fontSize: 18, color: '#FBCD8A' }}>Register</Button>
                </a></div>}

                {/* We use the global state isLoggedIn, to dynamically render the logout button  */}
                {/* if isLoggedIn is set to true, we display the logout button  */}
                {window.sessionStorage.isLoggedIn === 'true' && <div> 
                  <Button onClick={handleChange}  className='navRight' sx={{ fontSize: 18, color: '#FBCD8A'}}>Logout</Button>
                </div>}
                
                  <Button className='navRight' sx={{ fontSize: 18, color: '#FBCD8A' }} onClick={()=> window.open("https://github.com/MDarmussa/React-Capstone-Client", "_blank")}>See Code</Button>
              
              </Stack>
            </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}
