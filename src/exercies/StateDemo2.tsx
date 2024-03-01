import { useState, ChangeEvent } from "react";
import { BaseProps } from "../types";
import { User } from "../data/data";

export default function StateDemo2({ title }: BaseProps) {
  const [user, setUser] = useState<User>({
    id: 1,
    name: "Max Power",
    email: "max.power@email.com",
    isActive: true,
  });

  function handleNameChange(e: ChangeEvent<HTMLInputElement>) {
    setUser((prevUser) => ({ ...prevUser, name: e.target.value }));
  }

  function handleMailChange(e: ChangeEvent<HTMLInputElement>) {
    setUser((prevUser) => ({ ...prevUser, email: e.target.value }));
  }

  function handleActiveChange(e: ChangeEvent<HTMLInputElement>) {
    setUser((prevUser) => ({ ...prevUser, isActive: e.target.checked }));
  }

  return (
    <>
      <h2>{title}</h2>
      <div>
        <p>ID: {user.id}</p>{" "}
      </div>
      First Name: <input name="name" value={user.name} onChange={(e) => handleNameChange(e)} />
      Email: <input name="email" value={user.email} onChange={(e) => handleMailChange(e)} />
      Active: <input type="checkbox" checked={user.isActive} name="isActive" onChange={(e) => handleActiveChange(e)} />
      <p style={{ marginTop: 15 }}> {JSON.stringify(user)} </p>
    </>
  );
}