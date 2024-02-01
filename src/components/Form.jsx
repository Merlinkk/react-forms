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

        <h1>Registration Form</h1>
    {submit && valid ? <span id='success'>Registration successful!</span> : null}
    <br />
    <br />
        <input placeholder='First Name' onChange={(e)=>{
            setField({
                ...field,
                firstName:e.target.value
            })
        }} id='firstName' type="text" value={field.firstName} />
        {submit && !valid && !field.firstName ? <h3 style={{color:'red'}}>First Name is required</h3> : null}
        <br />
        <br />
        <input placeholder='Last Name' onChange={(e)=>{
            setField({
                ...field,
                lastName:e.target.value
            })
        }}  id='lastName' type="text" value={field.lastName} />
        {submit && !valid && !field.lastName ? <h3 style={{color:'red'}}>Last Name is required</h3> : null}
        <br />
        <br />
        <input placeholder='Email' onChange={(e)=>{
            setField({
                ...field,
                email:e.target.value
            })
        }}  id='email' type="email" value={field.email} />
        {submit && !valid && !field.email ? <h3 style={{color:'red'}}>Email is required</h3> : null}
        <br />
        <br />
        <input placeholder='Phone No:' onChange={(e)=>{
            setField({
                ...field,
                phone:e.target.value
            })
        }}  id='phone' type="number" value={field.phone} />
        {submit && !valid && !field.phone ? <h3 style={{color:'red'}}>Phone No: is required</h3> : null}
        <br />
        <br />
        <input id="submit" type="submit" defaultValue="Submit" />
    </form>

    </>
  )
}

export default Form