import React, { useContext, useEffect, useState } from "react";
import "./Footer_style.scss";
//import { ReactComponent as Logo } from "../../../data/crown.svg";
import { ReactComponent as Logo } from "../../../data/logo.svg";
import { Link } from "react-router-dom";


function Footer() {
    // const [fixedBottom, setFixedBottom] = useState(false)

    // useEffect(() => {
    //     let r = document.querySelector("#root")
    //     if (r.clientHeight < window.innerHeight) {
    //         setFixedBottom(true)
    //     }
    // })

    return (
        <div className="footer">
            <div className={"container"}>
                <div className={"footer-inner"}>
                    <div className={"logo-container"}>
                        <Link to={"/"}>
                            <Logo />
                        </Link>
                    </div>
                    <div className="d-flex">
                        <div className={"options"}>
                            <h3>Header 1</h3>
                            <Link to={"/contact"} className={"option"}>
                                Contact
                            </Link>
                            <Link to={"/contact"} className={"option"}>
                                Contact
                            </Link>
                            <Link to={"/contact"} className={"option"}>
                                Contact
                            </Link>
                        </div>
                        <div className={"options"}>
                            <h3>Header 2</h3>
                            <Link to={"/contact"} className={"option"}>
                                Contact
                            </Link>
                            <Link to={"/contact"} className={"option"}>
                                Contact
                            </Link>
                            <Link to={"/contact"} className={"option"}>
                                Contact
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer