import React from 'react'
import blogpost from "./blogpost.mp4"
const Video = () => {
    return (
        <>
           <div className="video_container">
              <video className="video" autoPlay poster="https://i.ytimg.com/vi/CRDn1Iklf7o/hq720.jpg?sqp=-…AFwAcABBg==&rs=AOn4CLDyDVnqpjqi__gDMgVyr2Zf33CQrg" >
                  <source src={blogpost}/>
                  </video> 

                  <div className="info">
                      <img src="https://i.pravatar.cc/300" alt="" />
                      <div className="channel">
                          <h3>responsive website built by me</h3>
                          <p>Mahesh patil</p>
                          <p>2M viwes 2days ago</p>
                      </div>
                      <i className="fal fa-ellipsis-v">
                          {/* <ul>
                              <li>download</li>
                          </ul> */}
                      </i>
                  </div>
               </div> 
 
        </>
    )
}

export default Video
