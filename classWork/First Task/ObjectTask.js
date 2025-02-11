function getStudentName(student) {
    return student.name;
}

function getSubjectIndex(student, index) {
    return student.course[index - 1];
}

function getZipCode(student) {
    return student.address.zip
}

function getAge(student) {
    return student.age;
}

function addAge(student, age) {
    return student.age = age;
}

function addNewProperty(student, GPA) {
    return student.GPA = GPA;
}

function getDetails(student, age) {
    return student.name + " is " + age + " years old and has a GPA of " + student.GPA;
}

module.exports = {getStudentName, getSubjectIndex, getZipCode, getAge, addAge, addNewProperty, getDetails};