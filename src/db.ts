import { IEmployee, IUserData } from "./intefaces";

export const DataUsers: IUserData[]= [
  {
    id: 1,
    firstName: "Administrator",
    lastName: "",
    email: "admin@admin",
    password: "admin",
    isAdmin : true,
  },
  {
    id: 2,
    firstName: "greg",
    lastName: "dog",
    email: "greg@admin",
    password: "admin",
    isAdmin : true,
  },
];

export const DataEmployees: IEmployee[] = [
  { 
    id: "1",
    photo: ' ',
    firstName: "Bob",
    lastName: "Black",
    location:'Cracow',
    age: 33,
    dateFrom: "23.01.2020",
    email:'bob@gmail.com',
    phone: "823-12-34",
    freeDays: 26,
    position: "senior-developer",
    level: 'senior',
    skills: ["React", "Angular", "Java"],
  },
  {
    id: "2",
    photo: ' ',
    firstName: "Frank",
    lastName: "North",
    location:'Warszaw',
    age: 2,
    dateFrom: "23.01.2020",
    email:'bob@gmail.com',
    phone: "823-12-34",
    freeDays: 26,
    position: "senior-developer",
    level: 'senior',
    skills: ["React", "Angular", "Java"],
  },
  {
    id: "3",
    photo: ' ',
    firstName: "Elisa",
    lastName: "Skinguard",
    location:'Warszaw',
    age: 33,
    dateFrom: "23.01.2020",
    email:'bob@gmail.com',
    phone: "777-12-34",
    freeDays: 56,
    position: "senior-developer",
    level: 'senior',
    skills: ["React", "Angular", "Java"],
  },
];
