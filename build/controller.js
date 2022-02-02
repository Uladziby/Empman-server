"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var commonFunc_1 = require("./commonFunc");
var db_1 = require("./db");
var Controller = {
    getAll: function (req, res) {
        console.log(req);
        try {
            return res.json(db_1.DataUsers);
        }
        catch (e) {
            console.log(e);
            return res.status(500).json(e);
        }
    },
    create: function (req, res) {
        try {
            db_1.DataUsers.push(req.body);
            res.status(200).json("ok");
        }
        catch (e) {
            res.status(500).json(e);
        }
    },
    checkLogIn: function (req, res) {
        try {
            var user = (0, commonFunc_1.validateLoginData)(req.body);
            console.log(user);
            if (user) {
                res.status(200).json(user);
            }
            else {
                console.log('user not found');
                res.status(400);
            }
        }
        catch (e) {
            console.log(e);
        }
    },
    logout: function (req, res) {
        try {
            res.status(200).json(false);
        }
        catch (e) {
            console.log(e);
        }
    },
    getALlEmployees: function (req, res) {
        try {
            return res.json(db_1.DataEmployees);
        }
        catch (error) {
            return res.status(500).json(error);
        }
    },
    deleteEmp: function (req, res) {
        var id = req.params.id;
        try {
            var projectIndex = db_1.DataEmployees.filter(function (item) { return item.id !== id.slice(1); });
            db_1.DataEmployees.length = 0;
            db_1.DataEmployees.push.apply(db_1.DataEmployees, projectIndex);
            return res.status(200).json(id.slice(1));
        }
        catch (e) {
            return res.status(500).json(e);
        }
    },
    createEmp: function (req, res) {
        try {
            var newEmptyEmp = {
                id: (0, commonFunc_1.createID)(),
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
            db_1.DataEmployees.push(newEmptyEmp);
            return res.status(200).json(newEmptyEmp);
        }
        catch (e) {
            return res.status(500).json(e);
        }
    },
    getDetailEmp: function (req, res) {
        var id = req.params.id;
        try {
            var user = (0, commonFunc_1.findUser)(id);
            return res.json(user);
        }
        catch (error) {
            console.log(error, "employee not found");
            return res.status(500).json(error);
        }
    },
    updateDetailEmp: function (req, res) {
        console.log(req.body);
        var id = req.params.id;
        try {
            var idxEmp = (0, commonFunc_1.findIndex)(id.slice(1));
            Object.assign(db_1.DataEmployees[idxEmp], req.body);
            return res.json(db_1.DataEmployees[idxEmp]);
        }
        catch (error) {
            console.log(error, "employee not found");
            return res.status(500).json(error);
        }
    },
    createNewUser: function (req, res) {
        try {
            var user = req.body;
            var newUser = {
                id: db_1.DataUsers.length + 1,
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                password: user.password,
                isAdmin: false,
            };
            db_1.DataUsers.push(newUser);
            console.log(newUser);
            return res.status(200).json("user is created");
        }
        catch (error) {
            console.log(error, "employee not found");
            return res.status(500).json(error);
        }
    },
};
exports.default = Controller;
