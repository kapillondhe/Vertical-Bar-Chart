import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip,Legend, ResponsiveContainer } from 'recharts';
import './index.css'

const VerticalBarChart = ({ months, monthValuedata }) => {
  let chartData = [];
  let noOfMonths = months.length;

  for(let i=0;i<noOfMonths;i++){
    chartData.push(
      {
        month: months[i],
        value: monthValuedata[i]
      }
    )
  }

  return (
    <div className='flex justify-center items-center h-90vh'>
      <div className='flex flex-grow justify-center items-center border border-black p-4 m-4'>
        <ResponsiveContainer  width="100%" height={300}>
            <BarChart width={600} height={300} data={chartData}>
              <Bar dataKey="value" fill="#8884d8" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
            </BarChart>
          </ResponsiveContainer>
      </div>
    </div>
  );
};

export default VerticalBarChart;
