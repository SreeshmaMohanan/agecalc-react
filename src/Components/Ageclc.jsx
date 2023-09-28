import React, { useState } from 'react'
import './Ageclc.css'
function Ageclc() {
    const [birthdate,setBirthDate]=useState('')
    const [age,setAge]=useState(0)
    const calculateAge= ()=>{
        const today = new Date();  
        const birthdateDate = new  Date (birthdate);
        let age = today.getFullYear() - birthdateDate.getFullYear()
        const monthDiff = today.getMonth() - birthdateDate.getMonth()
        
        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdateDate.getDate())) {

            age --;
            alert("Not born yet.")
            
        }else{
            
            if(age < 1){
                alert("Less than 1 year old")
            }
        }
        setAge(age);
 
       
        
    }
    const resetCalc = () => {
        setBirthDate();
        setAge(0)
      };

  return (
    <div className='contain justify-content-center align-items-center d-flex flex-column flex-wrap' style={{height:'650px'}} >
        <h1 className='heading text-center m-5'>AGE CALCULATER</h1>
        <p className='para text-center m-5'>The Age Calculator can determine the age or interval between two dates. The calculated age will be displayed in years, </p>
        <div style={{height:'300px'}} className="d-flex justify-content-center align-items-center rounded flex-wrap">
            <div style={{width:'400px',height:'300px'}}>
                <form onSubmit={calculateAge} style={{width:'400px'}} className="justify-content-center align-items-center">
                    <h3>Date of Birth</h3>
                    <input className='form-control' type="date" name="" id="" value={birthdate} onChange={e=>setBirthDate(e.target.value)}/>
                    <button className='btn btn-dark m-5' type='submit'>Calculate</button>
                    <button className='btn btn-dark m-5' onClick={resetCalc}>Reset</button>
                </form>
            </div>
            <div className='m-5 justify-content-center align-items-center bg-info rounded ' style={{width:'400px',height:'300px'}} >
                <h1 className='text-center mt-3'>Your age is</h1>
                <h2 className='text-center mt-5'>{age > 0 ? ` ${age}` : '--'}</h2>
            </div>
        </div>
    </div>
  )
}

export default Ageclc