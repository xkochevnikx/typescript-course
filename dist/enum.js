"use strict";
var ShareKind;
(function (ShareKind) {
    ShareKind[ShareKind["Circle"] = 0] = "Circle";
    ShareKind[ShareKind["Square"] = 1] = "Square";
})(ShareKind || (ShareKind = {}));
const myShape = ShareKind.Circle;
var StatusCode;
(function (StatusCode) {
    StatusCode[StatusCode["ERROR"] = 500] = "ERROR";
    StatusCode[StatusCode["NOT_FOUND"] = 404] = "NOT_FOUND";
})(StatusCode || (StatusCode = {}));
StatusCode.ERROR;
var Grades;
(function (Grades) {
    Grades["Junior"] = "Junior";
    Grades["Middle"] = "Middle";
    Grades["Senior"] = "Senior";
})(Grades || (Grades = {}));
const dev2 = {
    login: 'svyat',
    skills: ['Junior'],
    level: Grades.Junior,
};
function upGrade(user) {
    if (user.level === Grades.Junior) {
        user.level = Grades.Middle;
    }
}
upGrade(dev2);
