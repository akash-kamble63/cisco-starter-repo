import React, { useState } from 'react'
import Cards from "./Cards"
import {nanoid} from 'nanoid'
import { AiOutlineBarChart , AiFillBoxPlot, AiOutlineLineChart, AiFillPieChart, AiOutlineAreaChart } from "react-icons/ai";
import { BiScatterChart } from "react-icons/bi";
import { GiHistogram } from "react-icons/gi";

import './MainContainer.css'
import Banner from '../image/data.jpg'
import Bar from "../image/single-bar-chart.png"
import Scatter from "../image/scatter-plot-excel.webp"
import BoxPlot from "../image/boxplot.png"
import Histogram from "../image/histogram.png"
import LineChart from "../image/line_cart.png"
import pie from "../image/pie-chart-exploded.png"
import AreaC from "../image/area-chart-cash-burn-rate.png"


function MainContainer() {
    const [cardImg, setCardImg] = useState([
        {
            id: nanoid(),
            img: Bar,
            title: "Bar Graph",
            icon: <AiOutlineBarChart/>,
        },
        {
            id: nanoid(),
            img: Scatter,
            title: "Scatter Plot",
            icon: <BiScatterChart/>,
        },
        {
            id: nanoid(),
            img: BoxPlot,
            title: "Box Plot",
            icon: <AiFillBoxPlot/>,
        },
        {
            id: nanoid(),
            img: Histogram,
            title: "Histogram",
            icon: <GiHistogram/>,
        },
        {
            id: nanoid(),
            img: LineChart,
            title: "Line Chart",
            icon: <AiOutlineLineChart/>,
        },
        {
            id: nanoid(),
            img: pie,
            title: "Pie Chart",
            icon: <AiFillPieChart/>,
        },
        {
            id: nanoid(),
            img: AreaC,
            title: "Area Chart",
            icon: <AiOutlineAreaChart/>,
        },

    ])
  return (
    <div className='mainContainer'>
        <div className='banner' style={{ 
            background:`url(${Banner})` ,
            backgroundRepeat:"no-repeat",
            backgroundPosition:"center",
            backgroundSize: "cover"
            }}>
            <div className='textContainer'>
                <h1>Data</h1>
                <h1>Visualization</h1>
            </div>
        </div>
        <div className='cards'>
            <main>
                {
                   cardImg.map((Cimg)=><Cards key={Cimg.id} imageSrc={Cimg.img} title={Cimg.title} CIcon = {Cimg.icon}/>) 
                }
                
            </main>
        </div>
    </div>
    // <div className='card-list'>
    //     <Cards/>
    // </div>
  )
}

export default MainContainer