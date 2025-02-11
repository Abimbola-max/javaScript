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

function addNewProperty(student, property) {
    return student.property = property;
}

function getDetails(student) {
    return student.name + "is" + student.age + "years old and has a Gpa of " + student.property;
}

module.exports = {getStudentName, getSubjectIndex, getZipCode, getAge, addAge, addNewProperty, getDetails};