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
      users:[],
      users1:[]
    };
    this.handleClick = this.handleClick.bind(this);
  }
  handleupdate = e => {
    alert("Thank you for paying")
    window.location.reload(false);
    e.preventDefault();
    const username=Cookies.get('name');
    fetch('http://localhost:9000/users/feesupdate/'+username, {
      method: 'POST',
  },
  )
  .then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
  })
  } 
  handleClick() 
    {
      this.props.history.push("/")
    }
    componentDidMount() {
      let self = this;
      fetch('http://localhost:9000/users/fees', {
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
      let self1 = this;
      const username=Cookies.get('name')
      fetch('http://localhost:9000/users/feesstatus/'+username, {
          method: 'GET'
      }).then(function(response) {
          if (response.status >= 400) {
              throw new Error("Bad response from server");
          }
          return response.json();
      }).then(function(data) {
          self1.setState({users1: data});
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
                  <CardTitle tag="h4">Fee Structure</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>CourseName</th>
                        <th>FeeHead</th>
                        <th>Amount(INR)</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(member =>
                        <tr key={member.id}>
                        <td>{member.CourseName} </td>
                        <td>{member.FeeHead}</td>
                        <td><span className="WebRupee">&#x20B9; </span>{member.CAmount}</td>
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
                  <CardTitle tag="h4">Payment status</CardTitle>
                </CardHeader>
                <CardBody>
                <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>StudentId</th>
                        <th>CourseName</th>
                        <th>TotalAmount</th>
                        <th>PaymentStatus</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users1.map(member =>
                        <tr key={member.id}>
                        <td>{member.StudentId}</td>
                        <td>{member.CourseName}</td>
                        <td><span className="WebRupee">&#x20B9; </span>{member.TotalAmount}</td>
                        <td>{member.PaymentStatus}</td>
                        </tr>
                    )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>        
          </Row>
          <center><Button color="dark" className="pay" onClick={this.handleupdate}>Pay online</Button></center>
          <br></br>
        </div>
      </>
    );
  }
}

export default Fees;
