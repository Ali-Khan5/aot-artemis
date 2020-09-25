import React from 'react';
import NavImg from "./NAVBAR.svg"
import {Link} from "react-router-dom"
function App() {
  return (
    <div >
       <Link to="/" ><img src={NavImg}  style={{width:'100%',minWidth:'800px'}} alt='artemis logo' /> </Link>
    </div>
  );
}

export default App;
