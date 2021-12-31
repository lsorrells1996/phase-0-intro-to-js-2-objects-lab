const employee = {
    name: "John",
    streetAddress: "1510 Davis Mountain Loop"
};

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const updatedEmployee = {...employee};

    updatedEmployee[key] = value;

    return updatedEmployee;
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value;

    return employee;
}

function deleteFromEmployeeByKey(employee, key) {
    const deletedemployee = {...employee};

    delete deletedemployee[key];

    return deletedemployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key];

    return employee;
}