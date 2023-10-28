import { Link } from 'react-router-dom';
import {useEffect, useState} from "react"

const HomePage = () => {

    return ( 
        <>
          <h1>home</h1>
          <Link to="/about">go to about</Link>
        </>
     );
}
 
export default HomePage;