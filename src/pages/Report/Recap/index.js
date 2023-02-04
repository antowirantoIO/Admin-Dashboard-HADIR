import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';

import {
  Table,
  Row,
  Col,
  Card,
  CardBody,
  CardTitle,
  Dropdown,
} from "reactstrap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

const BasicTable = (props) => {
  const breadcrumbItems = [
    { title : "HADIR", link : "#" },
    { title : "Laporan", link : "#" },
    { title : "Rekap Absensi", link : "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Data Tables', breadcrumbItems)
  })
  return (
    <React.Fragment>

      <MetaTags>
        <title>Rekap Absensi | HADIR</title>
      </MetaTags>
     
      <Row>
        <Col xl={12}>
          <Card>
            <CardBody>
              <CardTitle className="h4">Rekap Absensi </CardTitle>

              <div className="float-md-end">
              <button type="" className="btn btn-primary w-md">Export</button>
              </div>

              <p className="card-title-desc">
                Rekap Absensinya nanti bakal ditampilin disini
                 </p>

              <div className="table-responsive">
                <Table className="table table-hover mb-0">
                  <thead>
                    <tr>
                      <th>NIP</th>
                      <th>Nama Guru</th>
                      <th>Status Absen</th>
                      <th>Waktu Absen</th>
                      <th>Waktu Mengajar</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row">1</th>
                      <td>Mark</td>
                      <td>Otto</td>
                      <td>@mdo</td>
                      <td>12 jam</td>
                    </tr>
                    <tr>
                      <th scope="row">2</th>
                      <td>Jacob</td>
                      <td>Thornton</td>
                      <td>@fat</td>
                      <td>12 jam</td>
                    </tr>
                    <tr>
                      <th scope="row">3</th>
                      <td>Larry</td>
                      <td>the Bird</td>
                      <td>@twitter</td>
                      <td>12 jam</td>
                    </tr>
                  </tbody>
                </Table>
              </div>
            </CardBody>
          </Card>
        </Col>
    </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(BasicTable);
