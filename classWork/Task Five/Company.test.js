const {getEmployeesName, getCompanyNameAndLocation, getEmployeesNameAndDepartment} = require("./Company")
const company = {
    name: "TechCorp",
    location: "San Francisco",
    employees: [
        {id: 100, name: "ayo", department: "Engineering"},
        {id: 101, name: "bolaji", department: "HR"},
        {id: 103, name: "tayo", department: "Marketing"},
        {id: 104, name: "abefe", department: "HR"},
    ]
};

test ("print the name of the second employee", () => {
    let secondEmployee = getEmployeesName(company, 2)
    let expected = "bolaji"
    expect(secondEmployee).toBe(expected);
})

test ("print the name of the last employee", () => {
    let lastEmployee = getEmployeesName(company, 4)
    let expected = "abefe"
    expect(lastEmployee).toBe(expected);
})

test ("get the company's name and location", () => {
    let companyNameAndLocation = getCompanyNameAndLocation(company)
    let expected = "name: TechCorp, location: San Francisco"
    expect(companyNameAndLocation).toBe(expected);
})

test ("print all the employees names and department", () => {
    let employeesName = getEmployeesNameAndDepartment(company)
    let expected = "name: ayo department: Engineering, name: bolaji department: HR, name: tayo department: Marketing, name: abefe department: HR"
    expect(employeesName).toBe(expected);
})