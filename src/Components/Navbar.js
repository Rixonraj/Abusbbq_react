import React, { useState } from 'react'
import Cart from './Cart'

function Navbar() {
    const [navbar,setNavbar] = useState(false)
    const changebackground = ()=>{
      // console.log("window.scrollY",window.scrollY)
      if(window.scrollY >=80){
        setNavbar(true)
      }else{
        setNavbar(false)
      }
    }
  
    window.addEventListener('scroll',changebackground)
    return (
        <nav  className={navbar ? 'navbar active ' : 'navbar'} style={{display:'flex', alignContent:'center', paddingTop:'20px'}}>
            <h1 className='mx-auto' >Abu's Barbeque</h1>
            <div style={{ position: 'relative', right: '79px'}}><Cart/></div>
        </nav>
    )
}

export default Navbar