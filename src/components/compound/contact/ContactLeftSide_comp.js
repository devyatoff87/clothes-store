import React, { useState, useEffect } from 'react'

function ContactLeftSide() {

    const [img, setImg] = useState("")

    useEffect(() => {
        const imgUrl = require("../../../data/images/google-card.png").default;
        setImg(imgUrl);
        console.log(img)
    }, [])

    return (
        <>
            <div>
                <h3>Adress</h3>
                <p>Martin Luter</p>
                <p>Becker street 42</p>
                <p>67356 Needletown</p>
            </div>
            <div className="mt-3">
                <h3>Phone & Fax</h3>
                <p>Phone: <a href="#">0124 5436 535</a></p>
                <p>Fax: <a href="#">0124 5436 535</a></p>
            </div>
            <img className="mt-4" src={img} alt="" />
        </>
    )
}

export default ContactLeftSide
