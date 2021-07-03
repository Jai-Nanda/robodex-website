import React from 'react'
import './Gallery.css'
// import './lightbox.min.css'
import pic1 from './imgs/pic1.webp'
import pic2 from './imgs/pic2.JPG'
import pic3 from './imgs/pic3.JPG'
const Gallery = () => {
    // const modal = document.querySelector('.modal');
    // const preview = document.querySelectorAll('.gallery')
    // const original = document.querySelector('.full-img');
    // const imgText = document.querySelector('.caption')
    // preview.forEach((preview) => {
    //     preview.addEventListener("click", () => {
    //         modal.classList.add("open")
    //     })
    // })
    // modal.addEventListener("click", (e) => {
    //     if (e.target.classList.contains("modal")) {
    //         modal.classList.remove("open")
    //     }
    // })
    return (
        <>
            {/* <script src="./dist/js/lightbox-plus-jquery.min"></script> */}
            <div className="gallery">
                <a href={pic1}><img src={pic1} alt="lmao" className="pic1"/></a>
                <a href="https://static.wixstatic.com/media/7d48fd_2b3072c950514ee5988c9b9ec19ed358~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_2b3072c950514ee5988c9b9ec19ed358~mv2.webp"><img src="https://static.wixstatic.com/media/7d48fd_2b3072c950514ee5988c9b9ec19ed358~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_2b3072c950514ee5988c9b9ec19ed358~mv2.webp" alt="lmao" className="pic1"/></a>
                <a href="https://static.wixstatic.com/media/7d48fd_eb95288402e04758b6f7d30656606619~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_eb95288402e04758b6f7d30656606619~mv2.webp"><img src="https://static.wixstatic.com/media/7d48fd_eb95288402e04758b6f7d30656606619~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_eb95288402e04758b6f7d30656606619~mv2.webp" alt="lmao" className="pic1"/></a>
                <a href="https://static.wixstatic.com/media/7d48fd_2e0854e2bc2a47a1aee0db613c4f3186~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_2e0854e2bc2a47a1aee0db613c4f3186~mv2.webp"><img src="https://static.wixstatic.com/media/7d48fd_2e0854e2bc2a47a1aee0db613c4f3186~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_2e0854e2bc2a47a1aee0db613c4f3186~mv2.webp" alt="lmao" className="pic1"/></a>
                <a href="https://static.wixstatic.com/media/7d48fd_610b5591b64f4e28b7cf0f6c34fc4255~mv2.png/v1/fit/w_497,h_331,q_90/7d48fd_610b5591b64f4e28b7cf0f6c34fc4255~mv2.webp"><img src="https://static.wixstatic.com/media/7d48fd_610b5591b64f4e28b7cf0f6c34fc4255~mv2.png/v1/fit/w_497,h_331,q_90/7d48fd_610b5591b64f4e28b7cf0f6c34fc4255~mv2.webp" alt="lmao" className="pic1"/></a>
                <a href="https://static.wixstatic.com/media/7d48fd_e17138b156224d68bd98b870f738c91a~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_e17138b156224d68bd98b870f738c91a~mv2.webp"><img src="https://static.wixstatic.com/media/7d48fd_e17138b156224d68bd98b870f738c91a~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_e17138b156224d68bd98b870f738c91a~mv2.webp" alt="lmao" className="pic1"/></a>
                <a href="https://static.wixstatic.com/media/7d48fd_ca92dfd6a4424cb8b9b96ba77068f643~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_ca92dfd6a4424cb8b9b96ba77068f643~mv2.webp"><img src="https://static.wixstatic.com/media/7d48fd_ca92dfd6a4424cb8b9b96ba77068f643~mv2.png/v1/fit/w_320,h_213,q_90/7d48fd_ca92dfd6a4424cb8b9b96ba77068f643~mv2.webp" alt="lmao" className="pic1"/></a>
                <a href="https://static.wixstatic.com/media/7d48fd_27bc3ef068f94f6c9018a36f4e9c472b~mv2.png/v1/fit/w_491,h_282,q_90/7d48fd_27bc3ef068f94f6c9018a36f4e9c472b~mv2.webp"><img src="https://static.wixstatic.com/media/7d48fd_27bc3ef068f94f6c9018a36f4e9c472b~mv2.png/v1/fit/w_491,h_282,q_90/7d48fd_27bc3ef068f94f6c9018a36f4e9c472b~mv2.webp" alt="lmao" className="pic1"/></a>
                <a href="https://static.wixstatic.com/media/7d48fd_efc507047e6e4adfa83d900d43de2d68~mv2.jpg/v1/fit/w_1164,h_626,q_90/7d48fd_efc507047e6e4adfa83d900d43de2d68~mv2.webp"><img src="https://static.wixstatic.com/media/7d48fd_efc507047e6e4adfa83d900d43de2d68~mv2.jpg/v1/fit/w_1164,h_626,q_90/7d48fd_efc507047e6e4adfa83d900d43de2d68~mv2.webp" alt="lmao" className="pic1"/></a>
                <a href={pic3}><img src={pic3} alt="lmao" className="pic1"/></a>
                <a href="https://static.wixstatic.com/media/7d48fd_14f0921148bf4793b4b80b7bc6cfba56~mv2.jpg/v1/fit/w_716,h_417,q_90/7d48fd_14f0921148bf4793b4b80b7bc6cfba56~mv2.webp"><img src="https://static.wixstatic.com/media/7d48fd_14f0921148bf4793b4b80b7bc6cfba56~mv2.jpg/v1/fit/w_716,h_417,q_90/7d48fd_14f0921148bf4793b4b80b7bc6cfba56~mv2.webp"alt="lmao" className="pic1"/></a>
                <a href={pic2}><img src={pic2} alt="lmao" className="pic1"/></a>
            </div>
            
            {/* <div className="gallery">
                <img src={pic1} alt="lmao" className="pic1"/>
                <img src={pic1} alt="lmao" className="pic1"/>
                <img src={pic1} alt="lmao" className="pic1"/>
                <img src={pic1} alt="lmao" className="pic1"/>
                <img src={pic1} alt="lmao" className="pic1"/>
                <img src={pic1} alt="lmao" className="pic1"/>
            </div>
            <div className="modal">
                <img src={pic1} alt="" className="full-img" />
                <p className="caption">Jai Nanda</p>
            </div> */}
        </>
    )
}

export default Gallery
