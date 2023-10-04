import React from 'react'
import Navbar from './Navbar'
import Landingimages from './Landingimages'
import Menu from './Menu'
import Contactus from './Contactus'

function Home() {
    return (
        // <div style={{color:"white", background:"black"}}>
        <div>
            <Navbar></Navbar>
            <Landingimages></Landingimages>
            <Menu></Menu>
            <Contactus></Contactus>
        </div>
    )
}

export default Home