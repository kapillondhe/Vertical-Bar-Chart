import React from "react";
import VerticalBarChart from './VerticalBarChart';
import { useState, useRef } from 'react';
import './index.css'

const App = () =>{

    const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    const monthValuedata = [10, 0, 50, 25, 15, 30, 45, 50, 45, 55, 65, 95];
  
    const monthInput =useRef(null);
    const valueInput = useRef(null);
  
    const [monthArray, setMonthArray] = useState(months);
    const [valueArray, setValueArray] = useState(monthValuedata);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      let mArray = monthInput.current.value.split(',');
      let vArray = valueInput.current.value.split(',').map(item => item.trim() === '' ? 0 : parseInt(item.trim(), 10));
      setMonthArray(mArray);
      setValueArray(vArray);
    };

    return (
        <div className="flex flex-col justify-center">
      <div className="flex flex-col justify-center items-center mt-4">
        <div className="grid grid-cols-3 gap-4">
          <div className="">
            <label htmlFor="input" className="mb-2">
              Month Value
            </label>
          </div>
          <div className="col-span-2">
            <input type="text" ref={monthInput}  placeholder="Comma-separated Months" className="w-full rounded-md border border-black shadow-sm focus:outline-none focus:border-blue-500" />
          </div>
          <div className="">
            <label htmlFor="input" className="mb-2">
              Value
            </label>
          </div>
          <div className="col-span-2">
            <input type="text" ref={valueInput} placeholder="Comma-separated Values"className="w-full rounded-md border border-black shadow-sm focus:outline-none focus:border-blue-500" />
          </div>
        </div>
      </div>

      <br />

      <div className="flex justify-center items-center">
        <button className="w-max bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleSubmit}>
          Submit
        </button>
      </div>
      <div className="mt-8">
        <VerticalBarChart months={monthArray} monthValuedata={valueArray} />
      </div>
    </div>
    )
}

export default App
