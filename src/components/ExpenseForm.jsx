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

import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';

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
    value: "Cash ",
    label: "Cash ",
  },
  {
    value: "Bitcoin ",
    label: "Bitcoin ",
  },
  {
    value: "Other ",
    label: "Other ",
  },
];
export default function ExpenseForm() {
  const [value, setValue] = React.useState(null);

  const [currency, setCurrency] = React.useState("EUR");
  const [category, setCategory] = React.useState("");
  const [amount, setAmount] = React.useState("");
  const [payment, setPayment] = React.useState("");
  const [note, setNote] = React.useState("");

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

  const noteUpdate = (event) => {
    setNote(event.target.value);
  };

  

  return (
    <React.Fragment>
      <Box
        component="form"
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
            <InputLabel htmlFor="outlined-adornment-amount">Amount</InputLabel>
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
          {/* <Grid item xs={12} md={6}>
          <TextField
            required
            id="cardNumber"
            label="Card number"
            fullWidth
            autoComplete="cc-number"
            variant="standard"
          />
        </Grid> */}

          <Grid item xs={12} md={6}>
            <TextField
              id="outlined-select-category"
              select
              label="Select Expense Category"
              value={category}
              onChange={CatUpdate}
              helperText="Expense Category"
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
              label="Select"
              value={currency}
              onChange={handleChange}
              helperText="Please select your currency"
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
              label="Select"
              value={payment}
              onChange={paymentUpdate}
              helperText="Payment Method"
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
        label="Basic example"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
          </Grid>

          <Grid item xs={12} md={6}>
            <InputLabel htmlFor="outlined-adornment-amount">Notes</InputLabel>
            <OutlinedInput
              id="outlined-adornment-amount"
              value={note}
              onChange={noteUpdate}
              startAdornment={
                <InputAdornment position="start">
                  Add comments (optional)
                </InputAdornment>
              }
              label="Notes"
            />
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
   
    </React.Fragment>
  );
}
