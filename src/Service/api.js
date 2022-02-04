import axios from 'axios';

const employeeUrl = 'http://localhost:8000/employee';


export const getEmployees = async (id) => {
    id = id || '';
    return await axios.get(`${employeeUrl}/${id}`);
}

export const addEmployee = async (user) => {
    return await axios.post(`${employeeUrl}/add`, user);
}

export const deleteEmployee = async (id) => {
    return await axios.delete(`${employeeUrl}/delete/${id}`);
}

export const editEmployee = async (id, user) => {
    return await axios.put(`${employeeUrl}/edit/${id}`, user)
}
export const getSearchEmployeeByKeyWord = async (name, user) => {
    return await axios.get(`${employeeUrl}/userName/?name=${name}`,user)
}