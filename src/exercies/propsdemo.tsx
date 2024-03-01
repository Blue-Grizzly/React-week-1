import { BaseProps } from "../types";
import Profile from "../components/Profile";
import { useState } from "react";


export default function Propsdemo({ title }: BaseProps) {
  const [showHorizontal, setShowHorizontal] = useState(false);
  return (
    <>
      <h2>{title}</h2>
      Direction: <input type="checkbox" checked={showHorizontal} onChange={()=>setShowHorizontal(!showHorizontal)}/>
      <Profile name="Max Power" email="mp@email.com" isActive={true} singleLine={showHorizontal} />
      <Profile name="Jesus Christ" email="realJC@email.com" isActive={true} singleLine={showHorizontal} />
      <Profile name="Moses" email="TheMoses1@email.com" isActive={false} singleLine={showHorizontal} />
      <Profile name="Mary" email="MaryTheHoly224@email.com" isActive={false} singleLine={showHorizontal} />
      <Profile name="John" email="JohnnyB@email.com" isActive={false} singleLine={showHorizontal} />
    </>
  );
}
