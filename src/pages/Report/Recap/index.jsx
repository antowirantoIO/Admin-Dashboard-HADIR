import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Button,
  ButtonGroup,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap"

import { connect } from "react-redux";


import { setBreadcrumbItems } from "../../../store/actions";

const ReportRecap = (props) => {
  const breadcrumbItems = [
    { title : "HADIR", link : "#" },
    { title : "Laporan", link : "#" },
    { title : "Rekap Absensi", link : "#" },
  ]

  const [btnprimary1, setBtnprimary1] = useState(false)
  

  useEffect(() => {
    props.setBreadcrumbItems('Basic Tables', breadcrumbItems)
  })
  return (
    <React.Fragment>

      <MetaTags>
        <title>Rekap Absensi | HADIR</title>
      </MetaTags>

      <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Rekap Absensi </CardTitle>
              <p className="card-title-desc">Disini Kamu Bisa Download Rekapan Absensi Di Instansimu</p>

                <ButtonGroup role="group" aria-label="Basic example">
                    <Button type="button" color="primary">PDF</Button>{" "}
                    <Button type="button" color="primary">Excel</Button>{" "}
                    <Button type="button" color="primary">Cetak</Button>{" "}
                </ButtonGroup>
              
                <Dropdown
                  isOpen={btnprimary1}
                  toggle={() => setBtnprimary1(!btnprimary1)}
                  className="float-md-end btn-group me-1 mt-2"
                >
                  <DropdownToggle tag="button" className="btn btn-primary dropdown-toggle">
                    Pilih Data <i className="mdi mdi-chevron-down" />
                  </DropdownToggle>
                  <DropdownMenu>
                    <DropdownItem>Data Guru</DropdownItem>
                    <DropdownItem>Data Siswa</DropdownItem>
                    <DropdownItem>Data Pegawai</DropdownItem>
                  </DropdownMenu>
                </Dropdown>{" "}

              <p className="card-title-desc"></p>

              <div className="table-responsive">
                <Table className="table mb-0">
                  <caption>List of users</caption>
                  <thead>
                    <tr>
                      <th>NIP</th>
                      <th>Nama Guru</th>
                      <th>Absen Masuk</th>
                      <th>Absen Pulang</th>
                      <th>Waktu Mengajar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                    <tr>
                      <th scope="row">4</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>

      {/* <Row>
        <Col lg={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Responsive table </CardTitle>
              <p className="card-title-desc">
                Create responsive tables by wrapping any <code>.table</code>{" "}
                    in <code>.table-responsive</code>
                    to make them scroll horizontally on small devices (under
                    768px).
                 </p>

              <div className="table-responsive">
                <Table className="table mb-0">
                  <thead>
                    <tr>
                      <th>#</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                      <th>Table heading</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                      <td>Table cell</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row> */}

    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(ReportRecap);
