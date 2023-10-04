import axios from 'axios';
import { useFormik, useFormikContext } from 'formik';
import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import Popup from 'reactjs-popup';
import { values } from 'underscore';
import { UserContext } from '../Context/UserContext';
import { useContext } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faEye, faTrash } from '@fortawesome/free-solid-svg-icons'
import { useRef } from 'react';


function AdminCreateNewItem(props) {
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
                const myorder = {
                    name: values.customerName,
                    phone: values.customerPhone,
                    order: context.contextCart.map(item => { return { itemid: item.id, quantity: item.quantity } })

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

                // <span style={{ cursor: 'pointer' }} >Admin Create New Item </span>
                <button type="button" className='btn btn-primary'>+ Create New Item</button>
            }
            onOpen={() => { placeOrder.resetForm(); setclosePopup(true); }}
            open={closePopup}
        >
            {close => (
                <div className="modal modal-dialog-centered">

                    <div className='card shadow mb-4 popupcard popupcard1'>
                        <div className="card-header py-3 d-flex flex-row align-items-center justify-content-between">
                            <h4 className={`m-0 font-weight-bold `}>
                            Create New Item</h4>
                            <button className="close popupClose" onClick={close}>
                                &times;
                            </button>
                        </div>
                        <div className="content">
                            <form onSubmit={placeOrder.handleSubmit}>
                                <div class="bg-light my-1">
                                    <div class="container">
                                        <div class="row">
                                            <div class="col-lg-9">
                                                <div class="card border shadow-0">
                                                    <div class="border-top pt-4 mx-4 mb-4">
                                                        <h6 className='mb-3'><FontAwesomeIcon icon={faEye} /> Preview</h6>
                                                        <div className='d-flex row'>
                                                            <img src="https://img.freepik.com/free-photo/side-view-shish-kebab-skewers-with-tomato-paper-ayran-white-plate_176474-3220.jpg?t=st=1694761082~exp=1694761682~hmac=e10df40d311e2e8e023fd3b0a97d1903e26be06f32d24f8a1668733933916ef6"
                                                            class="border rounded me-3 col-lg-4 col-sm-12" style={{ width: '220px', height: ' 220px'}} />
                                                            <div className="col-lg-7 col-sm-12">
                                                                <h6>Chicken Barbeque</h6>
                                                                <p>This BBQ chicken is insanely juicy, perfectly charred, and glistening with my secret homemade BBQ sauce</p>
                                                                <h6>₹ 365</h6>
                                                                <h6 className='text-success'>Available Now</h6>
                                                                <h6 className='text-danger'>Comming soon</h6>
                                                            </div>
                                                        </div>

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
                                                                    <label for="customerName" className='mx-1'>Description</label>
                                                                    <input type="text" id='customerName' placeholder='Name'
                                                                        className={`mb-2 w-100 show form-control ${placeOrder.touched.customerName && placeOrder.errors.customerName ? "border-danger" : ""} ${placeOrder.touched.customerName && !placeOrder.errors.customerName ? "border-secondary" : ""}`}
                                                                        onChange={placeOrder.handleChange}
                                                                        value={placeOrder.customerName} />
                                                                    {
                                                                        placeOrder.touched.customerName && placeOrder.errors.customerName ? <><span style={{ color: 'red' }}>{placeOrder.errors.customerName}</span> </> : null
                                                                    }
                                                                </div>
                                                                <div className='col-lg-12 col-sm-12'>
                                                                    <label for="customerName" className='mx-1'>Price</label>
                                                                    <input type="text" id='customerName' placeholder='Name'
                                                                        className={`mb-2 w-100 show form-control ${placeOrder.touched.customerName && placeOrder.errors.customerName ? "border-danger" : ""} ${placeOrder.touched.customerName && !placeOrder.errors.customerName ? "border-secondary" : ""}`}
                                                                        onChange={placeOrder.handleChange}
                                                                        value={placeOrder.customerName} />
                                                                    {
                                                                        placeOrder.touched.customerName && placeOrder.errors.customerName ? <><span style={{ color: 'red' }}>{placeOrder.errors.customerName}</span> </> : null
                                                                    }
                                                                </div>
                                                                <div className='col-lg-12 col-sm-12'>
                                                                    <label for="customerName" className='mx-1'>Availability</label>
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


                                                        <div class="mt-3">
                                                            <button className='btn btn-success w-100 shadow-0 mb-2' type={"submit"}>Create Item</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>


                            </form>
                        </div>
                    </div>


                </div>
            )}
        </Popup>

    )
}
export default AdminCreateNewItem