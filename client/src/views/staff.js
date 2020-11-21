import React from "react";
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import auth from '../Auth'
import Cookies from 'js-cookie'
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
      const username=Cookies.get('staffname');
      fetch('http://localhost:9000/admin/marks/'+username+'/tmarks', {
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
      fetch('http://localhost:9000/admin/marks/'+username+'/lmarks', {
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
      <Nav.Link href="/upload">Home</Nav.Link>
      <Nav.Link href="/student">student details</Nav.Link>
    </Nav>
    <Button color="dark" className="logout" onClick={()=>{
      auth.logout(()=>{
        Cookies.remove('staffname');
        this.props.history.push("/login1");
      })
    }}>Logout</Button>
  </Navbar>
  <br />
        <div className="content">
        <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Theory Marks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>StudentId</th>
                        <th>SubjectId</th>
                        <th>CA1 Mark</th>
                        <th>CA2 Mark</th>
                        <th>Assignment Mark</th>
                        <th>Tutorial Mark</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(member =>
                        <tr key={member.id}>
                        <td>{member.StudentId} </td>
                        <td>{member.subjectId}</td>
                        <td>{member.CA1_Mark} </td>
                        <td>{member.CA2_Mark}</td>
                        <td>{member.Assignment_Mark} </td>
                        <td>{member.Tutorial_Mark}</td>
                        <td><a>Edit</a>|<a>Delete</a></td>
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
                  <CardTitle tag="h4">Lab Marks</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter">
                    <thead className="text-primary">
                      <tr>
                        <th>StudentId</th>
                        <th>SubjectId</th>
                        <th>Lab1 Mark</th>
                        <th>Lab2 Mark</th>
                        <th>LabFinal Mark</th>
                        <th>Package Mark</th>
                      </tr>
                    </thead>
                    <tbody>
                    {this.state.users1.map(member =>
                        <tr key={member.id}>
                        <td>{member.StudentId} </td>
                        <td>{member.subjectId}</td>
                        <td>{member.Lab1_Mark} </td>
                        <td>{member.Lab2_Mark}</td>
                        <td>{member.LabFinal_Mark}</td>
                        <td>{member.Package_Mark}</td>
                        <td><a>Edit</a>|<a>Delete</a></td>
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
