import React from 'react'
const Homeclick=()=>{
    alert('Home is clicked')
}

const Aboutclick=()=>{
    alert('About is clicked')
}

const Bookclick=()=>{
    alert('Book is clicked')
}

const Btn=({name,onClick})=>{
    return(
        <button onClick={onClick} className=' w-20 h-10 text-black border-2 border-green-600 rounded-xl'>{name}</button>
    )
}


const Button = () => {
  return (
    <>
   <div className='gap-5 flex justify-center mt-6'> 
  {/* <div> <Btn name='home' onClick={Homeclick}/></div> */}
  {/* <div> <Btn name='About' onClick={Aboutclick}/></div> */}
 
   {/* <div>  <Btn name='Book' onClick={Bookclick}/></div> */}
   {/* <div>  <Btn name='Login' onClick={()=>alert('the lognin is click by user')}/></div> */}
   <div>  <Btn name='Submit' onClick={Bookclick}/></div>

  </div>
   
    </>
  )
}

export default Button