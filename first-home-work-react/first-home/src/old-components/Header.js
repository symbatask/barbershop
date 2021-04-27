import React from "react";
import img from "../images/logo.png"

const Header = () => {
    return (
        <div className="header">
        <div className="container header__container">
            <img src={img} alt="" className="logo"/>
            <div className="menu">
                <nav className="links">
                    <a href="#">Home</a>
                    <a href="#">Recipes</a>
                    <a href="#">Meat</a>
                    <a href="#">About</a>
                    <a href="#">Blog</a>
                    <a href="#">Support</a>
                </nav>
                <button className="sign-in btn">Sign in</button>
                <button className="request btn">Request demo</button>
        </div>
</div>
</div>

    )
}


export default Header