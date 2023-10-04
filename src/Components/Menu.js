import React, { useState } from 'react'
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';
function Menu() {
  const context = useContext(UserContext)
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

  const [cartItems,setCartItems] = useState([]);
  
  const handleAddToCart = (item,index) =>{
    // item.quantity = item.quantity+1;
    menuArray[index].quantity = menuArray[index].quantity +1;
    // setmenuArray([...menuArray])
    const cartItemsTemp = cartItems;
    console.log("menuArray",menuArray)
    if (cartItemsTemp.findIndex(cartitem => cartitem.id === menuArray[index].id) >= 0) {
      console.log("REMOVEDS")
      cartItemsTemp.splice(cartItemsTemp.findIndex(cartitem => cartitem.id === menuArray[index].id), 1);
    }
    cartItemsTemp.push(menuArray[index])
    console.log("item",item)
    console.log("index",index)
    // console.log("context.contextCart",context.contextCart)
    setCartItems( [...cartItemsTemp])
    setmenuArray([...menuArray])
    context.setcontextCart([...cartItems])
    console.log("cartItems",cartItems)
    console.log("context",context.contextCart.length)
  }

  const handleRemoveFromCart = (item,index) =>{
    console.log("item",item)
    console.log("index",index)
    if (item.quantity > 0) {
      item.quantity = item.quantity - 1;
      if(item.quantity === 0){
        cartItems.splice(cartItems.findIndex(cartitem => cartitem.id === item.id), 1);
      }
    }
    setmenuArray([...menuArray])
    console.log("cartItems",cartItems)
    context.setcontextCart([...cartItems])
  }

  return (
    <div className='container menuItem'>
      <h2>Menu </h2>
      <div className='row'>
        {menuArray.map((item,index) => {
          return <div class="card col-xl-2 col-md-2 col-sm-9 mx-2" style={{ borderStyle: 'solid', borderWidth: "1px", borderColor:"black", padding: "5px", marginTop:'3px'}}>
            <img class="card-img-top" alt='' src={item.itemImage} style={{ width: "80%", marginRight: "auto", marginLeft: "auto" }} />
            <div class="card-body">
              <h5 class="card-title text-center">{item.itemName}</h5>
              <h6 class="card-text text-center">{item.itemDescription}</h6>
              <h6 class="card-text text-center">{item.itemCost}</h6>
              <div class="d-flex mx-auto rounded-3"  style={{border:'solid 1px', width:'fit-content'}}>
                <button type="button" className='btn btn-dark' style={{zIndex:'unset'}} onClick={()=>handleRemoveFromCart(item,index)}>-</button>
                <h6 className='p-1' >{item.quantity}</h6>
                <button type="button" className='btn btn-dark' style={{zIndex:'unset'}}  onClick={()=>handleAddToCart(item,index)} >+</button>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default Menu