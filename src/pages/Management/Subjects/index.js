import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"

import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

import ActionMenu from "./../../../components/Common/ActionMenu"

import "../../../assets/scss/datatables.scss"

const ManagementSubjects = (props) => {
  const breadcrumbItems = [
    { title: "HADIR", link: "#" },
    { title: "Management", link: "#" },
    { title: "Mata Pelajaran", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Data Tables', breadcrumbItems)
  })
  

  const data = {
    columns: [
      {
        label: "Kode Mapel",
        field: "kode_mapel",
        sort: "asc",
        width: 100,
      },
      {
        label: "Kode Guru",
        field: "kode_guru",
        sort: "asc",
        width: 100,
      },
      {
        label: "Nama Guru",
        field: "name",
        sort: "asc",
        width: 100,
      },
      {
        label: "Mata Pelajaran",
        field: "mapel",
        sort: "asc",
        width: 100,
      },
      {
        label: "Kelas dan Jurusan",
        field: "class",
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
            kode_mapel: "MP001",
            kode_guru: "G001",
            name: "Devi Rodiana S.T",
            mapel: "Pemrograman Berorientasi Objek",
            class: "XII RPL ",
            action: <ActionMenu />,
          },
    ],
  }

  return (
    <React.Fragment>
      
        <MetaTags>
          <title>Data Mata Pelajaran | HADIR</title>
        </MetaTags>

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>  
                  <CardTitle className="h4">Data Mata Pelajaran </CardTitle>

                  <div className="float-md-end">
                    <button type="" className="btn btn-primary w-md">Import</button>
                  </div>

                  <p className="card-title-desc">
                    Data Mata Pejaran Jangan Sampai Salah Yaaa!! :{" "}
                  </p>

                  <MDBDataTable responsive striped bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(ManagementSubjects);