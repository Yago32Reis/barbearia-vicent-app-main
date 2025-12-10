export interface UserInput {
  name:string;
  email:string;
  password:string;
  phone:string;
  role: [string];
}

export interface User {
  id:string;
  name:string;
  email:string;
  phone:string;
  role: [string];
  createdAt: Date;
  updatedAt: Date;
}
