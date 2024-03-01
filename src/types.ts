export type BaseProps = {
    title:string;
  };

export type ProfileProps = {
    name:string,
    email:string,
    isActive:boolean,
    singleLine?:boolean
}

export type ImageButtonProp = {
  image:string,
  onClick: ()=> void
}