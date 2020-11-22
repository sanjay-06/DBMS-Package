import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import "../black-dashboard-react-master/src/assets/scss/black-dashboard-react.scss";
import "../black-dashboard-react-master/src/assets/css/nucleo-icons.css";
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
      users: [],
      users1:[]
    };
    this.handleClick=this.handleClick.bind(this);
    this.setActiveTutorial = this.setActiveTutorial.bind(this);
  }
  setActiveTutorial(tutorial, index) {
    this.setState({
      currentTutorial: tutorial,
      currentIndex: index
    });
  }
  handleupdate = e => {
    alert("Thank you for paying")
    window.location.reload(false);
    e.preventDefault();
    const username=Cookies.get('name');
    fetch('http://localhost:9000/users/hostelpay/'+username+'/update', {
      method: 'POST',
  }
  )
  .then(function(response) {
      if (response.status >= 400) {
          throw new Error("Bad response from server");
      }
      return response.json();
  })
  fetch('http://localhost:9000/users/hostelpay/'+username+'/update/rooms', {
    method: 'POST',
}
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
    fetch('http://localhost:9000/users/hostelfees', {
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
    const username=Cookies.get('name');
    fetch('http://localhost:9000/users/hostelpay/'+username, {
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
    const {data} = this.state;
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
  <br /><br></br><br></br>
        <div className="content">
        <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Hostel Fees</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Head</th>
                        <th>Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(member =>
                        <tr key={member.id}>
                        <td>{member.Head} </td>
                        <td><span className="WebRupee">&#x20B9; </span>{member.Amount}</td>
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
                  <CardTitle tag="h4">Hostel Fees</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>Total</th>
                        <th>Payment Status</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users1.map(member =>
                        <tr key={member.StudentId}>
                        <td><span className="WebRupee">&#x20B9; </span>{member.Total} </td>
                        <td>{member.Status}</td>
                        </tr>
                    )}
                    </tbody>
                  </Table>
                </CardBody>
              </Card>
            </Col>        
          </Row>
        </div>
        <center><Button color="dark" className="pay" onClick={this.handleupdate}>Pay online</Button></center>
          <br></br>
      </>
    );
  }
}

export default Fees;