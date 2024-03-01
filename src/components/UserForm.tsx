import { FormEvent, useRef } from "react";

type UserFormProps = {
  title:string,
  onSubmitUser:(newUser)=>void
}

export default function UserForm({ title, onSubmitUser }: UserFormProps) {
    const nameRef = useRef(null);
    const mailRef = useRef(null);
    const activeRef = useRef(null);

    const onSubmit = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      const newUser = {
        name: nameRef.current.value,
        email: mailRef.current.value,
        isActive: activeRef.current.checked
      }
      onSubmitUser(newUser);
    };
  
  
    return (
      <>
        <h2>{title}</h2>
        <form onSubmit={onSubmit}>
          First Name: <input name="name" ref={nameRef}/>
          Email: <input name="email" ref={mailRef}/>
          Active: <input type="checkbox" name="isActive" ref={activeRef}/>
          <button type="submit">Add User</button>
        </form>
      </>
    );
  }
  