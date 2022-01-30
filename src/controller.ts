import { CustomRequest, IEmployee, IUserData } from "./intefaces";
import { createID, findIndex, findUser, validateLoginData } from "./commonFunc";
import { DataEmployees, DataUsers } from "./db";

const Controller = {
  getAll(req: any, res: any): IUserData[] {
    console.log(req);
    try {
      return res.json(DataUsers);
    } catch (e) {
      console.log(e);
      return res.status(500).json(e);
    }
  },
  create(req: any, res: any): void {
    try {
      DataUsers.push(req.body);
      res.status(200).json("ok");
    } catch (e) {
      res.status(500).json(e);
    }
  },
  checkLogIn(req: any, res: any): void {
    try {
      const user = validateLoginData(req.body);
      console.log(user);
      if (user) {
        res.status(200).json(user);
      } else{
        console.log('user not found');
        res.status(400)
      } 
    } catch (e) {
      console.log(e);
    }
  },

  logout(req: any, res: any) {
    try {
      res.status(200).json(false);
    } catch (e) {
      console.log(e);
    }
  },
  getALlEmployees(req: any, res: any): IEmployee[] {
    try {
      return res.json(DataEmployees);
    } catch (error) {
      return res.status(500).json(error);
    }
  },
  deleteEmp(req: any, res: any): string {
    const { id } = req.params;
    try {
      const projectIndex = DataEmployees.filter((item) => item.id !== id.slice(1));
      DataEmployees.length = 0;
      DataEmployees.push(...projectIndex);
      return res.status(200).json(id.slice(1));
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  createEmp(req: any, res: any): IEmployee {
    try {
      const newEmptyEmp: IEmployee = {
        id: createID(),
        firstName: "New",
        lastName: "Employee",
        age: 0,
        dateFrom: "",
        position: "junior",
        freeDays: 0,
        phone: "",
        email: "",
        skills: [],
        photo: "",
        location: "",
        level: "junior",
      };
      DataEmployees.push(newEmptyEmp);
      return res.status(200).json(newEmptyEmp);
    } catch (e) {
      return res.status(500).json(e);
    }
  },
  getDetailEmp(req: any, res: any): IEmployee {
    const { id } = req.params;
    try {
      const user = findUser(id);
      return res.json(user);
    } catch (error) {
      console.log(error, "employee not found");
      return res.status(500).json(error);
    }
  },
  updateDetailEmp(req: any, res: any): IEmployee {
    console.log(req.body);
    const { id } = req.params;
    try {
      const idxEmp = findIndex(id.slice(1));
      Object.assign(DataEmployees[idxEmp], req.body)
      return res.json(DataEmployees[idxEmp]);
    } catch (error) {
      console.log(error, "employee not found");
      return res.status(500).json(error);
    }
  },
  createNewUser(req: CustomRequest, res: any): IUserData {
    try {
      const user = req.body;
      const newUser: IUserData = {
        id: DataUsers.length + 1,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        password: user.password,
        isAdmin: false,
      };
      DataUsers.push(newUser);
      console.log(newUser);
      return res.status(200).json("user is created");
    } catch (error) {
      console.log(error, "employee not found");
      return res.status(500).json(error);
    }
  },
};

export default Controller;
