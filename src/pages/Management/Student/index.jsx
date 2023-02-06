import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap"

import { connect } from "react-redux";


import { setBreadcrumbItems } from "../../../store/actions";

import ActionMenu from "../../../components/Common/ActionMenu"

import "../../../assets/scss/datatables.scss"

const ManagementStudent = (props) => {
  const breadcrumbItems = [
    { title: "HADIR", link: "#" },
    { title: "Management", link: "#" },
    { title: "Data Siswa", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Data Tables', breadcrumbItems)
  })
  

  const data = {
    columns: [
      {
        label: "NIS",
        field: "nis",
        sort: "asc",
        width: 150,
      },
      {
        label: "NISN",
        field: "nisn",
        sort: "asc",
        width: 270,
      },
      {
        label: "Nama Siswa",
        field: "name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Kelas dan Jurusan",
        field: "class",
        sort: "asc",
        width: 150,
      },
      {
        label: "Status Absen",
        field: "status",
        sort: "asc",
        width: 100,
      },
      {
        label: "Waktu Absen",
        field: "time",
        sort: "asc",
        width: 100,
      },
      {
        label: "Perangkat",
        field: "device",
        sort: "asc",
        width: 100,
      },
      {
        label: "Aksi",
        field: "action",
        sort: "asc",
        width: 100,
      }
    ],
    rows: [
      {
        nis: "202110556",
        nisn: "005322615",
        name: "Kim Lanisa",
        class: "12 Rekayasa Perangkat Lunak",
        status: "Belum Absen",
        time: "09:00 WIB",
        device: "Samsung",
        action: <ActionMenu />,
      },
    ],
  }

  return (
    <React.Fragment>
      
        <MetaTags>
          <title>Data Siswa | HADIR</title>
        </MetaTags>

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Data Siswa </CardTitle>

                  <div className="float-md-end button-items">
                    <Button type="button" color="primary" className="waves-effect waves-light">Import Excel</Button>{" "}
                  </div>

                  <p className="card-title-desc">
                    Kelola juga data siswanya dengan benar yaa :{" "}
                  </p>

                  <MDBDataTable responsive striped bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(ManagementStudent);