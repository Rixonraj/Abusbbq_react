import React, { useState } from 'react'

function AdminOrders() {
  const [receivedOrders, setreceivedOrders] = useState([
    {
      id: 1,
      customerName: "Raj",
      customerPhone: 6,
      status: 'Accept Order',
      totalCost: 1200,
      order: [
        {
          "id": 1,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 1,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        },
        {
          "id": 2,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 1,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        },
        {
          "id": 3,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 2,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        }
      ]
    },
    {
      id: 2,
      customerName: "Rixon",
      customerPhone: 2,
      status: 'Accept Order',
      totalCost: 1200,
      order: [
        {
          "id": 1,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 1,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        },
        {
          "id": 2,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 1,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        },
        {
          "id": 3,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 2,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        }
      ]
    },
    {
      id: 3,
      customerName: "Rixon Raj",
      customerPhone: 2,
      status: 'Accept Order',
      totalCost: 1200,
      order: [
        {
          "id": 1,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 1,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        },
        {
          "id": 2,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 1,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        },
        {
          "id": 3,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 2,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        }
      ]
    },
    {
      id: 4,
      customerName: "Ron",
      customerPhone: 2,
      status: 'Accept Order',
      totalCost: 1200,
      order: [
        {
          "id": 1,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 1,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        },
        {
          "id": 2,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 1,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        },
        {
          "id": 3,
          "itemName": "BBQ",
          "itemCost": 300,
          "quantity": 2,
          "itemDescription": "Roasted Aroma juicy chicken",
          "itemImage": "https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
        }
      ]
    }

  ])


  return (
    <div className='container'>
      <h2 className='my-3'>Orders</h2>
      <table class="text-center rounded-3 row" style={{border:'solid 1px'}}>
        <thead class="thead-dark">
          <tr className='row mx-2'>
            <th className="col-lg-1 col-sm-12">Id</th>
            <th className="col-lg-3 col-sm-12">Items</th>
            <th className="col-lg-1 col-sm-12">Price</th>
            <th className="col-lg-3 col-sm-12">Customer Details</th>
            <th className="col-lg-4 col-sm-12">Status</th>
          </tr>
        </thead>
        <tbody>
          {receivedOrders.map((receivedOrder, index) => {
            return <tr className="rounded-3 row my-2 mx-2" style={{border:'solid 1px'}}>
              <td className="col-lg-1 col-sm-12">#{receivedOrder.id}</td>
              {/* <td>{receivedOrder.itemName} {receivedOrder.quantity}</td> */}
              <td className="col-lg-3 col-sm-12">
                {receivedOrder.order.map((receivedOrder1) => { return <h6>{receivedOrder1.itemName} - {receivedOrder1.quantity} * {receivedOrder1.itemCost}</h6> })}
              </td>
              <td className="col-lg-1 col-sm-12"><h6>₹ {receivedOrder.totalCost}</h6></td>
              <td className="col-lg-3 col-sm-12"><h6>Phone : {receivedOrder.customerPhone} <br /> Name : {receivedOrder.customerName}</h6></td>
              <td className='d-flex col-lg-4 col-sm-12 my-auto' >
                {receivedOrder.status === 'Accept Order' ? <div className=' mx-auto d-flex'> <button className={`mx-1 btn btn-primary fitHeightAction ${receivedOrder.status === 'Accept Order' ? 'd-block' : 'd-none'}`} onClick={() => {
                  let tempArr = [...receivedOrders];
                  tempArr[index].status = 'Ready';
                  setreceivedOrders(tempArr)
                }}
                  type="button">Accept Order</button>
                  <button className={`mx-1 btn btn-danger fitHeightAction`} onClick={() => {
                    let tempArr = [...receivedOrders];
                    tempArr[index].status = 'Cancelled';
                    setreceivedOrders(tempArr)
                  }} type="button">Cancel</button>
                </div>

                  : (receivedOrder.status === 'Ready' ? <div className=' mx-auto d-flex'> <button className={`mx-1 btn btn-success fitHeightAction`}
                    onClick={() => {
                      let tempArr = [...receivedOrders];
                      tempArr[index].status = 'Completed';
                      setreceivedOrders(tempArr)
                    }} type="button">Ready</button>

                    <button className={`mx-1 btn btn-danger fitHeightAction`} onClick={() => {
                      let tempArr = [...receivedOrders];
                      tempArr[index].status = 'Cancelled';
                      setreceivedOrders(tempArr)
                    }} type="button">Cancel</button>
                  </div>

                    : <><h5 className={`${receivedOrder.status === 'Completed' ? 'd-block text-center mx-auto fitHeightAction text-success' : 'd-none'}`} style={{width:'80%'}}> Completed</h5>
                    <h5 className={`${receivedOrder.status === 'Cancelled' ? 'd-block text-center mx-auto fitHeightAction text-danger' : 'd-none'}`} style={{width:'80%'}} > Cancelled</h5> </>

                  )}
              </td>
              
            </tr>
          })}
        </tbody>
      </table>

    </div>
  )
}

export default AdminOrders