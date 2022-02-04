import react, { useState } from 'react';
import { FormGroup, FormControl, InputLabel, Input, Button, makeStyles, Typography } from '@material-ui/core';
import { addEmployee } from '../Service/api';
import { useHistory } from 'react-router-dom';

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
        margin: '5% 0 5% 25%',
        '& > *': {
            marginTop: 20
        }
    }
})

const AddUser = () => {
    const [user, setUser] = useState(initialValue);
    const { name, city, email, phone,department,salary,experience,age,jobTital,dateOfHire, } = user;
    const classes = useStyles();
    let history = useHistory();

    const onValueChange = (e) => {
        console.log(e.target.value);
        setUser({ ...user, [e.target.name]: e.target.value })
    }

    const addUserDetails = async () => {
        const result=await addEmployee(user);
        if(result.data===1){
            alert("employee Added SucessFully");
            history.push('./all');
        }else{
            alert("employee Added UnsucessFully");
        }
        
    }

    return (
        <FormGroup className={classes.container}>
            <Typography variant="h4">Add Employee</Typography>
            <FormControl>
                <InputLabel htmlFor="my-input">Employee Name</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='name' value={name} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Employee City</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='city' value={city} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Department</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='department' value={department} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Experience</InputLabel>
                <Input type="number" name="experience" onChange={(e) => onValueChange(e)}  value={experience} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Job Title</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='jobTital' value={jobTital} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Date Of Hired</InputLabel>
                <Input type='date' onChange={(e) => onValueChange(e)} name='dateOfHire' value={dateOfHire} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Salary</InputLabel>
                <Input type='text' onChange={(e) => onValueChange(e)} name='salary' value={salary} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Email</InputLabel>
                <Input onChange={(e) => onValueChange(e)} name='email' value={email} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Phone</InputLabel>
                <Input type ='number' onChange={(e) => onValueChange(e)} name='phone' value={phone} id="my-input" />
            </FormControl>
            <FormControl>
                <InputLabel htmlFor="my-input">Age</InputLabel>
                <Input type='number' onChange={(e) => onValueChange(e)} name='age' value={age} id="my-input" />
            </FormControl>
            <FormControl>
                <Button variant="contained" color="primary" onClick={() => addUserDetails()}>Add New Employee</Button>
            </FormControl>
        </FormGroup>
    )
}

export default AddUser;