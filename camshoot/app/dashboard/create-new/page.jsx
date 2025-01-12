"use client"
import React, { useState } from 'react'
import SelectTopic from './_components/SelectTopic'
import SelectStyle from './_components/SelectStyle';

function CreateNew() {
    const [formData,setFormData]=useState([]);
    const onhandleInputChange=(fieldName, fieldValue)=>{
        console.log(fieldName,fieldValue)
    }
  return (
    <div className='md:px-20'>
        <h2 className='font-bold text-4xl text-primary text-center'>Create New</h2>
        <div className='mt-10 shadow-md p-10'>
            <SelectTopic onUserSelect={onhandleInputChange}/>
            <SelectStyle/>
        </div>
    </div>
  )
}

export default CreateNew