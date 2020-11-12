import React from "react";
import {Navbar,Nav} from "react-bootstrap";
import "../black-dashboard-react-master/src/assets/scss/black-dashboard-react.scss";
import "../black-dashboard-react-master/src/assets/css/nucleo-icons.css";
import {
  Card,
  CardHeader,
  CardBody,
  CardTitle,
  Table,
  Row,
  Col,
} from "reactstrap";

class Fees extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      bigChartData: "data1"
    };
  }
  setBgChartData = name => {
    this.setState({
      bigChartData: name
    });
  };
  test(){
    fetch('http://localhost:5000/users')
      .then(response => response.json())
      .then(users => console.warn(users))
  }
  render() {
    return (
      <>
       <Navbar bg="dark" variant="dark">
    <Nav className="mr-auto">
      <Nav.Link href="/dashboard">Home</Nav.Link>
      <Nav.Link href="/attendance">Attendance details</Nav.Link>
      <Nav.Link href="/payment">Fees</Nav.Link>
      <Nav.Link href="/ca">Interal Marks</Nav.Link>
      <Nav.Link href="/library">Library</Nav.Link>
      <Nav.Link href="/hostel">Hostel</Nav.Link>
      <Nav.Link href="/timetable">Sem timetable</Nav.Link>
      <Nav.Link href="/results">Sem Results</Nav.Link>
      <Nav.Link href="/hostel">Events</Nav.Link>
    </Nav>
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

export default Fees;
