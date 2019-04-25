import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import Logout from '../container/login/logout';

import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    UncontrolledDropdown,
    DropdownToggle,
    DropdownMenu,
    DropdownItem } from 'reactstrap';
import Axios from 'axios';


class Header extends Component {
    constructor(props) {
        super(props);
    
        this.toggle = this.toggle.bind(this);
        this.state = {
          isOpen: false,
          student:'',
          companies: ''
        };
      }

      componentDidMount(){
          Axios.get('http://localhost:5000/api/allStudent')
          .then(res => {
                console.log("response headers sy", res.data)
                const student = res.data.filter(e => {
                        return e.userType === "student"
                })
                const company = res.data.filter(e => {
                    return e.userType === "student"
            })

                this.setState({
                    student,
                    company
                })
          })
          .catch(err => console.log("headers sy error", err.message))
      }


      toggle() {
        this.setState({
          isOpen: !this.state.isOpen
        });
      }
    render(props) { 
        const { classes } = this.props;
        return ( 
            <React.Fragment>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">Mern App</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                           
                            <NavItem>
                                <Logout />
                            </NavItem>
                            {this.state.student ?
                            <div>
                                 <NavItem>
                                <NavLink> <Link to="/companyDashboard" >  company  </Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> <Link to="/postedJob" >  Posted Jobs  </Link></NavLink>
                            </NavItem>
                            </div> : null
                        }
                         {this.state.company ?
                         <div>
                             <NavItem>
                                <NavLink> <Link to="/studentDashboard" >  student  </Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> <Link to="/allJob" >  All Jobs  </Link></NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink> <Link to="/companies" >  All Companies  </Link></NavLink>
                            </NavItem>
                         </div>
                        :null}  
                           
                          
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                      Options
                                </DropdownToggle>
                                <DropdownMenu right>
                                    <DropdownItem>
                                        Option 1
                                    </DropdownItem>
                                    <DropdownItem>
                                        Option 2
                                    </DropdownItem>
                                    <DropdownItem divider />
                                    <DropdownItem>
                                        Reset
                                    </DropdownItem>
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </React.Fragment>
         );
    }
}


 
export default Header;