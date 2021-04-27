import React from "react";
const Recipe = (props) =>{
return (

<div className="recipe">
    <h3> {props.name}</h3>
    <ul>
        {props.ingredients.map(ing=>(
            <li>{ing.name}</li>
        ))

        }
    </ul>
    <ul>
        {props.steps.map(el=>(
            <li>{el}</li>
        ))

        }
    </ul>
</div>


)
}



export default Recipe