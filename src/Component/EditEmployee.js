import { useState, useEffect } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { useHistory, useParams } from 'react-router-dom';
import { getEmployees, editEmployee } from '../Service/api';

const initialValue = {
    name: '',
    city: '',
    department:'',
    jobTital:'',
    dateOfHire:'',
    salary:'',
    experience:'',
    age:'',
    email: '',
    phone: '',
}

const useStyles = makeStyles({
    container: {
        width: '50%',
        margin: '5% 0 0 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const EditEmployee = () => {
    const [employee, setEmployee] = useState(initialValue);
    const { name, city, email, phone,department,salary,experience,age,jobTital,dateOfHire, } = employee;
    const { id } = useParams();
    const classes = useStyles();
    let history = useHistory();

    useEffect(() => {
        loadEmployeeDetails();
    }, []);

    const loadEmployeeDetails = async() => {
        const response = await getEmployees(id);
        setEmployee(response.data);
    }

    const editEmployeeDetails = async() => {
        const response = await editEmployee(id, employee);
        history.push('/all');
    }

    const onValueChange = (e) => {
        console.log(e.target.value);
        setEmployee({...employee, [e.target.name]: e.target.value})
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Edit Information</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Employee Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='department' value={department} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Job Tital</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='jobTital' value={jobTital} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Experience</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='experience' value={experience} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date Of Hired</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='dateOfHire' value={dateOfHire} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Salary</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='salary' value={salary} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Age</InputLabel>
                <Input  onChange={(e) => onValueChange(e)} name='age' value={age} id="my-input" aria-describedby="my-helper-text" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => editEmployeeDetails()}>Edit Employee</Button>
            </FormControl>
        </FormGroup>
    )
}

export default EditEmployee;