"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateObject = exports.findIndex = exports.findUser = exports.createID = exports.validateLoginData = void 0;
/* eslint-disable no-restricted-syntax */
var uid_1 = require("uid");
var db_1 = require("./db");
// eslint-disable-next-line import/prefer-default-export
function validateLoginData(data) {
    var validateEMail = db_1.DataUsers.find(function (item) { return item.email === data.email; });
    if (validateEMail) {
        var validatePassword = db_1.DataUsers.find(function (item) { return item.password === data.password; });
        if (validatePassword) {
            return validatePassword;
        }
    }
    return false;
}
exports.validateLoginData = validateLoginData;
function createID() {
    var lengthId = 3;
    return (0, uid_1.uid)(lengthId);
}
exports.createID = createID;
function findUser(id) {
    var user = db_1.DataEmployees.filter(function (item) { return item.id === id.slice(1); });
    return user[0];
}
exports.findUser = findUser;
function findIndex(id) {
    var indexEmp = db_1.DataEmployees.findIndex(function (item) { return item.id === id; });
    return indexEmp;
}
exports.findIndex = findIndex;
function updateObject(idx, source) {
    var targetObj = db_1.DataEmployees[idx];
    Object.values(source);
    Object.assign(targetObj, source);
    return db_1.DataEmployees[idx];
}
exports.updateObject = updateObject;
