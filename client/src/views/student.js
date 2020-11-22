import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import Cookies from 'js-cookie';
import auth from '../Auth'
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
  Button
} from "reactstrap";

class Fees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data",
      users:[]
    };
    this.handleClick = this.handleClick.bind(this);
  } 
  handleClick() 
    {
      this.props.history.push("/")
    }
    componentDidMount() {
      let self = this;
      fetch('http://localhost:9000/admin/students', {
          method: 'GET'
      }).then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(data) {
          self.setState({users: data});
      }).catch(err => {
      console.log('caught it!',err);
      })
    }
  render() {
    return (
      <>
      <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/upload">Home</Nav.Link>
      <Nav.Link href="/students">students details</Nav.Link>
    </Nav>
    <Button color="dark" className="logout" onClick={()=>{
      auth.logout(()=>{
        Cookies.remove('name');
        this.props.history.push("/");
      })
    }}>Logout</Button>
  </Navbar>
  <br />
        <div className="content">
        <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Student details</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>FirstName</th>
                        <th>LastName</th>
                        <th>StudentId</th>
                        <th>DateOfBirth</th>
                        <th>Batch</th>
                        <th>CourseName</th>
                        <th>DeptName</th>
                        <th>Email</th>
                        <th>StudentMobileNo</th>
                        <th>ResidentStatus</th>
                        <th>FatherName</th>
                        <th>ParentMobileNo</th>
                        <th>District</th>
                        <th>State</th>
                        <th>Country</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(member =>
                        <tr key={member.id}>
                        <td>{member.FirstName}</td>
                        <td>{member.LastName}</td>
                        <td>{member.StudentId}</td>
                        <td>{member.DateOfBirth}</td>
                        <td>{member.Batch}</td>
                        <td>{member.CourseName}</td>
                        <td>{member.DeptName}</td>
                        <td>{member.Email}</td>
                        <td>{member.StudentMobileNo}</td>
                        <td>{member.ResidentStatus}</td>
                        <td>{member.FatherName}</td>
                        <td>{member.ParentMobileNo}</td>
                        <td>{member.District}</td>
                        <td>{member.State}</td>
                        <td>{member.Country}</td>
                        </tr>
                    )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>        
          </Row>
        </div>
      </>
    );
  }
}

export default Fees;
