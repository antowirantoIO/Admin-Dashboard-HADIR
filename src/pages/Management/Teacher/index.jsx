import React,{useEffect } from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle, Button } from "reactstrap"

import { connect } from "react-redux";


import { setBreadcrumbItems } from "../../../store/actions";

import ActionMenu from "../../../components/Common/ActionMenu"

import "../../../assets/scss/datatables.scss"

const ManagementTeacher = (props) => {
  const breadcrumbItems = [
    { title: "HADIR", link: "#" },
    { title: "Management", link: "#" },
    { title: "Data Guru", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Data Tables', breadcrumbItems)

  })
  
  const data = {
    columns: [
      {
        label: "Kode Guru",
        field: "kode",
        sort: "asc",
        width: 150,
      },
      {
        label: "NIP",
        field: "nip",
        sort: "asc",
        width: 270,
      },
      {
        label: "Nama Guru",
        field: "name",
        sort: "asc",
        width: 200,
      },
      {
        label: "Status Absensi",
        field: "status",
        sort: "asc",
        width: 200,
      },
      {
        label: "Waktu Absensi",
        field: "time",
        sort: "asc",
        width: 200,
      },
      {
        label: "Waktu Mengajar",
        field: "teach",
        sort: "asc",
        width: 200,
      },
      {
        label: "Perangkat",
        field: "device",
        sort: "asc",
        width: 200,
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
            kode: "GRU523",
            nip: "20214543",
            name: "Cikgu Jasmin",
            status: "Sudah Absen",
            time: "07:00 WIB",
            teach: "12 Jam",
            device: "Iphone 17 promax",
            action: <ActionMenu />,
          },
          
    ],
  }

  return (
    <React.Fragment>
      
        <MetaTags>
          <title>Data Guru | HADIR</title>
        </MetaTags>

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">Data Guru </CardTitle>  
                  
                  <div className="float-md-end button-items">
                    <Button type="button" color="primary" className="waves-effect waves-light">Tambah Data</Button>{" "}
                    <Button type="button" color="primary" className="waves-effect waves-light">Import Excel</Button>{" "}
                  </div>



                  <p className="card-title-desc">
                    Kelola data bapak/ibu gurunya dengan benar yaa  :{" "}
                  </p>


                  <MDBDataTable responsive striped bordered data={data} />
                </CardBody>
              </Card>
            </Col>
          </Row>
        
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(ManagementTeacher);