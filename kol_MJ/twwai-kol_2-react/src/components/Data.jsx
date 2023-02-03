import React from 'react';
import {useEffect, useState} from "react";

const styles = {
    backgroundColor: '#000',
    color: '#fff',
    float: 'left',
    height: '100vh',
    width: '220px'
};

export function Data() {
    const [chartData, chartDataSet] = useState(null);

    useEffect(() => {
        const fetchAir = async () => {

            const res = await fetch("http://localhost:3001/api/params")
            const dataRes = await res.json();
            chartDataSet(dataRes);
            }
            fetchAir();
    }, []);

    if (!chartData) {
        return null;
    }

    let date = new Date,
        dateFormat = [
            date.getDate()
        ] +':'+
        [
            date.getMonth() + 1
        ] + ' '+
        [
            date.getHours(),
            date.getMinutes(),
            date.getSeconds()
        ].join(':');

   return (<div className="container-fluid" >
       <div className="row">
           <div className="col-2" style={styles}>
               <h1>Current state:</h1>
               <ul>
                   <li>Temp: {chartData.temp}</li>
                   <li>Humidity: {chartData.humidity}</li>
                   <li>Pressure: {chartData.pressure}</li>
                   <li>Date: {dateFormat}</li>
               </ul>
           </div>
       </div>
   </div>);
}