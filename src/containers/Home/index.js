import React from 'react';
import Header from '../../components/Header'

const Home=()=>{
    return <div>
        <Header/>
        its  homed
        <button onClick={()=>{alert('click')}}>
            click me!
        </button>
    </div>
}
export default Home;
