
classRoster = ["Alice", "Tom", "Charlie", "Diana", "Evan"]

let string_Class_Roster = classRoster.toString()

console.log("Class Roster: ", string_Class_Roster);
console.log("Original Class Roster: ", classRoster);


classRoster.push("Fiona");
classRoster.push("Nancy");

let removedStudent = classRoster.shift();
console.log("Removed Student: ", removedStudent);

console.log("Updated Class Roster: ", classRoster);

let length_string_Class_Roster = classRoster.length;
console.log("Length of Class Roster: ", length_string_Class_Roster);


// Exercise 3B

let classInfo = {
  className: "ENSF381: Full-Stack Web Development",
  instructor: "Dr. Smith",
  students: classRoster,
  details: {
    semester: "Winter",
    year: 2025
  }
};

classInfo.schedule = ["Monday", "Wednesday", "Friday"];


classInfo.instructor = "Dr. Abdellatif";


console.log(classInfo.className);
console.log(classInfo.instructor);
console.log(classInfo.students);


console.log(classInfo.details.semester);


console.log(classInfo);

// (Destructuring)


let { className, students } = classInfo;
console.log(className);
console.log(students);


let { semester, year } = classInfo.details;
console.log(semester);
console.log(year);


let [student1, student2, ...remainingStudents] = classRoster;

console.log(student1);
console.log(student2);
console.log(remainingStudents);


