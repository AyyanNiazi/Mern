    import React,{Component} from 'react';
    import {Link,NavLink} from 'react-router-dom';
    import Logout from '../container/login/logout';
    import {logout} from '../store/action/authAction'
    import {connect} from 'react-redux'
import PropTypes from 'prop-types'
    // import CompanyDashboard from './company/companyDashboard'
    import {
        Collapse,
        Navbar,
        NavbarToggler,
        NavbarBrand,
        Nav,
        
        UncontrolledDropdown,
        DropdownToggle,
        DropdownMenu,
        DropdownItem } from 'reactstrap';
    import Axios from 'axios';
    import { stat } from 'fs';


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
        static propTypes = {
            logout: PropTypes.func.isRequired
        }

        logout = () => {
            this.props.logout();
            // window.location.
            console.log("logout")
        }
        componentDidMount(){
            console.log(this.props)
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
                   
                            

                                {this.props.auth.isAuth === true && this.props.auth.authUser.selector === "student"  ? 
                                <div>
                                      <Navbar color="light" light expand="md">
                                      <h3>  <NavLink to='/studentDashboard' > Student Dashboard </NavLink>  </h3>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            
                                     <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Welcome Student
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                        <NavLink> <Link to="/allJob" >  All jobs  </Link></NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                        <NavLink> <Link to="/allCompany" >  Registered Companies  </Link></NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        <DropdownItem>
                                        <Link to='/login' onClick={this.logout.bind(this)} > Logout </Link>
                                        </DropdownItem>
                                    </DropdownMenu>
                                </UncontrolledDropdown>

                            </Nav>
                            </Collapse>
                            </Navbar>
                            </div> 
                            : 
                            this.props.auth.isAuth === true && this.props.auth.authUser.selector === "company"  ? 
                            <div>
                                 <Navbar color="light" light expand="md">
                                 <h3>  <NavLink to='/companyMain' > Company Dashboard </NavLink>  </h3>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                           <DropdownToggle nav caret>
                               Welcome Comapny
                           </DropdownToggle>
                           <DropdownMenu right>
                               <DropdownItem>
                               <NavLink> <Link to="/allStudent" >  All Student  </Link></NavLink>
                               </DropdownItem>
                               <DropdownItem>
                               <NavLink> <Link to="/postedJob" >  Students Apply for job  </Link></NavLink>
                               </DropdownItem>
                               <DropdownItem>
                               <NavLink> <Link to="/companyDashboard" >  Post job  </Link></NavLink>
                               </DropdownItem>
                               <DropdownItem divider />
                               <DropdownItem>
                               <Link to='/login' onClick={ () => this.logout} > Logout </Link>
                                       
                               </DropdownItem>
                           </DropdownMenu>
                       </UncontrolledDropdown>
                       </Nav>
                            </Collapse>
                            </Navbar>
                   </div> :
                    this.props.auth.isAuth === true && this.props.auth.authUser.user === "admin"  ? 
                    <div>
                         <Navbar color="light" light expand="md">
                       <h3>  <NavLink to='/adminDashboard' > Admin dashboard</NavLink>  </h3>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                    <UncontrolledDropdown nav inNavbar>
                   <DropdownToggle nav caret>
                       Welcome Admin
                   </DropdownToggle>
                   <DropdownMenu right>
                       <DropdownItem>
                       <NavLink> <Link to="/allStudent" >  All Student  </Link></NavLink>
                       </DropdownItem>
                       <DropdownItem>
                       <NavLink> <Link to="/allCompany" >  All Companies  </Link></NavLink>
                       </DropdownItem>
                       <DropdownItem>
                       <NavLink> <Link to="/postedJob" >  All  job  </Link></NavLink>
                       </DropdownItem>
                       <DropdownItem divider />
                       <DropdownItem>
                       <Link to='/login' onClick={ () => this.logout} > Logout </Link>
                       </DropdownItem>
                   </DropdownMenu>
               </UncontrolledDropdown>
               </Nav>
                            </Collapse>
                            </Navbar>
                    </div> :
                            <div>
                                 <Navbar color="light" light expand="md">
                        <NavbarBrand href="/">Mern App</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                            
                                    <UncontrolledDropdown nav inNavbar>
                                    <DropdownToggle nav caret>
                                        Authentication
                                    </DropdownToggle>
                                    <DropdownMenu right>
                                        <DropdownItem>
                                        <NavLink> <Link to="/login" >  Login  </Link></NavLink>
                                        </DropdownItem>
                                        <DropdownItem>
                                        <NavLink> <Link to="/" >  Register  </Link></NavLink>
                                        </DropdownItem>
                                        <DropdownItem divider />
                                        {/* <DropdownItem>
                                            Reset
                                        </DropdownItem> */}
                                    </DropdownMenu>
                                </UncontrolledDropdown>
                                </Nav>
                                </Collapse>
                                </Navbar>
                                </div>
                                    }
                                {/* {this.state.student && this.props.student ?
                                <div>
                                    <NavItem>
                                    <NavLink> <Link to="/companyDashboard" >  company  </Link></NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink> <Link to="/postedJob" >  Posted Jobs  </Link></NavLink>
                                </NavItem>
                                </div> : null
                            }
                            {this.state.company && this.props.company ?
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
                                */}

                                
                           
                </React.Fragment>
            );
        }
    }


    const mapstatetoprops = state => {
        console.log(state.authReducer)
        return {
            auth: state.authReducer,
            // user: state.authReducer
        }
    } 

    export default connect(mapstatetoprops,{logout})(Header);