import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

import ActionMenu from "./../../../components/Common/ActionMenu"

import "../../../assets/scss/datatables.scss"

const ManagementEmploye = (props) => {
  const breadcrumbItems = [
    { title: "HADIR", link: "#" },
    { title: "Management", link: "#" },
    { title: "Data Pegawai", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Data Tables', breadcrumbItems)
  })
  

  const data = {
    columns: [
      {
        label: "ID Pegawai",
        field: "id",
        sort: "asc",
        width: 100,
      },
      {
        label: "Nama Pegawai",
        field: "nama",
        sort: "asc",
        width: 100,
      },
      {
        label: "Tugas Pegawai",
        field: "role",
        sort: "asc",
        width: 100,
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
        label: "Aksi",
        field: "action",
        sort: "asc",
        width: 100,
      }
    ],
    rows: [
        {
            id: "1",
            nama: "Usman",
            role: "Satpam",
            status: "Belum Absen",
            time: "06:00 WIB",
            action: <ActionMenu />,
        },
    ],
  }

  return (
    <React.Fragment>
      
        <MetaTags>
          <title>Data Pegawai | HADIR</title>
        </MetaTags>

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Data Pegawai </CardTitle>

                  <div className="float-md-end">
                    <button type="" className="btn btn-primary w-md">Import</button>
                  </div>

                  <p className="card-title-desc">
                    Disini Kamu Bisa Mengelola Data Pegawai yang ada di Instansimu :{" "}
                  </p>

                  <MDBDataTable responsive striped bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(ManagementEmploye);