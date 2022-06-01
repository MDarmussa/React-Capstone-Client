import React from "react";
import { AppBar, Stack, Button } from "@mui/material";
import Toolbar from "@mui/material/Toolbar";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";
// import "../pages/Home.css";


export default function Nav() {

  return (
    <AppBar position="sticky">
      <div className="navBar">
        <Toolbar className="AppBar">

          <div className="leftSide">
            <div>
              <a href="/">
                <CurrencyExchangeIcon
                  className="homeIcone"
                  sx={{ fontSize: 30, color: "white", ml: 2 }}
                  color="action"
                />
              </a>
            </div>
          </div>

          <div className="toolbarActions">
            <Stack direction="row">
                  <Button
                className="navRight"
                sx={{ fontSize: 18, color: "#FBCD8A" }}
                onClick={() =>
                  window.open(
                    "https://github.com/MDarmussa/React-Capstone-Client",
                    "_blank"
                  )
                }
              >
                See Code
              </Button>
            </Stack>
          </div>

        </Toolbar>
      </div>
    </AppBar>
  );
}
