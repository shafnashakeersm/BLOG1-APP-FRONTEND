import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

    const navigate=useNavigate()

    const [input,setInput]=useState(
        { "email":"","password":""}
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)

        axios.post("http://localhost:3030/signin",input).then(
            (response)=>{
                console.log(response.data)
               if (response.data.status=="Incorrect password") {
                alert("Incorrect password")
               }
               else if(response.data.status=="Invalid Email Id"){
                  alert("Invalid Email Id")
               } else {
                let token=response.data.token
                let userId=response.data.token.userId
                console.log(userId)
                console.log(token)

                sessionStorage.setItem("userId",userId)
                sessionStorage.setItem("token",token)

                navigate("/create")
               }
                      }
        ).catch(
            (error)=>{
                console.log(error)
            }
        )    }
  return (
    <div>
        <container className="row ">
            <div className="col col-12 col-sm-12 col-ml-12 col-lg-12 col-xl-12 col-xxl-12">
             <div className="row g-3">
                <div className="col col-12 col-sm-12 col-ml-12 col-lg-12 col-xl-12 col-xxl-12">
                    <label htmlFor="" className="form-label">Email-Id</label>
                    <input type="text" className="form-control"  name='email' value={input.email} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-ml-12 col-lg-12 col-xl-12 col-xxl-12">
                <label htmlFor="" className="form-label">Password</label>
                <input type="password" className="form-control" name='password' value={input.password} onChange={inputHandler}/>
                </div>
                <div className="col col-12 col-sm-12 col-ml-12 col-lg-12 col-xl-12 col-xxl-12">
                    <button className="btn btn-success" onClick={readValues}>SignIn</button>
                </div>
                <div className="col col-12 col-sm-12 col-ml-12 col-lg-12 col-xl-12 col-xxl-12">
                    <a href="/SignUp" className="btn btn-secondary">New User Click Here</a>
                </div>
             </div>
            </div>
        </container>
    </div>
  )
}

export default SignIn