import react, { useState, useEffect } from 'react';
import { Table, TableHead, TableCell, Paper, TableRow, TableBody, Button, makeStyles, SearchBar } from '@material-ui/core'
import { getEmployees, deleteEmployee } from '../Service/api';
import { Link } from 'react-router-dom';

const useStyles = makeStyles({
    table: {
        width: '100%',
        marginTop: '100px',
        marginRight: 10
    },
    thead: {
        '& > *': {
            fontSize: 16,
            background: '#2e2c4a',
            color: '#7e8c7f',
            fontWeight: 700,
            border: '2px solid #7e8c7f',
        }
    },
    row: {
        '& > *': {
            fontSize: 14,
            border: '2px solid #7e8c7f',
        }
    }
})


const AllEmployees = () => {
    const [employees, setEmployees] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        getAllEmployees();
    }, []);

    const deleteEmployeeData = async (id) => {
        await deleteEmployee(id);
        getAllEmployees();
    }

    const getAllEmployees = async () => {
        let response = await getEmployees();
        setEmployees(response.data);
    }

    return (
        <>
        
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell>Employee Id</TableCell>
                    <TableCell>Employee Name</TableCell>
                    <TableCell>City</TableCell>
                    <TableCell>Department</TableCell>
                    <TableCell>Experience</TableCell>
                    <TableCell>Job Tital</TableCell>
                    <TableCell>Date Of Hired</TableCell>
                    <TableCell>Salary</TableCell>
                    <TableCell>Email</TableCell>
                    <TableCell>Phone</TableCell>
                    <TableCell>Age</TableCell>
                    <TableCell>Actions</TableCell>

                </TableRow>
            </TableHead>
            <TableBody>
                {employees.map((employee) => (
                    <TableRow className={classes.row} key={employee._id}>
                        <TableCell>{employee._id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.city}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>{employee.experience}</TableCell>
                        <TableCell>{employee.jobTilal}</TableCell>
                        <TableCell>{employee.dateOfHire}</TableCell>
                        <TableCell>{employee.salary}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.phone}</TableCell>
                        <TableCell>{employee.age}</TableCell>

                        <TableCell>
                            <Button variant="contained" className="editBtn" style={{ marginRight: "10 px", color: "red" }} component={Link} to={`/edit/${employee._id}`}>Edit</Button>
                            <Button variant="contained" className='deleteBtn' onClick={() => deleteEmployeeData(employee._id)}>Delete</Button>
                        </TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table></>
    )
}

export default AllEmployees;