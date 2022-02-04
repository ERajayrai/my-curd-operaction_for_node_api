import {  makeStyles,Table, TableHead, TableCell, TableRow, TableBody } from '@material-ui/core';
import {getSearchEmployeeByKeyWord} from '../Service/api'
import {useState} from 'react'

const useStyles = makeStyles({
    component: {
        margin: 10,
        '& > *': {
            marginTop: 30
        }
    },
    table: {
        width: '100%',
        marginTop:'100px',
        marginRight:10
    },
    thead: {
        '& > *': {
            fontSize: 16,
            background: '#2e2c4a',
            color: '#7e8c7f',
            fontWeight:700,
            border:'2px solid #7e8c7f',
        }
    },
    row: {
        '& > *': {
            fontSize: 14,
            border:'2px solid #7e8c7f',

        }
    }
})

const Ajay = () => {
    const classes = useStyles();
    const [employees, setEmployees] = useState([]);

    
   
    const getEmployee = async (Name) => {
        if(Name!==''||Name.length!==0){
            const response = await getSearchEmployeeByKeyWord(Name);
            setEmployees(response.data);
            console.log(response.data)
        }else{
            setEmployees([]);
        }
    }

    return (
        
        <Table className={classes.table}>
            <TableHead>
                <TableRow className={classes.thead}>
                    <TableCell> <input className='searchInput' type="text"id="header-search"placeholder="Search by Name or Key Word"name="s" onChange={e=>getEmployee(e.target.value)}/></TableCell>
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
                </TableRow>
            </TableHead>
            <TableBody>
                {employees.map((employee) => (
                    <TableRow className={classes.row} key={employees._id}>
                        <TableCell>Serch Result</TableCell>
                        <TableCell>{employee._id}</TableCell>
                        <TableCell>{employee.name}</TableCell>
                        <TableCell>{employee.city}</TableCell>
                        <TableCell>{employee.department}</TableCell>
                        <TableCell>{employee.experience}</TableCell>
                        <TableCell>{employee.jobTital}</TableCell>
                        <TableCell>{employee.dateOfHire}</TableCell>
                        <TableCell>{employee.salary}</TableCell>
                        <TableCell>{employee.email}</TableCell>
                        <TableCell>{employee.phone}</TableCell>
                        <TableCell>{employee.age}</TableCell>
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    )
}

export default Ajay;