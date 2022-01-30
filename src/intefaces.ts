export interface IUserData {
    id: number,
    firstName : string,
    lastName : string,
    email : string,
    password : string,
    isAdmin : boolean;
}
export interface IDataLogIn {
    email: string;
    password: string;
  }
  
export interface IEmployee{
    id: string;
    photo: string;
    firstName : string;
    lastName : string;
    location : string;
    age: number;
    dateFrom: string;
    email: string;
    phone : string;
    freeDays : number;
    position : string;
    level: 'junior'|'middle'|'senior';
    skills : string[];
}

export interface CustomRequest{
    body : IUserData;
}

export interface IResponseDataUser {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
  }