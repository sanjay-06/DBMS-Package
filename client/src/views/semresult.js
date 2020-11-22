import React from "react";
import Cookies from 'js-cookie'
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
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
      users:[],
      users1:[]
    };
    this.data={}
    this.handleClick = this.handleClick.bind(this);
  } 
  handleClick() 
    {
      this.props.history.push("/")
    }
    componentDidMount() {
      let self = this;
      const username=Cookies.get('name');
      fetch('http://localhost:9000/users/semmarks/'+username, {
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
      fetch('http://localhost:9000/users/semmarks/'+username+'/cgpa', {
        method: 'GET'
    }).then(function(response) {
        if (response.status >= 400) {
            throw new Error("Bad response from server");
        }
        return response.json();
    }).then(function(data) {
        self.setState({users1: data});
    }).catch(err => {
    console.log('caught it!',err);
    })
    }
  render() {
    return (
      <>
       <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/dashboard">Home</Nav.Link>
      <Nav.Link href="/attendance">Attendance Info</Nav.Link>
      <Nav.Link href="/payment">Fees</Nav.Link>
      <Nav.Link href="/ca">Interal Marks</Nav.Link>
      <Nav.Link href="/hostel"></Nav.Link>
      <Nav.Link href="/timetable">Sem timetable</Nav.Link>
      <Nav.Link href="/results">Sem Results</Nav.Link>
      <NavDropdown title="Hostel" id="basic-nav-dropdown">
        <NavDropdown.Item href="/hostelfee">Hostel Fees</NavDropdown.Item>
        <NavDropdown.Item href="/hostelallot">Hostel Allotment</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
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
                  <CardTitle tag="h4">Sem Exam Marks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>StudentId</th>
                        <th>SubjectId</th>
                        <th>SubjectName</th>
                        <th>Credit</th>
                        <th>Grade</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(member =>
                        <tr key={member.id}>
                        <td>{member.StudentId} </td>
                        <td>{member.SubjectId}</td>
                        <td>{member.SubjectName} </td>
                        <td>{member.Credit}</td>
                        <td>{member.Gradepoint} {member.Grade}</td>
                        <td>{member.Result}</td>
                        </tr>
                    )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>        
          </Row>
          <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Sem CGPA</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>StudentId</th>
                        <th>Cgpa</th>
                        <th>Result</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users1.map(member =>
                        <tr key={member.id}>
                        <td>{member.StudentId} </td>
                        <td>{member.cgpa}</td>
                        <td>{member.Result}</td>
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