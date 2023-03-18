let student_name = `Mickey Mouse`;
let student_gpa = 3.7;
let honor_role = false;

if (honor_role === true) {
    console.log(`Congrats, you are on the honor role`);
} else {
    console.log(`Keep going!`);
}

if (student_gpa <= 1.9) {
    console.log(`F`);
} else if (student_gpa >= 2.0 && student_gpa <= 2.4) {
    console.log(`D`);
} else if (student_gpa >= 2.5 && student_gpa <= 2.9) {
    console.log(`C`);
} else if (student_gpa >= 3.0 && student_gpa <= 3.4) {
    console.log(`B`);
} else if (student_gpa >= 3.5 && student_gpa <= 4.0) {
    console.log(`A`);
} else {
    console.log(`Systems error`);
}

let student_names = [`John`, `Jane`, `Mike`];
let student_gpas = [2.1, 3.2, 1.2];
let honor_roles = [true, true, true];

if (honor_roles[0] === true && honor_roles[1] && honor_roles[2]) {
    console.log(`Rockn'roll!`);
} else if ((honor_roles[0] === true && honor_roles[1] === true) || (honor_roles[1] === true && honor_roles[2] === true) || (honor_roles[0] === true && honor_roles[2] === true)) 
{
    console.log(`Great Work!`);
} else {
    console.log(`Keep up the hard work!`);
}

student_names.push(`Isael`);
student_gpas.push(0.8);
honor_roles.push(true);

let last_student = student_names.pop();
let last_gpa = student_gpas.pop();
let last_honor = honor_roles.pop();

if (last_gpa > student_gpas[0] && last_gpa > student_gpas[1] && student_gpas[2]) {
    console.log(`Last student is the best student`);
} else {
    console.log(`There are better honor students enrolled`);
}
