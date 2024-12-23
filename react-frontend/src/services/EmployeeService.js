import axios from 'axios';

//const EMPLOYEE_API_BASE_URL = "http://4.228.64.164:8080/api/v1/employees";
//const EMPLOYEE_API_BASE_URL = "http://52.77.219.247:8080/api/v1/employees";
//const EMPLOYEE_API_BASE_URL = "http://backend_end_crud_java:8080/api/v1/employees";
const EMPLOYEE_API_BASE_URL = "/api/v1/employees";
class EmployeeService {

    getEmployees(){
        return axios.get(EMPLOYEE_API_BASE_URL);
    }

    createEmployee(employee){
        return axios.post(EMPLOYEE_API_BASE_URL, employee);
    }

    getEmployeeById(employeeId){
        return axios.get(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }

    updateEmployee(employee, employeeId){
        return axios.put(EMPLOYEE_API_BASE_URL + '/' + employeeId, employee);
    }

    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
}

export default new EmployeeService()
