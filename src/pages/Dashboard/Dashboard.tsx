import React, { useEffect, useState } from 'react';
import LeftNav from './Components/LeftNav';
import './Dashboard.scss';
// import icon15 from "../../images/icon15.png";
import ApexCharts from 'apexcharts';

export default function Dashboard() {
    const [tab, setTab] = useState('1')

    useEffect(() => {
    
        var options = {
            series: [{
            name: 'Number of sent mails',
            data: [4, 3, 2, 4, 5, 8, 8, 9, 15, 33, 42, 30, 20, 10, 8, 10, 8, 10, 7, 8, 15, 45, 55, 8]
          }, {
            name: 'Number of interactions',
            data: [4, 3, 3, 6, 5, 7, 7, 12, 18, 30, 46, 35, 18, 9, 4, 8, 4, 9, 8, 10, 18, 30, 40, 8]
          }],
            chart: {
            height: 350,
            type: 'area'
          },
          dataLabels: {
            enabled: false
          },
          stroke: {
            curve: 'smooth'
          },
          xaxis: {
            type: 'datetime',
            categories: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
          },
          tooltip: {
            x: {
              format: 'dd/MM/yy HH:mm'
            },
          },
          };
  
          var chart = new ApexCharts(document.querySelector("#chart"), options);
          chart.render();
        }, []);

    return (
        <div className="dashboard">
            <LeftNav />
            
            <div className="dashboard__right">
                <div className="top">
                    <p className="text">Event-15</p>
                    <select name="event" id="event">
                        <option value="event-15">Event-15</option>
                        <option value="event-15">Event-14</option>
                        <option value="event-15">Event-13</option>
                    </select>
                </div>
                <div className="bottom">
                    <div className="bottom__left">
                        <div className="chart">
                            <div className="wrap">
                                <p className="title">Event Overview</p>
                                <div className="filter">
                                    <p className="text2 active">Day</p>
                                    <p className="text2">Week</p>
                                </div>
                            </div>
                            <div className="wrap-chart">
                                <div id="chart"></div>
                            </div>
                        </div>
                    </div>
                    <div className="bottom__right">
                        <p className="title">Top Exhibitors</p>
                        <div className="list">
                            <div className="item">
                                <div className="wrap">
                                    <span>RA</span>
                                    <p>Viatick</p>
                                </div>
                                <p className="text3">288 visitors</p>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                    <span>RA</span>
                                    <p>Viatick</p>
                                </div>
                                <p className="text3">288 visitors</p>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                    <span>RA</span>
                                    <p>Viatick</p>
                                </div>
                                <p className="text3">288 visitors</p>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                    <span>RA</span>
                                    <p>Viatick</p>
                                </div>
                                <p className="text3">288 visitors</p>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                    <span>RA</span>
                                    <p>Viatick</p>
                                </div>
                                <p className="text3">288 visitors</p>
                            </div>
                            <div className="item">
                                <div className="wrap">
                                    <span>RA</span>
                                    <p>Viatick</p>
                                </div>
                                <p className="text3">288 visitors</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

