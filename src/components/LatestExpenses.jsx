import { format } from "date-fns";
import { v4 as uuid } from "uuid";
import PerfectScrollbar from "react-perfect-scrollbar";
import {
  Box,
  Button,
  Card,
  Grid,
  CardHeader,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableSortLabel,
  Tooltip,

} from "@mui/material";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import { SeverityPill } from "./SeverityPill";
import axios from "axios";
import { useEffect, useState } from "react";
import { id } from "date-fns/locale";

export const LatestExpenses = (props) => {
  const [expenses, setExpenses] = useState([]);
  const { user, triggerReload, setTriggerReload } = props;
  
  useEffect(() => {
    const getExpenses = axios({
      url: `http://localhost:8080/expense/userExpenses/${user._id}`, //taken from server.js line 33
      method: "GET",
    })
      .then((response) => {
        setExpenses(response.data);
        setTriggerReload(false);
      })
      .catch((error) => {
        console.log(error);
      });
  },[triggerReload]);
  
async function deleteHandler(id) { 
  console.log(id)
    const deleter = await axios({method: "delete", url: `http://localhost:8080/expense/deleteExpense/${id}` })
    console.log(deleter);
    setTriggerReload(true);
          }


          let amtArray=[];

          const arrayAmounts = expenses.map((expense)=>{
          amtArray.push(expense.amount )
            console.log("I am the array of amounts:",amtArray)
          console.log("I am the amount array", amtArray)

          })

        const sumTotal = amtArray.reduce((a,b)=>a+b,0)
        console.log("i am the sum:", sumTotal)
    
  return (
    <>
    <Grid container
      sx={{ display: "flex",justifyContent: "center", alignItems:"center",backgroundColor: "#FBCD8A", height: "800", width: "800"  }}
    >
     
    <Grid item>
    <h1>Expense Breakdown</h1>
      <p>
     You have spent ${sumTotal} so far
     </p>
    </Grid>

    <Card >
    <Grid item
     sx={{backgroundColor: "#FBCD8A",  }}
    >
      <CardHeader title="Recent Expenses" 
        // sx={{display: 'flex',flexWrap:"wrap",}}
      />
      <PerfectScrollbar>
        {/* <Box sx={{ minWidth: "auto" }}> */}
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>
                 Category
                
                </TableCell>
                <TableCell>
                <Tooltip
                    enterDelay={300}
                    title="Sort"
                  >
                    <TableSortLabel
                      active
                      direction="desc"
                    >
                  Amount 
                  </TableSortLabel>
                  </Tooltip>
                </TableCell>
                <TableCell sortDirection="desc">
                  
                      Payment Method
                   
                </TableCell>
                <TableCell>
                  Date
                </TableCell>
                <TableCell>
                  Comment
                </TableCell>
                <TableCell>
                 Delete
                
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {/* {orders.map((order) => ( */}
                {expenses.map((expense, index) => (
                <TableRow
                  hover
                  key={index}
                >
                     <TableCell>
                    {expense.category}
                  </TableCell>
                  <TableCell>
                    {expense.amount}
                  </TableCell>
                  <TableCell>
                    {expense.paymentMethod}
                  </TableCell>
                  <TableCell>
                   { expense.date}
                  </TableCell>  
                  <TableCell>
                  { expense.comment}
                  </TableCell>
                  <TableCell>

              
                    <Button
                    className="deleteButton"
                        style={{
                          maxWidth: "200px",
                          maxHeight: "50px",
                          minWidth: "50px",
                          minHeight: "30px",
                          fontSize: "14px",
                        
                        }}
                        sx={{m: 6, pl:3, pr:3}}

                         type='submit' onClick={() => deleteHandler(expense._id)}>Delete</Button>
                    {/* <p>{expense._id}</p> */}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        {/* </Box> */}
      </PerfectScrollbar>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        {/* <Button
          color="primary"
          endIcon={<ArrowRightIcon fontSize="small" />}
          size="small"
          variant="text"
        >
          View all
        </Button> */}
      </Box>
      </Grid>
    </Card>
  
    </Grid>
    </>
  );
}
