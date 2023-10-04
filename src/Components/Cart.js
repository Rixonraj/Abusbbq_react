import axios from 'axios';
import { useFormik, useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { values } from 'underscore';
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';


function Cart(props) {
    const context = useContext(UserContext)
    const params = useParams()
    const [cartItems, setCartItems] = useState(context.contextCart);
    const [closePopup, setclosePopup] = useState();
    const navigate = useNavigate()
    // const [totalPrice, setTotalPrice] = useState()
    const totalPrice = useRef(0);
    useEffect(() => {

        var temp = 0;
        context.contextCart.forEach(element => {
            temp = (element.itemCost * element.quantity) + temp;
        });
        totalPrice.current = temp;
    })

    const placeOrder = useFormik({
        initialValues: {
            customerPhone: 0,
            customerName: ""
        },
        validate: (values) => {
            let error = {};
            if (values.customerPhone.toString() === "") {
                error.customerPhone = "Please enter valid Phone Number"
            }
            if (values.customerPhone === 0) {
                error.customerPhone = "Please enter valid Phone Number"
            }
            if (values.customerName === "") {
                error.customerName = "Please enter valid Name"
            }
            return error;
        },
        onSubmit: async (values) => {
            try {
                console.log("values", values)
                const myorder={
                    name: values.customerName,
                    phone: values.customerPhone,
                    order: context.contextCart.map(item => {return {itemid: item.id, quantity : item.quantity}})

                }
                console.log("my order", myorder)
                // const order = await axios.post(`${process.env.REACT_APP_BACKENDURL}/order`, values)
                // if (order.data.message === "Success ceated") {
                //     navigate(`/order/${order.data.orderid}`)
                // } else {
                //     alert(order.data.message)
                // }

                // setclosePopup(false);
            }
            catch (error) {
                console.log("ERROR:", error)
                alert(error.response.data.message)
            }

        }
    })

    return (
        <Popup
            trigger={

                <span style={{ cursor: 'pointer' }} >Cart - ( {context.contextCart.length} )</span>

            }
            onOpen={() => { placeOrder.resetForm(); setclosePopup(true); console.log("context.contextCart", context.contextCart) }}
            open={closePopup}
        >
            {close => (
                <div className="modal modal-dialog-centered">

                    <div className='card shadow mb-4 popupcard'>
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h4 className={`m-0 font-weight-bold `}>
                                My Cart</h4>
                            <button className="close popupClose" onClick={close}>
                                &times;
                            </button>
                        </div>
                        <div className="content">
                            <form onSubmit={placeOrder.handleSubmit}>
                                {context.contextCart.length >= 1 ? <div class="bg-light my-1">
                                    <div class="container">


                                        <div class="row">
                                            <div class="col-lg-9">
                                                <div class="card border shadow-0">
                                                    {context.contextCart.map((cartItem) => {
                                                        return <div class="m-4">
                                                            <div class="row gy-3 mb-1">
                                                                <div class="col-lg-7">
                                                                    <div class="me-lg-5">
                                                                        <div class="d-flex">
                                                                            <img src={cartItem.itemImage} class="border rounded me-3" style={{ width: '96px', height: ' 96px' }} />
                                                                            <div class="">
                                                                                <a href="#" class="nav-link">{cartItem.itemName}</a>
                                                                                <p class="text-muted">{cartItem.itemDescription}</p>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                                                                    <div class="">
                                                                        Qty ({cartItem.quantity})
                                                                    </div>
                                                                </div>
                                                                <div class="col-lg-2 col-sm-6 col-6 d-flex flex-row flex-lg-column flex-xl-row text-nowrap">
                                                                    <div class="">
                                                                        <text class="h6">₹ {cartItem.quantity * cartItem.itemCost}</text> <br />
                                                                        <small class="text-muted text-nowrap">₹ {cartItem.itemCost} / per item </small>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    })}


                                                    <div class="border-top pt-4 mx-4 mb-4">
                                                        <p><i class="fas fa-truck text-muted fa-lg"></i> Free Delivery within 1-2 weeks</p>
                                                        <p class="text-muted">
                                                            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                                                            aliquip
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="col-lg-3">
                                                <div class="card shadow-0 border">
                                                    <div class="card-body">
                                                        <div className='container'>
                                                            <div className='row mb-2'>
                                                                <div className='col-lg-12 col-sm-12'>
                                                                    <label for="customerName" className='mx-1'>Name</label>
                                                                    <input type="text" id='customerName' placeholder='Name'
                                                                        className={`mb-2 w-100 show form-control ${placeOrder.touched.customerName && placeOrder.errors.customerName ? "border-danger" : ""} ${placeOrder.touched.customerName && !placeOrder.errors.customerName ? "border-secondary" : ""}`}
                                                                        onChange={placeOrder.handleChange}
                                                                        value={placeOrder.customerName} />
                                                                    {
                                                                        placeOrder.touched.customerName && placeOrder.errors.customerName ? <><span style={{ color: 'red' }}>{placeOrder.errors.customerName}</span> </> : null
                                                                    }
                                                                </div>
                                                                <div className='col-lg-12 col-sm-12'>
                                                                    <label for="customerName" className='mx-1'>Number</label>
                                                                    <input type="number" id='customerPhone' placeholder='Phone Number'
                                                                        className={`mb-2 w-100 show form-control ${placeOrder.touched.customerPhone && placeOrder.errors.customerPhone ? "border-danger" : ""} ${placeOrder.touched.customerPhone && !placeOrder.errors.customerPhone ? "border-secondary" : ""}`}
                                                                        onChange={placeOrder.handleChange}
                                                                        value={placeOrder.customerPhone} />
                                                                    {
                                                                        placeOrder.touched.customerPhone && placeOrder.errors.customerPhone ? <><span style={{ color: 'red' }}>{placeOrder.errors.customerPhone}</span> </> : null
                                                                    }
                                                                </div>
                                                            </div>

                                                        </div>
                                                        <div class="d-flex justify-content-between">
                                                            <p class="mb-2">Total price:</p>
                                                            <p class="mb-2 fw-bold">₹ {totalPrice.current}</p>
                                                        </div>

                                                        <div class="mt-3">
                                                            <button className='btn btn-success w-100 shadow-0 mb-2' type={"submit"}>Place Order</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                    : <h1>Cart is Empty</h1>
                                }

                            </form>
                        </div>
                    </div>


                </div>
            )}
        </Popup>

    )
}
export default Cart