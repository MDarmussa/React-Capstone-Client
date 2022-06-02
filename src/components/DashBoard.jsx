// import { ExpenseTotal } from "./ExpenseTotal";
import ExpenseForm from "./ExpenseForm";
import { LatestExpenses } from "./LatestExpenses";
import React, { useEffect } from "react";
import { Grid } from "@mui/material/";
import BarChart from "./BarChart";

const DashBoard = (props) => {
  const { user, expense, triggerReload, setTriggerReload } = props;
  return (
    <>
      <Grid
        container={true}
        sx={{ display: "flex",justifyContent: "center", alignItems:"center", backgroundColor: "#162B1E", height: '100%'  }}
      >
        <Grid
          item={true}
          sx={{ alignItems: "center", backgroundColor: "#162B1E", width: "80%" }}
          xs={4} md={8}
        >
          <Grid item={true} sx={{ alignItems: "center" }}>
            <ExpenseForm
              user={user}
              triggerReload={triggerReload}
              setTriggerReload={setTriggerReload}
            />
          </Grid>
          <Grid
            item={true}
            sx={{ alignItems: "center", backgroundColor: "yellow" }}
          >
            <LatestExpenses
              user={user}
              expense={expense}
              triggerReload={triggerReload}
              setTriggerReload={setTriggerReload}
            />
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default DashBoard;
