const getEmployeesName = require("./Company")
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

