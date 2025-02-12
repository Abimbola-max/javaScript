function getEmployeesName(company, number) {
    return company.employees[number - 1].name
}

function getCompanyNameAndLocation(company) {
    const {name, location} = company;
    return `name: ${name}, location: ${location}`;
}

function getEmployeesNameAndDepartment(company) {
    for (const employee of company.employees) {
        return `${employee.name} ${employee.department},`;
    }
}

module.exports = {getEmployeesName, getCompanyNameAndLocation, getEmployeesNameAndDepartment};