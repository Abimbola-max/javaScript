function getEmployeesName(company, number) {
    return company.employees[number - 1].name
}

module.exports = getEmployeesName;