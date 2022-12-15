import React from 'react'

const Input=({placeholder})=>{
    return(
      <>
        <input type='text' className='w-90 h-8 rounded-sm  mt-4 px-40 shadow-lg shadow-indigo-700/50 py-5' placeholder={placeholder}></input>
    
      </>
        
    )
}


const InputFeild = () => {
  return (
    < >
    <div className=' justify-center '>
    <div> <Input placeholder='enter your name here'/></div>
    <div><Input placeholder='enter your number '/></div>
    <div> <Input placeholder='enter your email' type='email'/></div>
   
    
   

    </div>
   
  
    </>
  )
}

export default InputFeild;