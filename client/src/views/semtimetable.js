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

class Semtimetable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data",
      users:[]
    };
    this.handleClick=this.handleClick.bind(this);
  }
  componentDidMount() {
    let self = this;
    fetch('http://localhost:9000/users/semtimetable', {
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
  handleClick() 
  {
    this.props.history.push("/")
  }
  render() {
    return (
      <>
    <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/dashboard">Home</Nav.Link>
      <Nav.Link href="/attendance">Attendance Info</Nav.Link>
      <Nav.Link href="/payment">Fees</Nav.Link>
      <Nav.Link href="/ca">Internal Marks</Nav.Link>
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
                  <CardTitle tag="h4">Semester Timetable</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>SubjectId</th>
                        <th>SubjectName</th>
                        <th>Date</th>
                        <th>Slot</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(member =>
                        <tr key={member.id}>
                        <td>{member.SubjectId} </td>
                        <td>{member.SubjectName}</td>
                        <td>{member.Date}</td>
                        <td>{member.Slot}</td>
                        </tr>
                    )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>        
          </Row>
        </div>
        <div className="content">
        <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Legend</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Timings</th>
                        <th>Slot</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>9:30 AM TO 11:30 AM</td>
                        <td>1</td>
                      </tr>
                      <tr>
                        <td>1:30 PM TO 3:30 PM</td>
                        <td>2</td>
                      </tr>
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

export default Semtimetable;