import React from 'react';
import {Link} from 'react-router-dom';

const Header=()=>{
    return <div>
       <Link to="/">Home</Link>
       <hr/>
       <Link to="/login">login</Link>
    </div>
}
export default Header;
