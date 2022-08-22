import React, { useState } from 'react'

const Header = () => {
    const show =()=>{
     setHide(!hide)
     console.log(hide);
    }

    const uploadfile=()=>{
     let file = document.getElementById("file");
     file.click()
    }
    const controll =()=>{
        setHide(!hide)
    }
    const btn =()=>{
        setUpload(!upload)
        // document.body.style.overflow = "hidden"
    }
    const set =()=>{
        setUpload(!upload)
        // document.body.style.overflow = "auto"
        console.log("clicked");
        setImage('')
    }
    const path =(e)=>{
        setImage(URL.createObjectURL(e.target.files[0]))
        
    }
    const back =()=>{
        setUpload(!upload)
        setBtnb(!btnb) 
    }
    const next =()=>{
        setUpload(!upload)
        setBtnb(!btnb)
        setImage('')
    }
    const [btnb, setBtnb] = useState(false)
    const [image, setImage] = useState()
    const [upload, setUpload] = useState(false)
    const [hide, setHide] = useState(false)
    return (
        <>
        <header className="header">
            <div className="logo">
            <i className="fal fa-video"></i>
            <h1>Tutorials</h1>
            </div>
            { hide===true ?
               <div className="input">
               <i className="fal fa-arrow-circle-left" onClick={controll}></i>
                   <input id="file" type="text" placeholder="search your faviroute here" />
                   <i className="fal fa-search"></i>
               </div> : null
            }
            
            <div className="icons">
            <i className="fal fa-search" onClick={show}></i>
            <i className="fal fa-video-plus" onClick={btn}></i>
            <i className="fas fa-user-circle"></i>
            <i className="fal fa-bars"></i>
            </div>   
        </header>
        {
                upload===true ? 
                <div className="upload">
                <div className="file">
                    <input id="file" accept={".mp4"} type="file"  onChange={path} />
                    {
                        image ?
                       <video controls src={image}></video>
                       :
                     <>
                      <i className="fas fa-cloud-upload" onClick={uploadfile}></i>
                       <h3> click here to upload video</h3>
                       </>
                    }
                    

                   
                </div>
                <div className="buttons">
                    <button onClick={set}>cancel</button>
                    <button disabled={image ? false : true} onClick={next}>next</button>
                </div>
            </div>
                 :null 
            }
            {
                btnb===true ? 
                <div className="upload">
                <div className="file">
                    <input id="file" accept={".png"} type="file"  onChange={path} />
                    {
                        image ?
                       <img controls src={image} alt='img'></img>
                       :
                     <>
                      <i className="fas fa-cloud-upload" onClick={uploadfile}></i>
                       <h3> choose your thumbnail</h3>
                       </>
                    }
                </div>
                <div className="buttons">
                    <button onClick={back}>back</button>
                    <button disabled={image ? false : true} >next</button>
                </div>
            </div>
            : null

            }
            
        </>
    )
}

export default Header
