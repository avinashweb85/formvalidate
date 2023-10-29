import React, { useState } from 'react';
import { useForm } from "react-hook-form";
import './form.css';

function Form() {
    const{ register, handleSubmit, watch} = useForm();
    const [inputValue, setInputValue] = useState(0);

    watch(value => console.log(inputValue))

    const onSubmit = (data) => { 
    //    console.log(data);
    };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className='form'>
        <input {...register("firstName")}/>
        <input onChange={(event)=>setInputValue(event.target.value)}/>
        <button type='submit'>Submit</button>
    </form>
  )
}

export default Form;