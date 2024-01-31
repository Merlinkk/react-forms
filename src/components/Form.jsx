import React,{useEffect, useState} from 'react'

function Form() {

    const [field,setField] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone: '',
    })

    const [valid,setValid] = useState(false)
    const [submit,setSubmit] = useState(false)

    function handleSubmit(e){
        e.preventDefault()
        setSubmit(true)
        if(field.firstName && field.lastName && field.email && field.phone){
            setValid(true)
            console.log('Form Submitted')
            console.log(field)
        }
        else{
            console.log('Form failed')
        }
    }

    // useEffect(()=>{
    //     console.log(field)
    // },[field])

  return (
    <>
    <form action="" onSubmit={(e)=>{handleSubmit(e)}}>
    {submit && valid ? <h1 style={{color:'lime'}}>Registration successful!</h1> : null}

        <h1>Registration Form</h1>
        {submit && !valid && !field.firstName ? <h3 style={{color:'red'}}>First Name is required</h3> : null}
        <input placeholder='First Name' onChange={(e)=>{
            setField({
                ...field,
                firstName:e.target.value
            })
        }} id='firstName' type="text" value={field.firstName} />
        <br />
        <br />
        {submit && !valid && !field.lastName ? <h3 style={{color:'red'}}>Last Name is required</h3> : null}
        <input placeholder='Last Name' onChange={(e)=>{
            setField({
                ...field,
                lastName:e.target.value
            })
        }}  id='lastName' type="text" value={field.lastName} />
        <br />
        <br />
        {submit && !valid && !field.email ? <h3 style={{color:'red'}}>Email is required</h3> : null}
        <input placeholder='Email' onChange={(e)=>{
            setField({
                ...field,
                email:e.target.value
            })
        }}  id='email' type="email" value={field.email} />
        <br />
        <br />
        {submit && !valid && !field.phone ? <h3 style={{color:'red'}}>Phone No: is required</h3> : null}
        <input placeholder='Phone No:' onChange={(e)=>{
            setField({
                ...field,
                phone:e.target.value
            })
        }}  id='phone' type="number" value={field.phone} />
        <br />
        <br />
        <input id="submit" type="submit" defaultValue="Submit" />
    </form>

    </>
  )
}

export default Form