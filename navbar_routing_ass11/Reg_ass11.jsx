import React from "react";
import Menu from "./Menu";

const Reg = () =>{
    return(
        <> 
            <Menu />
            <h1>Registration Page</h1>
            <form>
                <input type="text" placeholder="Enter Your Name" /><br /><br />
                <input type="text" placeholder="Enter Your Email" /><br /><br />
                <input type="text" placeholder="Enter Your Phone" /><br /><br />
                <input type="text" placeholder="Enter Your Address" /><br /><br />
                <input type="text" placeholder="Enter Your Course" /><br /><br />
                <button>Submit</button>
            </form>
        </>
    )
}

export default Reg
