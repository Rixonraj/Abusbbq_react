import axios from 'axios'
import { useFormik } from 'formik'
import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import LOGO from '../assets/LOGO.png'
function AdminLogin() {
  // const userId = useContext(UserContext)
  const navigate = useNavigate()
  const loginForm = useFormik({
    initialValues: {
      username: "",
      password: ""
    },
    onSubmit: async (values) => {
      try {
        const user = await axios.post(`${process.env.REACT_APP_BACKENDURL}/user/login`, values)
        console.log("user.data", user.data)
        if (user.data.message === "Success Auth") {
          localStorage.setItem("myreact", user.data.token)
          // userId.setcounter(user.data.user_id)
          // navigate(`/home/${user.data.user_id}`)
          // const context = useContext(UserContext)
          // navigate({ pathname: `/home/${user.data.user_id}`, search: `?${createSearchParams(userId.transactionDate)}` });
        } else {
          alert(user.data.message)
        }
      } catch (error) {
        console.log("ERROR:", error)
        alert(error.response.data.message)
      }
      console.log("values", values)
    }
  })
  return (

    <div className="container">
      
        <div className="rounded-3 row p-5" style={{ marginTop: '79px', border:'solid' }}>
  
            <div className="text-center col-xl-6 col-lg-6 col-sm-12">
              <img src={LOGO}
                style={{ width: "200px" }} alt="logo" />
              <h4 className="mt-1 mb-1 pb-1">Admin Login</h4>
            </div>
            <div className="col-xl-6 col-lg-6 col-sm-12 ">
              <form onSubmit={loginForm.handleSubmit}>
                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example11">Username</label>
                  <input type="email"
                    name="username"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.username}
                    id="form2Example11" className="form-control"
                    placeholder="Phone number or email address" />
                </div>

                <div className="form-outline mb-4">
                  <label className="form-label" htmlFor="form2Example22">Password</label>
                  <input type="password"
                    name="password"
                    onChange={loginForm.handleChange}
                    value={loginForm.values.password}
                    id="form2Example22" className="form-control" />
                </div>

                <div className="text-center pt-1 pb-1">
                  <button className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3" type={"submit"}>Log
                    in</button>
                  <br />
                </div>

              </form>


            </div>
          
        </div>
    </div>

  )
}

export default AdminLogin