import react, {useState} from 'react';
import './Try.css'

export default function Try(){

    let [value, setValue] = useState(0);

    let increament = () =>{
        setValue(value+1);
    }

   let decreament = () =>{
        setValue(value-1);
    }

    let reset = () =>{
        setValue(0);
    }
    
    return (
        <>
          <input className='value' value={value} type='text'></input>
          <div className='change-value'>
            <button className='increament' onClick={increament}>Increament</button>
            <button className='reset' onClick={reset}>Reset</button>
            <button className='decreament' onClick={decreament}>Decreament</button>
          </div>
        </>
    );
}