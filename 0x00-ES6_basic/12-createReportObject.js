export default function createReportObject(employeesList) {
    return {
        allEmployees: employeesList, // Use 'allEmployees' to hold the combined employees
        getNumberOfDepartments: (employeesList) => {
            return Object.keys(employeesList).length;
        },
    };
}
