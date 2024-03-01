import { ProfileProps } from "../types"

export default function Profile ({name,email,isActive,singleLine}:ProfileProps){

    if(singleLine){
        return <p>{name}, {email}, {isActive ? "Active" : "Inactive"}</p>
    }else{
    return( 
        <>
            <h2>Profile</h2>
            <p>Name: {name}</p>
            <p>Email: {email}</p>
            <p>Active: {isActive ? "Active" : "Inactive"}</p>
        </>
    )}
}