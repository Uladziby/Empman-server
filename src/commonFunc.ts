/* eslint-disable no-restricted-syntax */
import { uid } from "uid";
import { DataEmployees, DataUsers } from "./db";
import { IDataLogIn, IEmployee, IResponseDataUser } from "./intefaces";

// eslint-disable-next-line import/prefer-default-export
export function validateLoginData(data: IDataLogIn): boolean|  IResponseDataUser{
  const validateEMail = DataUsers.find((item) => item.email === data.email);
  if (validateEMail) {
    const validatePassword = DataUsers.find((item) => item.password === data.password);
    if (validatePassword) {
      return validatePassword;
    }
  }
  return false;
}

export function createID(): string {
  const lengthId = 3;
  return uid(lengthId);
}


export function findUser(id: string): IEmployee {
  const user =  DataEmployees.filter((item) => item.id === id.slice(1));
  return  user[0];

}

export function findIndex(id: string): number {
  const indexEmp =  DataEmployees.findIndex((item) => item.id === id);
  return  indexEmp;

}

export function updateObject(idx:number, source : IEmployee): IEmployee{
  const targetObj =DataEmployees[idx];
  Object.values(source)
  Object.assign(targetObj, source)

  return DataEmployees[idx];
}