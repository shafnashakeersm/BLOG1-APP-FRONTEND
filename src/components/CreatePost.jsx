import axios from 'axios'
import React, { useState } from 'react'

const CreatePost = () => {
    const [token,setToken]=useState(sessionStorage.getItem("token"))
    const [input,setInput]=useState(
               
            { "Message":"","userId":sessionStorage.getItem("userId")}
           
    )
    const inputHandler=(event)=>{
        setInput({...input,[event.target.name]:event.target.value})
    }
    const readValues=()=>{
        console.log(input)
        console.log(token)
        axios.post("http://localhost:3030/create",input,{ 
            headers:{"token":token,"content-Type":"application/json"}
    }).then(
        (response)=>{
            console.log(response.data)
            if (response.data.status=="success") {
                alert("Posted Successfully")
            } else {
                alert("Something went wrong!!!")
            }
        }
    ).catch(
        (error)=>{
            console.log(error)
        }
    )
    }
  return (
    <div>
        <div className="container">
            <div className="row">
                <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="row g-3">
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                            <label htmlFor="" className="form-label">Post a Message</label>
                            <textarea name="Message" value={input.Message} className="form-control" onChange={inputHandler}></textarea>
                        </div>
                        <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl">
                            <button className="btn btn-success" onClick={readValues}>Post</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CreatePost