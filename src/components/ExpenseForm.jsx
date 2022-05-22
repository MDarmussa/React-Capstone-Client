import * as React from "react";
import {
  Typography,
  FormControl,
  InputLabel,
  OutlinedInput,
  InputAdornment,
} from "@mui/material/";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Box from "@mui/material/Box";
import { MenuItem } from "@mui/material";
import { Atm } from "@mui/icons-material";

import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import FormGroup from "@mui/material/";
import axios from "axios";

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
export default function ExpenseForm() {
  const [value, setValue] = React.useState(null);

  const [currency, setCurrency] = React.useState("");
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [payment, setPayment] = React.useState("");
  const [note, setNote] = React.useState("");
  const [date, setDate] = React.useState()

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
  console.log(currency);

  const dateUpdate = (value) => {
    setDate(value);
  };

  const noteUpdate = (event) => {
    setNote(event.target.value);
  };


  const handleSubmit = (event) => {
    event.preventDefault();

    setCategory('');
    setAmount('');
    setPayment('');
    setNote('');
    setCurrency('');
    setDate(null);

    axios({
      url: "http://localhost:8080/expense/addExpense", //taken from server.js line 33
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

  const payload = {
    category: category,
    amount: amount,
    paymentMethod: payment,
    date: date,
    comment: note,
    // username: username
  };
  console.log(payload);

  return (
    <React.Fragment>
      <form onSubmit={handleSubmit}>
        <Box
          // component="form"
          sx={{
            "& .MuiTextField-root": { m: 1, width: "25ch" },
          }}
          noValidate
          autoComplete="off"
        >
          <Typography variant="h6" gutterBottom>
            Enter Expense Item
          </Typography>
          <Grid container spacing={3}>
            {/* <Grid item xs={12} md={6}>
            <TextField
              required
              id="cardName"
              label="Name on card"
              fullWidth
              autoComplete="cc-name"
              variant="standard"
            />
          </Grid> */}

            <Grid item xs={12} md={6}>
              <InputLabel htmlFor="outlined-adornment-amount">
                Amount
              </InputLabel>
              <OutlinedInput
                id="outlined-adornment-amount"
                value={amount}
                onChange={AmtUpdate}
                startAdornment={
                  <InputAdornment position="start">$</InputAdornment>
                }
                label="Amount"
              />
            </Grid>
            
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-select-category"
                select
                label="Expense Category"
                value={category}
                onChange={CatUpdate}
                // helperText="Expense Category"
              >
                {categories.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-select-currency"
                select
                label="Currency"
                value={currency}
                onChange={handleChange}
                // helperText="Please select your currency"
              >
                {currencies.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-select-currency"
                select
                label="Payment Method"
                value={payment}
                onChange={paymentUpdate}
                // helperText="Payment Method"
              >
                {payments.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </TextField>
            </Grid>
            <Grid item xs={12} md={6}>
              <LocalizationProvider dateAdapter={AdapterDateFns}>
                <DatePicker
                  label="Date"
                  value={date}
                  onChange={(updatedDate) => {
                    dateUpdate(updatedDate);
                  }}
                  renderInput={(params) => <TextField {...params} />}
                />
              </LocalizationProvider>
            </Grid>

            <Grid item xs={12} md={6}>
              <TextField
                id="outlined-basic"
                label="Outlined"
                variant="outlined"
                value={note}
                onChange={noteUpdate}
                label="Notes"
              />
            </Grid>
            <Grid item xs={12} md={6}>
                <button variant="contained">Submit</button>
            </Grid>

            {/* <Grid item xs={12} md={6}>
            <TextField
              required
              id="cvv"
              label="CVV"
              helperText="Last three digits on signature strip"
              fullWidth
              autoComplete="cc-csc"
              variant="standard"
            />
          </Grid> */}
            {/* <Grid item xs={12}>
            <FormControlLabel
              control={
                <Checkbox color="secondary" name="saveCard" value="yes" />
              }
              label="Remember credit card details for next time"
            />
          </Grid> */}
          </Grid>
        </Box>
      </form>
    </React.Fragment>
  );
}
