import React from 'react';

import {
  CardBody,
  CardTitle,
  CardSubtitle,
  Col,
  Row,
  Form
} from "reactstrap"

import Dropzone from "react-dropzone"
import { connect } from "react-redux";

function formatBytes(bytes, decimals = 2) {
    if (bytes === 0) return "0 Bytes"
    const k = 1024
    const dm = decimals < 0 ? 0 : decimals
    const sizes = ["Bytes", "KB", "MB", "GB", "TB", "PB", "EB", "ZB", "YB"]

    const i = Math.floor(Math.log(bytes) / Math.log(k))
    return parseFloat((bytes / Math.pow(k, i)).toFixed(dm)) + " " + sizes[i]
  }

const Information = () => {
    return (
        <CardBody>
            <CardTitle>Atur Profile Instansi</CardTitle>
                <CardSubtitle className="mb-3">
                    Silahkan atur informasi lengkap instansi kamu dibawah ini
                </CardSubtitle>
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

                    <div className="float-md-end mt-4">
                    <button type="submit" className="btn btn-primary w-md">Submit</button>
                    </div>
                </Form>
                </div>
            </Col>
            </Row>
        </CardBody>
    );
}

// export default Information;
export default connect(null, { })(Information);