import React from 'react'
import Sidebar from './Sidebar'

const Gallery = () => {
  return (
    <div>
    <div>
    <Sidebar />
    <div className='col-lg-9' style={{float:"right",marginTop:"-48%",}}>
     <span className="" style={{fontSize:'2rem'}}>Gallery</span>
     <h1 className='mt-5' style={{paddingTop:"20%", paddingLeft:"30%"}}>Coming Soon</h1>
     <div className='row'></div>
    </div>
    <hr style={{marginTop:"-44%",width:'80%',marginLeft:"20%"}}/>
    </div>
    </div>
  )
}

export default Gallery