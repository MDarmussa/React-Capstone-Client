import { Button } from "@mui/material";
import "./Home.css"

function Home() {
  return (
    <>
    <div className="body-container">
      <main className="home-container">
        <div className="main-container">
          <div>
            <h1 className="main-title">Spence</h1>
          </div>
          <div>
            <h2>Manage your wallet with just a few clicks</h2>
          </div>
          <div>
            <Button className="main-button" href="register" variant="unoutlined"  
            sx={{ 
                fontSize: 14, 
                backgroundColor: '#FBCD8A', 
                color: '#162B1E', 
                fontFamily:" Libre Bodoni", }}
            >
              get balanced.
            </Button>
          </div>
        </div>
      </main>
      </div>
    </>
  );
}
export default Home;
