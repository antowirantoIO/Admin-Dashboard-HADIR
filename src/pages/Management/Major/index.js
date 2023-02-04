import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

import ActionMenu from "./../../../components/Common/ActionMenu"

import "../../../assets/scss/datatables.scss"

const ManagementMajor = (props) => {
  const breadcrumbItems = [
    { title: "HADIR", link: "#" },
    { title: "Management", link: "#" },
    { title: "Program dan Jurusan", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Data Tables', breadcrumbItems)
  })
  

  const data = {
    columns: [
      {
        label: "ID",
        field: "id",
        sort: "asc",
        width: 150,
      },
      {
        label: "Nama Program dan Jurusan",
        field: "name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Tingkat",
        field: "level",
        sort: "asc",
        width: 200,
      },
      {
        label: "Jumlah Siswa",
        field: "student",
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
            id: "KLS225",
            name: "Rekayasa Perangkat Lunak",
            level: "12",
            student: "100",
            action: <ActionMenu />,
          },
    ],
  }

  return (
    <React.Fragment>
      
        <MetaTags>
          <title>Data Program dan Jurusan | HADIR</title>
        </MetaTags>

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Data Program dan Jurusan </CardTitle>

                  <div className="float-md-end">
                    <button type="" className="btn btn-primary w-md">Import</button>
                  </div>

                  <p className="card-title-desc">
                    Disini Kamu Bisa Mengelola Program dan Jurusan yang ada di Instansimu :{" "}
                  </p>

                  <MDBDataTable responsive striped bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(ManagementMajor);