import { Avatar, Box, Card, CardContent, Grid, Typography } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';
import {useEffect, useState} from 'react';
import axios from "axios";


export const ExpenseTotal = (props) => {

  const [expenses, setExpenses] = useState([]);

  // NOT WORKING const totalSum = expenses.amount.reduce((a, c) => a + c.qty * c.amount, 0);
  // console.log(totalSum)

//   NOT WORKING const sumValues = expenses => expenses.amount(expenses).reduce((a, b) => a + b);
// console.log(sumValues);


let amtArray=[];

const arrayAmounts = expenses.map((expense)=>{
amtArray.push(expense.amount )
  console.log("I am the array of amounts:",amtArray)
console.log("I am the amount array", amtArray)

 })

const sumTotal = amtArray.reduce((a,b)=>a+b,0)
console.log("i am the sum:", sumTotal)

//  console.log("i should be an array", arrayAmounts)
//   function totalExpenses(arrayAmounts){
//  let sum=0;
//  for (let i=0; i<arrayAmounts.length;i++){
//    console.log("i am the for loop", i)
//  sum+=arrayAmounts[i]
//  console.log("this is the sum", sum)

//  }}

  // amounts.reduce((a, c) => a + c.qty * c.amount, 0)





  const { user } = props;

  useEffect(() => {
    const getExpenses = axios({
      url: `http://localhost:8080/expense/userExpenses/${user._id}`, //taken from server.js line 33
      method: "GET",
      // data: payload
    })
      .then((response) => {
        // console.log("I am the response", response);
        setExpenses(response.data);
      })
      .catch(() => {
        console.log("ERROR; Data has NOT received from the server!");
      });
    // console.log("this is the list of expenses from the server", getExpenses);
    //  console.log(getExpenses.category)
  }, []);

  return(
  <Card
    sx={{ height: '100%' }}
  >
    <CardContent>
    
            
                 
      <Grid
        container
        spacing={3}
        sx={{ justifyContent: 'space-between' }}
      >
        <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            BUDGET
          </Typography>
          <Typography
            color="textPrimary"
            variant="h4"
          >


         {/* {expenses.map((expense, index) => (
         <h1>{expense.amount}</h1> //proposal-- do math inside here
                  ))}   */}
          </Typography>
        </Grid>
        <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'error.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid>
      </Grid>
      <Box
        sx={{
          pt: 2,
          display: 'flex',
          alignItems: 'center'
        }}
      >
        <ArrowDownwardIcon color="error" />
        <Typography
          color="error"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
         $ {sumTotal}
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Since last month
        </Typography>
      </Box>
    </CardContent>
  </Card>
  )
        };
