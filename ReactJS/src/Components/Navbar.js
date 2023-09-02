import React, { useState } from 'react';
import style from "./style.module.css"
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

const Navbar = ({ direction, ...args }) => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const toggle = () => setDropdownOpen((prevState) => !prevState);

    return (
        <div>
            <section id={style.nav}>
                <article>
                    <div className={style.Logo}>
                        <Link to="/home"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 30 30" width="60px" height="60px"><path d="M 6 4 C 4.9069372 4 4 4.9069372 4 6 L 4 14.832031 A 1.0001 1.0001 0 0 0 4 15.158203 L 4 19.832031 A 1.0001 1.0001 0 0 0 4 20.158203 L 4 24 C 4 25.093063 4.9069372 26 6 26 L 24 26 C 25.093063 26 26 25.093063 26 24 L 26 20.167969 A 1.0001 1.0001 0 0 0 26 19.841797 L 26 15.167969 A 1.0001 1.0001 0 0 0 26 14.841797 L 26 6 C 26 4.9069372 25.093063 4 24 4 L 6 4 z M 6 11 L 24 11 L 24 14 L 6 14 L 6 11 z M 6 16 L 24 16 L 24 19 L 6 19 L 6 16 z M 6 21 L 24 21 L 24 24 L 6 24 L 6 21 z" /></svg></Link>
                        <div className={style.title}>
                        <h3>Notes App</h3>
                        </div> 
                    </div>
                    <div className={style.Menu}>
                        <ol>
                            <li><Link to="/addNote"><Button color="primary">Add Note</Button></Link><br/></li>
                            <li>
                                <div className="d-flex">
                                    <Dropdown isOpen={dropdownOpen} toggle={toggle} direction={direction}>
                                        <DropdownToggle caret size='sm' button style={{width:75, backgroundColor:'transparent', border:'none'}}>
                                            <svg width="50px" height="50px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path opacity="0.4" d="M12.1207 12.78C12.0507 12.77 11.9607 12.77 11.8807 12.78C10.1207 12.72 8.7207 11.28 8.7207 9.50998C8.7207 7.69998 10.1807 6.22998 12.0007 6.22998C13.8107 6.22998 15.2807 7.69998 15.2807 9.50998C15.2707 11.28 13.8807 12.72 12.1207 12.78Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path opacity="0.34" d="M18.7398 19.3801C16.9598 21.0101 14.5998 22.0001 11.9998 22.0001C9.39977 22.0001 7.03977 21.0101 5.25977 19.3801C5.35977 18.4401 5.95977 17.5201 7.02977 16.8001C9.76977 14.9801 14.2498 14.9801 16.9698 16.8001C18.0398 17.5201 18.6398 18.4401 18.7398 19.3801Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                            <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                                        </svg></DropdownToggle>
                                        <DropdownMenu {...args}>
                                            {/* <DropdownItem header>Header</DropdownItem> */}
                                            <DropdownItem><Link to="/viewUser" className={style.menu}>VIEW USER</Link><br /></DropdownItem>
                                            {/* <DropdownItem divider /> */}
                                            <DropdownItem><Link to="/updateUser" className={style.menu}>UPDATE USER</Link><br /></DropdownItem>
                                            <DropdownItem><Link to="/deleteUser" className={style.menu}>DELETE USER</Link><br /></DropdownItem>
                                            <DropdownItem><Link to="/signout" className={style.menu}>SIGN OUT</Link><br /></DropdownItem>
                                        </DropdownMenu>
                                    </Dropdown>
                                </div>
                            </li>
                        </ol>
                    </div>
                </article>
            </section>
        </div>
    )
}
export default Navbar