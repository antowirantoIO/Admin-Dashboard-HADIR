import React,{useEffect} from "react"
import MetaTags from 'react-meta-tags';
import { MDBDataTable } from "mdbreact"
import { Row, Col, Card, CardBody, CardTitle } from "reactstrap"
import { connect } from "react-redux";

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

import ActionMenu from "./../../../components/Common/ActionMenu"

import "../../../assets/scss/datatables.scss"

const InstitutionsList = (props) => {
  const breadcrumbItems = [
    { title: "HADIR", link: "#" },
    { title: "Instansi", link: "#" },
    { title: "Kelola Instansi", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Management Data Instansi', breadcrumbItems)
  })
  

  const data = {
    columns: [
      {
        label: "NPSN",
        field: "code",
        sort: "asc",
        width: 120,
      },
      {
        label: "Nama Sekolah",
        field: "name",
        sort: "asc",
        width: 270,
      },
      {
        label: "Tingkat Pendidikan",
        field: "edu_level",
        sort: "asc",
        width: 100,
      },
      {
        label: "Kepala Sekolah",
        field: "leader_name",
        sort: "asc",
        width: 150,
      },
      {
        label: "Alamat",
        field: "address",
        sort: "asc",
        width: 200,
      },
      {
        label: "Provinsi",
        field: "province_id",
        sort: "asc",
        width: 100,
      },
      {
        label: "Kota",
        field: "city_id",
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
          code: "20211510",
          name: "SMK Negeri 1 Ciamis",
          edu_level: "SMA/SMK/MA",
          leader_name: "DRA. Nunung Erni Nuraeni, M.M.Pd",
          address: "Jl. Jend. Sudirman Lingk. Cibeureum No.269, RT.01/RW.09",
          province_id: "Jawa Barat",
          city_id: "Ciamis",
          action: <ActionMenu />,
        },
        {
          code: "20211512",
          name: "SMK Negeri 2 Ciamis",
          address: "Jl. Jend. Sudirman Lingk. Cibeureum No.269, RT.01/RW.09",
          edu_level: "SMA/SMK/MA",
          leader_name: "Bapak/Ibu Kepala Sekolah",
          province_id: "Jawa Barat",
          city_id: "Ciamis",
          action: <ActionMenu />,
        },
    ],
  }

  return (
    <React.Fragment>
      
        <MetaTags>
          <title>Kelola Instansi | HADIR</title>
        </MetaTags>

          <Row>
            <Col className="col-12">
              <Card>
                <CardBody>
                  <CardTitle className="h4">💼 • Kelola Data Instansi </CardTitle>
                  <p className="card-title-desc">
                    Kelola Data Instansi mu dengan benar okey {" "}
                  </p>

                  <MDBDataTable responsive striped bordered data={data}  />
                </CardBody>
              </Card>
            </Col>
          </Row>
        
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(InstitutionsList);