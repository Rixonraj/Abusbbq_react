import React, { useState } from 'react'
import AdminCreateNewItem from './AdminCreateNewItem'

function AdminMenu() {

  const [menuArray,setmenuArray] = useState([
    {
      id:1,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:2,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:3,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:4,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:5,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:6,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:7,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:8,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:9,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:10,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    },
    {
      id:11,
      itemName: "BBQ",
      itemCost: 300,
      quantity: 0,
      itemDescription: "Roasted Aroma juicy chicken",
      itemImage: "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
    }

  ])

  return (
    <div className='container'>
      <div className='my-3 d-flex'style={{justifyContent:'space-between'}}>
        <h2>Menu</h2>
        <AdminCreateNewItem></AdminCreateNewItem>
      </div>
      {menuArray.map((item,index) => {
          return <div class="row rounded-3 py-2 my-1" style={{border:'solid 1px', justifyContent:'flexStart'}}>
          <div class="col-lg-9"  >
            <div class="d-flex" >
              <img src="https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
              class="border rounded me-3" style={{ width: '150px', height: ' 150px' }} />
              <div class="">
                <h6>{item.itemName}</h6>
                <p >{item.itemDescription}</p>
                <h6>₹ {item.itemCost}</h6>
                <h6 className='text-success'>Available</h6>
                <h6 className='text-danger'>Comming Soon</h6>
              </div>
            </div>
          </div>

          {/* <div class="col-lg-4 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
            <div class="">

              Qty asdsadsa
            </div>
          </div> */} 

          <div class="col-lg-2 col-sm-12 d-flex flex-row-reverse" style={{justifyContent:'flexStart',height:'fitContent',marginTop:'auto',marginBottom:'auto'}}>
          <button type="button" className='btn btn-warning mx-1'>Edit</button>
          <button type="button" className='btn btn-danger mx-1'>Delete</button>
          </div>
        </div>
      })}

      </div>
   
  )
}

export default AdminMenu