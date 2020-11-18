
import React from "react";
// nodejs library that concatenates classes
// react plugin used to create charts
import {Navbar,Nav,NavDropdown} from "react-bootstrap";
import "../black-dashboard-react-master/src/assets/scss/black-dashboard-react.scss";
import "../black-dashboard-react-master/src/assets/css/nucleo-icons.css";
// reactstrap components

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
class Dashboard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
    this.handleClick = this.handleClick.bind(this);
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
    this.handleClick = this.handleClick.bind(this);
  };
  handleClick() 
    {
      this.props.history.push("/login")
    }
  render() {
    return (
      <>
         <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/dashboard">Home</Nav.Link>
      <Nav.Link href="/attendance">Attendance Info</Nav.Link>
      <NavDropdown title="Hostel" id="basic-nav-dropdown">
        <NavDropdown.Item href="/hostelfee">Fees details</NavDropdown.Item>
        <NavDropdown.Item href="/hostelallot">Pay online</NavDropdown.Item>
        <NavDropdown.Divider />
      </NavDropdown>
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
    <Button color="dark" className="logout" onClick={this.handleClick} type="submit">Logout</Button>
  </Navbar>
  <br />
        <div className="content">
        <Row>
            <Col>
              <Card>
                <CardHeader>
                  <CardTitle tag="h4">Simple Table</CardTitle>
                </CardHeader>
                <CardBody>
                  <Table className="tablesorter" responsive>
                    <thead className="text-primary">
                      <tr>
                        <th>Name</th>
                        <th>Country</th>
                        <th>City</th>
                        <th className="text-center">Salary</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Dakota Rice</td>
                        <td>Niger</td>
                        <td>Oud-Turnhout</td>
                        <td className="text-center">$36,738</td>
                      </tr>
                      <tr>
                        <td>Minerva Hooper</td>
                        <td>Curaçao</td>
                        <td>Sinaai-Waas</td>
                        <td className="text-center">$23,789</td>
                      </tr>
                      <tr>
                        <td>Sage Rodriguez</td>
                        <td>Netherlands</td>
                        <td>Baileux</td>
                        <td className="text-center">$56,142</td>
                      </tr>
                      <tr>
                        <td>Philip Chaney</td>
                        <td>Korea, South</td>
                        <td>Overland Park</td>
                        <td className="text-center">$38,735</td>
                      </tr>
                      <tr>
                        <td>Doris Greene</td>
                        <td>Malawi</td>
                        <td>Feldkirchen in Kärnten</td>
                        <td className="text-center">$63,542</td>
                      </tr>
                      <tr>
                        <td>Mason Porter</td>
                        <td>Chile</td>
                        <td>Gloucester</td>
                        <td className="text-center">$78,615</td>
                      </tr>
                      <tr>
                        <td>Jon Porter</td>
                        <td>Portugal</td>
                        <td>Gloucester</td>
                        <td className="text-center">$98,615</td>
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

export default Dashboard;
