import { AppBar, Toolbar} from '@material-ui/core';
import { NavLink } from 'react-router-dom';


const NavBar = () => {
    return (
        <AppBar position="fixed" className="Headar">
            <Toolbar>
                <NavLink className='tab1' to="/" exact>Search</NavLink>
                <NavLink className='tab2' to="all" exact>Employee List</NavLink>
                <NavLink className='tab3' to="add" exact>Add New Employee</NavLink>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;