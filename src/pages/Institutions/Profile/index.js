import React, { useEffect, useState } from "react"
import MetaTags from 'react-meta-tags';

import {
  Card,
  CardBody,
  Col,
  Row,
  Form
} from "reactstrap"

import { connect } from "react-redux";
import Dropzone from "react-dropzone"
import CardInstitutions from "../../../components/Common/CardInstitutions"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"

//Import Action to copy breadcrumb items from local state to redux state
import { setBreadcrumbItems } from "../../../store/actions";

const FormElements = (props) => {
  const breadcrumbItems = [
    { title: "HADIR", link: "#" },
    { title: "Instansi", link: "#" },
    { title: "Profile Instansi", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Form Elements', breadcrumbItems)
  })

  const [toggleSwitch, settoggleSwitch] = useState(true)
  const [toggleSwitchSize, settoggleSwitchSize] = useState(true)
  const [selectedFiles, setselectedFiles] = useState([])

  function handleAcceptedFiles(files) {
    files.map(file =>
      Object.assign(file, {
        preview: URL.createObjectURL(file),
        formattedSize: formatBytes(file.size),
      })
    )
    setselectedFiles(files)
  }

  /**
   * Formats the size
   */
  function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

  return (
    <React.Fragment>

      <MetaTags>
        <title> Profile Instansi | HADIR</title>
      </MetaTags>
        <Row>
          <Col md={8}>
            <Card>
              <CardBody>
                  <Col lg={12} className="ms-lg-auto">
                    <div className="mt-5 mt-lg-4">
                      <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i>Profile Instansi</h5>
                      <form>
                        <div className="row mb-3">
                          <label htmlFor="horizontal-firstname-input" className="col-sm-3 col-form-label">NPSN</label>
                          <div className="col-sm-9">
                            <input type="text" className="form-control" id="horizontal-firstname-input" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="horizontal-email-input" className="col-sm-3 col-form-label">Nama Sekolah</label>
                          <div className="col-sm-9">
                            <input type="email" className="form-control" id="horizontal-email-input" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Tingkat Pendidikan</label>
                          <div className="col-sm-9">
                            <input type="password" className="form-control" id="horizontal-password-input" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Kepala Sekolah</label>
                          <div className="col-sm-9">
                            <input type="password" className="form-control" id="horizontal-password-input" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">Email</label>
                          <div className="col-sm-9">
                            <input type="password" className="form-control" id="horizontal-password-input" />
                          </div>
                        </div>
                        <div className="row mb-3">
                          <label htmlFor="horizontal-password-input" className="col-sm-3 col-form-label">No Telepon</label>
                          <div className="col-sm-9">
                            <input type="password" className="form-control" id="horizontal-password-input" />
                          </div>
                        </div>
                      </form>
                    </div>
                  </Col> 
                  <Row>
                    <Col lg={12}>
                      <div className="mt-4">
                        <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Alamat Instansi</h5>
                        <Form>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="formrow-firstname-input">Alamat</label>
                            <input type="text" className="form-control" id="formrow-firstname-input" />
                          </div>
                          <Row>
                            <Col md={4}>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="formrow-email-input">Kota</label>
                                <input type="email" className="form-control" id="formrow-email-input" />
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="formrow-password-input">Provinsi</label>
                                <input type="password" className="form-control" id="formrow-password-input" />
                              </div>
                            </Col>
                            <Col md={4}>
                              <div className="mb-3">
                                <label className="form-label" htmlFor="formrow-password-input">Kode Pos</label>
                                <input type="password" className="form-control" id="formrow-password-input" />
                              </div>
                            </Col>
                            <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i>Foto Instansi</h5>
                            <Dropzone
                              onDrop={acceptedFiles => {
                                handleAcceptedFiles(acceptedFiles)
                              }}
                            >
                              {({ getRootProps, getInputProps }) => (
                                <div className="dropzone dz-clickable">
                                  <div
                                    className="dz-message needsclick"
                                    {...getRootProps()}
                                  >
                                    
                                    <input {...getInputProps()} />
                                    <div className="mb-3">
                                      <i className="mdi mdi-cloud-upload-outline text-muted display-4"></i>
                                    </div>
                                    <h4>Jatuhkan file di sini atau klik untuk mengunggah.</h4>
                                  </div>
                                </div>
                              )}
                            </Dropzone>
                          </Row>

                          <div className="mt-4">
                            <button type="submit" className="btn btn-primary w-md">Submit</button>
                          </div>
                        </Form>
                      </div>
                    </Col>
                  </Row>
              </CardBody>
            </Card>
          </Col>
          <Col md={4}>
              <CardInstitutions imgUrl="http://themesbrand.com/lexa/layouts/assets/images/users/user-2.jpg" designation="Sekolah Menengah Kejuruan" name="SMKN 1 CIAMIS" desc="Sekolah Menengah Kejuruan Bidang Keahlian Bisnis-Manajemen, Pariwisata dan Teknologi Informasi dan Komunikasi, Melaksanakan pembelajaran berbasis Teknologi Informasi dan Komunikasi, Memenuhi fasilitas praktik dan bahan ajar sesuai dengan standar yang ditetapkan." />
          </Col>
        </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(FormElements);