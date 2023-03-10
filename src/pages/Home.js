import React from 'react';
import backgroundImage from '../assets/img/heroimg.png';


function Home() {
  return (
    <div className="gradient">
        <div style={{
          minHeight: "100vh",
          minWidth: "100vw",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          backgroundImage: "url(" + backgroundImage + ")",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundAttachment: "fixed",
          padding: "0",
          margin: "auto",
        }}>

        <h1 id="mainText" className="display-1 text-center" xs="auto" style={{ marginTop: "250px", marginBottom: "200px" }}>James Inanoria</h1>

      </div>
    </div>
         

  )	
}
    

export default Home;