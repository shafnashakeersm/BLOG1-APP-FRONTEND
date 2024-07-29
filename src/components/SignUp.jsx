import axios from 'axios'
import React, { useState } from 'react'

const SignUp = () => {
    const [input,setInput]=new useState(
        {
            "name":"","phone":"","email":"","password":"","cnfPass":""}
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }

    const readValue=()=>{
        if (input.password==input.cnfPass) {
           
           let newInput={ "name":input.name,"phone":input.phone,"email":input.email,"password":input.password}
           
           axios.post("http://localhost:3030/signup",newInput).then(
            (response)=>{
                console.log(response.data)
                if (response.data.status=="success") {
                    alert("Registered successfully")
                    setInput({"name":"","phone":"","email":"","password":"","cnfPass":""})
                } else {
                    alert("Email Id already Exist")
                    setInput({"name":"","phone":"","email":"","password":"","cnfPass":""})
                }
            }
           ).catch()
        } else {
            alert("password and confirm password doesn't Match")
        }
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                <div class="p-3 mb-2 bg-primary-subtle text-primary-emphasis">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <label htmlFor="" className="form-label">NAME</label>
                            <input type="text" className="form-control" name='name' value={input.name} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label"> PHONE NO</label>
                        <input type="text" className="form-control" name='phone' value={input.phone} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">EMAIL-ID</label>
                        <input type="text" className="form-control" name='email' value={input.email} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label"> PASSWORD</label>
                        <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <label htmlFor="" className="form-label">CONFORM PASSWORD</label>
                        <input type="password" className="form-control"  name='cnfPass' value={input.cnfpass} onChange={inputHandler} />
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <butoon   className="btn btn-success" onClick={readValue}>Register</butoon>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                            <a href="" className="btn btn-primary">Back to LogIn</a>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SignUp