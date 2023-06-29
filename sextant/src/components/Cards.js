import React from 'react'
import './Cards.css'

function Cards({imageSrc, title, CIcon}) {
  return (
    <div className='h'>
        <div className = "card_main">
        <img src={imageSrc} alt=""/>

        <div className = "card_name" >
            <h2>{title}</h2>
            <div className='card_icon'>
                <i>{CIcon}</i>
            </div>
        </div>
    </div>

    </div>
    

//     <div className='card-image'>
//     {/* <img src={Bar} /> */}
// </div>
    // <div className='crad'>
    //     <div className='banner' style={{ 
    //         background:`url(${imageSrc})` ,
    //         backgroundRepeat:"no-repeat",
    //         backgroundPosition:"center",
    //         backgroundSize: "cover"
    //         }}></div>

    //     <div className='card-body'>
    //     <h2 style={{margin:"50px"}}>Bar chart</h2>
    //          <div className='card_icon'>
    //              <i><AiOutlineBarChart/></i>
    //          </div>
    //     </div>
    // </div>
  )
}

export default Cards