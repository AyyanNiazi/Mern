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
            isAuth: '',
            user: '',
            isOpen: false,
            student:'',
            localstudent:'',
            localcompany: '',
            company: '',
            companies: '',
            evein: false,
            admin:'',
            };
        }
        static propTypes = {
            logout: PropTypes.func.isRequired
        }

        logout = () => {
            this.props.logout();
            // window.location.
            // localStorage.removeItem('state')
            this.setState({
                evein: true
            })
            window.location.reload()
            console.log("logout")
        }
        componentDidMount(){
            const {company,student,isAuth} = this.state
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

        const getitem = JSON.parse(localStorage.getItem('state'));
        try{
            const user = getitem.authReducer.isAuth === true;
            const student = getitem.authReducer.authUser.selector === "student"
            const company = getitem.authReducer.authUser.selector === "company"
            const admin = getitem.authReducer.authUser.user === "admin"
            console.log(admin)
            this.setState({
                isAuth: user,
                localstudent:student,
                localcompany:company,
                admin: admin
            })
        }
        catch(e){
            console.log(e.message);
        }
            
        console.log (this.props)
        // try{
        //     if(!this.state.local === "")
        //     this.setState({
        //         storage: JSON.parse(localStorage.getItem('state')),
        //     })
        // }
        // catch(e){
        //     console.log(e.message)
        // }
        }


        toggle() {
            this.setState({
            isOpen: !this.state.isOpen
            });
        }
        render(props) { 
            const { storage } = this.state
            return ( 
                <div>
                   
                            

                                { this.props.auth.isAuth === true && this.props.auth.authUser.selector === "student"
                                ||
                               
                                this.state.localstudent && this.state.isAuth                                
                               
                                    ? 
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
                            this.props.auth.isAuth === true && this.props.auth.authUser.selector === "company" 
                            ||
                               
                                this.state.localcompany && this.state.isAuth                                
                                ? 
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
                                        <Link to='/login' onClick={this.logout.bind(this)} > Logout </Link>
                                        </DropdownItem>
                           </DropdownMenu>
                       </UncontrolledDropdown>
                       </Nav>
                            </Collapse>
                            </Navbar>
                   </div> :
                    
                    
                               
                    this.state.isAuth                                  ? 
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
                                        <Link to='/login' onClick={this.logout.bind(this)} > Logout </Link>
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

                                
                           
                </div>
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