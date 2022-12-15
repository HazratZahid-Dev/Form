import React from 'react'
import Button from './Compunents/Button';
import InputFeild from './Compunents/InputFeild';
import TextAria from './TextAria';

const Form = () => {
  return (
    <div>
    <form className=' p-20 bg-gradient-to-r from-purple-500 to-pink-500 '>
    <h1 className='font-bold text-5xl mb-6'>Submit your Form</h1>
   
     <InputFeild/>
     <TextAria/>
     <Button/>
    </form>
        
    </div>
  )
}

export default Form