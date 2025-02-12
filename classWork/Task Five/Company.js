function getEmployeesName(company, number) {
    return company.employees[number - 1].name
}

function getCompanyNameAndLocation(company) {
    const {name, location} = company;
    return `name: ${name}, location: ${location}`;
}

function getEmployeesNameAndDepartment(company) {
    let employeeDetails = "";
    for (const [key, value] of Object.entries(company.employees)) {
        employeeDetails += `${key}: ${value} `;
    }
    return employeeDetails;
}

module.exports = {getEmployeesName, getCompanyNameAndLocation, getEmployeesNameAndDepartment};