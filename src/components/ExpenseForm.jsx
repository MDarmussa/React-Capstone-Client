import * as React from "react";
import {
  Typography,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material/";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { MenuItem, Button } from "@mui/material";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import axios from "axios";
import "../pages/Home.css";

const currencies = [
  {
    value: "USD",
    label: "$",
  },
  {
    value: "EUR",
    label: "€",
  },
  {
    value: "BTC",
    label: "฿",
  },
  {
    value: "JPY",
    label: "¥",
  },
];

const categories = [
  { value: "Utilities", label: "Utilities" },
  { value: "Housing", label: "Housing" },
  { value: "Transportation", label: "Transportation" },

  { value: "Medical", label: "Medical" },

  { value: "Pet", label: "Pet" },

  { value: "Credit Cards", label: "Credit Cards" },
  { value: "Entertainment", label: "Entertainment" },
  { value: "Personal Care", label: "Personal Care" },
  { value: "Grocery", label: "Grocery" },
  { value: "Dining", label: "Dining" },
  { value: "Subscription Services", label: "Subscription Services" },
  { value: "Investments", label: "Investments" },
  { value: "Savings", label: "Savings" },
  { value: "Childcare", label: "Childcare" },
  { value: "Student Loans", label: "Student Loans" },
  { value: "Clothing", label: "Clothing" },
  { value: "Insurance", label: "Insurance" },
  { value: "Other", label: "Other" },
];

const payments = [
  {
    value: "Debit Card",
    label: "Debit Card",
  },
  {
    value: "Credit Card",
    label: "Credit Card",
  },
  {
    value: "Cash",
    label: "Cash",
  },
  {
    value: "Bitcoin",
    label: "Bitcoin",
  },
  {
    value: "Other",
    label: "Other",
  },
];
export default function ExpenseForm(props) {
  const [value, setValue] = React.useState(null);

  const [currency, setCurrency] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [payment, setPayment] = React.useState("");
  const [note, setNote] = React.useState("");
  const [date, setDate] = React.useState();
  // const [user, setUser]= React.useState({user})

  const { user, triggerReload, setTriggerReload } = props;

  // console.log("these are the items carried over from login:",props);

  const handleChange = (event) => {
    setCurrency(event.target.value);
  };

  const CatUpdate = (event) => {
    setCategory(event.target.value);
  };

  const AmtUpdate = (event) => {
    setAmount(event.target.value);
  };

  const paymentUpdate = (event) => {
    setPayment(event.target.value);
  };
  // console.log(currency);

  const dateUpdate = (value) => {
    setDate(value);
  };

  const noteUpdate = (event) => {
    setNote(event.target.value);
  };

  const payload = {
    category: category,
    amount: amount,
    paymentMethod: payment,
    date: date,
    comment: note,
    username: user._id, // RO Comment: update with same value of username that was passed in from login/register state from props
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setCategory("");
    setAmount("");
    setPayment("");
    setNote("");
    setCurrency("");
    setDate(null);
    setTriggerReload(true);

    axios({
      url: `${process.env.REACT_APP_SERVER_URL}/expense/addExpense`, //taken from server.js line 33
      method: "POST",
      data: payload,
    })
      .then(() => {
        console.log("Data has been sent to the server!");
      })
      .catch(() => {
        console.log("ERROR; Data has NOT been sent to the server!");
      });
  };

  return (
    <React.Fragment>
      <form  onSubmit={handleSubmit}>
        <Box
          sx={{
            "& .MuiTextField-root": { mx: "auto", width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h6" gutterBottom
           sx={{color:"#FBCD8A"}}
          >
          </Typography>
          <Typography
            variant="h5"
            sx={{ display: "flex",justifyContent: "center", alignItems:"center", fontFamily:" Libre Bodoni",color:"#FBCD8A", mb: 6 }}
            gutterBottom
          >
            Enter An Expense Item
          </Typography>
          <Grid
            container
            spacing={3}
            sx={{
              display: "flex",justifyContent: "center", alignItems:"center",
              gap: 1,
              gridTemplateColumns: "repeat(2, 1fr)",
            }}
          >
            <Grid item 
            >
              <InputLabel  htmlFor="outlined-adornment-amount"></InputLabel>
              <TextField
              sx={{backgroundColor:"#FBCD8A", borderRadius:"3px"}}
                required 
                id="outlined-adornment-amount"
                value={amount}
                onChange={AmtUpdate}
                label="Amount"
                InputLabelProps={{style : {color : '#162B1E', fontFamily:" Libre Bodoni", paddingLeft: "8px" }}}
                variant="standard"
               
              />
            </Grid>
            <Grid item 
            >
              <TextField
              sx={{backgroundColor:"#FBCD8A", borderRadius:"3px"}}
              required
                id="outlined-select-category"
                select label="Expense Category"
                value={category}
                onChange={CatUpdate}
                
                InputLabelProps={{style : {color : '#162B1E', fontFamily:" Libre Bodoni", paddingLeft: "8px" }}}
                variant="standard"
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item 
            >
              <TextField
              required
                id="outlined-select-currency"
                select
                label="Currency"
                value={currency}
                onChange={handleChange}
                sx={{backgroundColor:"#FBCD8A", borderRadius:"3px"}}
                InputLabelProps={{style : {color : '#162B1E', fontFamily:" Libre Bodoni", paddingLeft: "8px" }}}
                variant="standard"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item 
            >
              <TextField
              required
                id="outlined-select-currency"
                select
                label="Payment Method"
                value={payment}
                onChange={paymentUpdate}
                sx={{backgroundColor:"#FBCD8A", borderRadius:"3px"}}
                InputLabelProps={{style : {color : '#162B1E', fontFamily:" Libre Bodoni", paddingLeft: "8px" }}}
                variant="standard"
              >
                {payments.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item 
            >
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={date}
                  variant="standard"
                  InputLabelProps={{style : {color : '#162B1E', fontFamily:" Libre Bodoni", paddingLeft: "8px" }}}
                  onChange={(updatedDate) => {
                    dateUpdate(updatedDate);
                  }}
                  renderInput={(params) => <TextField 
                  required {...params}       
                  sx={{backgroundColor:"#FBCD8A", color : '#162B1E', borderRadius:"3px"}} />}
                  
                />
              </LocalizationProvider>
            </Grid>

            <Grid item 
            >
              <TextField
                id="outlined-basic"
                value={note}
                onChange={noteUpdate}
                sx={{backgroundColor:"#FBCD8A", borderRadius:"3px"}}
                label="Notes"
                InputLabelProps={{style : {color : '#162B1E', fontFamily:" Libre Bodoni", paddingLeft: "8px" }}}
                variant="standard"
              />
            </Grid>
            <br />
         
            <Grid container 
            sx={{justifyContent:"center", pt:2}}>
            <Grid item 
            // xs={12} md={6}
            // xs={4} md={8}
            >
              <div>
              {/* <button className="submitButton" variant="contained">
                Submit
              </button> */}
                  <Button
               style={{
                maxWidth: "200px",
                maxHeight: "50px",
                minWidth: "50px",
                minHeight: "30px",
                fontSize: "17px",
                backgroundColor: '#FBCD8A  ',
                color:"#162B1E", 
              }}
              sx={{mb: 6, pl:3, pr:3}}
                className="submitButton"
                type="submit"
                fullWidth
                variant="contained"
                size="medium"
              >
                Submit
              </Button>

              </div>
              </Grid>
            </Grid>
          </Grid>
          {/* </Grid> */}
        </Box>
      </form>
    </React.Fragment>
  );
}
