const {getStudentName, getSubjectIndex, getZipCode, getAge, addAge, addNewProperty, getDetails} = require("./ObjectTask.js")

beforeEach(() => student = {
    name: "John Dee",
    age: "22",
    course: ["Math", "Physics", "Computer Science"],
    address: {
        city: "New York",
        zip: 10001,
    }
});

test ("get student name", () => {
    let studentName = getStudentName;
    let answer = "John Dee";
    expect(studentName(student)).toBe(answer);
});

test ("get second subject", () => {
    let secondSubject = getSubjectIndex;
    let answer = "Physics";
    expect(secondSubject(student, 2)).toBe(answer);
});

test ("get third subject", () => {
    let thirdSubject = getSubjectIndex;
    let answer = "Computer Science";
    expect(thirdSubject(student, 3)).toBe(answer);
})

test ("get first subject", () => {
    let firstSubject = getSubjectIndex;
    let answer = "Math";
    expect(firstSubject(student, 1)).toBe(answer);
})

test ("get city's zip code", () => {
    let zipCode = getZipCode;
    let answer = 10001;
    expect(zipCode(student)).toBe(answer);
});

test ("get student's age", () => {
    let age = getAge;
    let answer = "22";
    expect(age(student)).toBe(answer);
});

test ("add 23 to age", () => {
    let age = addAge;
    let answer = 23;
    expect(age(student, 23)).toBe(answer);
});

test ("add a new property GPA with a value ", () => {
    let valueAdded = addNewProperty(student, 3.8);
    let answer = 3.8;
    expect(valueAdded).toBe(answer);
})

test ("add another property GPA with a value ", () => {
    let valueAdded = addNewProperty(student, 2);
    let answer = 2;
    expect(valueAdded).toBe(answer);
});

test ("add a method get details and returns a string", () => {
    let getDetail = getDetails(student);
    let answer = "John Doe is 23 years old and has a GPA of 3.8";
    expect(getDetail).toBe(answer);
})