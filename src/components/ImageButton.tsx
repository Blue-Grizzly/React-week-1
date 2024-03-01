import { ImageButtonProp } from "../types";

export default function ImageButton({image, onClick}:ImageButtonProp){
    
    return(
        <button className="imageButton" onClick={onClick}>
            <img src={image} width={100}/>
        </button>
    )
}