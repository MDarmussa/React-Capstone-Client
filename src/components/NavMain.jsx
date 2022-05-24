import React from 'react';
import { AppBar, Stack, Typography, Button } from '@mui/material';
import  Toolbar from '@mui/material/Toolbar';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';

export default function Nav() {
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
            <div className='rightSide'>
              <Stack direction='row'> 
                <a href='/login'>
                  <Button className='navRight' sx={{ fontSize: 18, color: 'white' }}>login</Button>
                </a>
                <a href='/register'>
                  <Button className='navRight' sx={{ fontSize: 18, color: 'white' }}>signup</Button>
                </a>
                <a href='/'>
                  <Button className='navRight' sx={{ fontSize: 18, color: 'white' }} onClick={()=> window.open("https://github.com/MDarmussa/React-Capstone-Client", "_blank")}>SeeCode</Button>
                </a>
              </Stack>
            </div>
        </Toolbar>
      </div>
    </AppBar>
  );
}

