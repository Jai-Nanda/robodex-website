import React from 'react'
import './Gallery.css'
// import './lightbox.min.css'
import pic1 from './imgs/pic1.webp'
import pic2 from './imgs/pic1.webp'
import pic3 from './imgs/pic1.webp'
import pic4 from './imgs/pic1.webp'
import pic5 from './imgs/pic1.webp'
import pic6 from './imgs/pic1.webp'
import pic7 from './imgs/pic1.webp'
import pic8 from './imgs/pic1.webp'
import pic9 from './imgs/pic1.webp'
import pic10 from './imgs/pic1.webp'
const Gallery = () => {
    return (
        <>
            {/* <script src="./dist/js/lightbox-plus-jquery.min"></script> */}
            <div className="gallery">
                <a href={pic1}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic1}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic1} alt="lmao" className="pic1"/></a>
            </div>
        </>
    )
}

export default Gallery
