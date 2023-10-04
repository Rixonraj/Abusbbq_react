import React from 'react'
import mapimage from '../assets/mapimage.png'
function Contactus() {
  const handlemapClick = () => {
    window.open("https://www.google.com/maps/search/12.837323655198503,+79.69486743011518/@12.8373237,79.6948674,17z?entry=ttu")
  }
  return (
    <div className='container'>
    
    <div className='row' >
      <img className='card col-xl-7 col-md-7 col-sm-12 p-1 m-2'  src={mapimage} onClick={handlemapClick} />
      <br/>
      <div className='col-xl-3 col-md-4 col-sm-12'>
        <h3>Address</h3>
        <p>No1, Near Ekabaranathar Temple, Kanchipuram 631502</p>
        <h3>Phone</h3>
        <p>+91 1234567890</p>
      </div>
    </div>
      
    </div>
  )
}

export default Contactus