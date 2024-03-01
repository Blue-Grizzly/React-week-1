
import { useEffect, useState } from "react";
import { BaseProps } from "../types";
import { addUser } from "../data/data";
const SERVER_URL = "http://localhost:8000/users";
const DELAY = 500;


type User = { id: number; name: string };




function fetchUser(userId: number, options?: object): Promise<User> {
  return fetch(`${SERVER_URL}/${userId}?delay=${DELAY}`, options).then((res) => res.json());
}

let userCache: User | null = null

export default function FetchDemo1({ title }: BaseProps) {
  const [userId, setUserId] = useState(1);
  const [user, setUser] = useState<User | null>(userCache);
  const [loading, setLoading] = useState(true);


  //Use this to fetch the next user when the "Next User" button is clicked
  //Make sure you understand why we don't need useEffect here
  const fetchNextUser = async () => {
    const nextUser = user?.id + 1 <= 15 ? user.id + 1 : 1;
    //Do not set call setUserId here it will cause an extra render
    setLoading(true);
    const theUser = await fetchUser(nextUser);
    setLoading(false);
    setUser(theUser);
    userCache = theUser;
  };

  useEffect(()=> {
    //Utility function to fetch a user from the server
    const controller = new AbortController();
    if(userCache == null){
    fetchUser(userId, { signal: controller.signal }).then((response) => {
        setUser(response);
        userCache = response; 
    });
    }
    return ()=> {
        controller.abort();
    } 
    //
    },[])




  return (
    <>
      <h2>{title}</h2>
      <p>{loading? "loading..." : ""}</p>
      {user && JSON.stringify(user)}
      <br />
      <button onClick={fetchNextUser}>Next User</button>
    </>
  );
}
