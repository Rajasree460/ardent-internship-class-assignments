import React from "react";
import Menu from "./Menu";

const Gallery = () =>{
    return(
        <>
            <Menu />
            <h1>Gallery Page</h1>
            <img src="/img/me.jpg" alt="gallery" />
            <img src="/img/s1.png" alt="gallery" />
            <img src="/img/s2.png" alt="gallery" />
            <img src="/img/s3.png" alt="gallery" />
        </>
    )
}

export default Gallery
