import * as React from "react";


export const Button = ({label = "lets go"}) =>{

    return(
        <div>
            <button>{label}</button>
        </div>
    )

}
export default Button;