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
    location:'Liverpool',
    age: 2,
    dateFrom: "23.01.2020",
    email:'frank@gmail.com',
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
    email:'skinguard@gmail.com',
    phone: "777-12-34",
    freeDays: 56,
    position: "senior-developer",
    level: 'senior',
    skills: ["React", "Angular", "Java"],
  },
  {
    id: "300",
    photo: ' ',
    firstName: "Mars",
    lastName: "Santiago",
    location:'NY',
    age: 23,
    dateFrom: "24.01.2020",
    email:'mars@gmail.com',
    phone: "577-52-34",
    freeDays: 56,
    position: "producr manager",
    level: 'junior',
    skills: ["React", "Angular", "Java"],
  },
  {
    id: "500",
    photo: ' ',
    firstName: "Pol",
    lastName: "Robson",
    location:'London',
    age: 33,
    dateFrom: "23.01.2015",
    email:'robson@gmail.com',
    phone: "112-12-33",
    freeDays: 20,
    position: "team leader",
    level: 'senior',
    skills: ["React", "Angular", "NodeJs"],
  },
];
