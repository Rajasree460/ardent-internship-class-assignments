import React from "react";


const cssStyle = {
    color:'red',
    backgroundColor:'green',
    textAlign:'center'
}


class Fircss extends React.Component{
    render(){
        return(
            <>
                <h1 style={cssStyle}>Hello Component</h1>
            </>
        )
    }
}


export default Fircss
