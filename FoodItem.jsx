import React, { useState } from "react";
import Food from "./Food";


const FoodItem = () =>{


    const [data] = useState(Food)


    return(
        <>
            {
                data.map((elem) =>{
                    const {id,name,status} = elem
                    return(
                        <h1>{`Id Is ${id} Name Is ${name} Status Is ${status}`}</h1>
                    )
                })
            }
        </>
    )
}


export default FoodItem
