import React, { useEffect, useState } from 'react';
import { connect } from "react-redux";

import MetaTags from 'react-meta-tags';

import {
  Card,
  CardBody,
  Col,
  Row,
  CardTitle,
    CardSubtitle,
  FormGroup,

  Form
} from "reactstrap"

const Connection = () => {
    return (
        <React.Fragment>
            <Row>
        <Col lg={12}>
            <CardBody>
                <CardTitle >Atur Koneksi Area Instansi</CardTitle>
                <CardSubtitle className="mb-3">
                    Silahkan atur koneksi area instansi kamu dibawah ini
                </CardSubtitle>
              <Row>
                <Col lg={12}>
                  <div className="mt-2">
                    {/* <h5 className="font-size-14 mb-4"><i className="mdi mdi-arrow-right text-primary me-1"></i> Konfigurasi Koneksi</h5> */}
                    <Form>
                      <div className="mb-3">
                        <label className="form-label" htmlFor="formrow-firstname-input">Nama Koneksi</label>
                        <input type="text" className="form-control" id="formrow-firstname-input" />
                      </div>

                      <Row>
                        <Col md={6}>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="formrow-email-input">IP Address</label>
                            <input type="email" className="form-control" id="formrow-email-input" />
                          </div>
                        </Col>
                        <Col md={6}>
                          <div className="mb-3">
                            <label className="form-label" htmlFor="formrow-password-input">Netmask</label>
                            <input type="password" className="form-control" id="formrow-password-input" />
                          </div>
                        </Col>
                      </Row>
                      <div className="float-md-end mt-2">
                        <button type="submit" className="btn btn-primary w-md">Submit</button>
                      </div>
                    </Form>
                  </div>
                </Col>
                </Row>
            </CardBody>
        </Col>
      </Row>
        </React.Fragment>
           

    );
}

export default connect(null, { })(Connection); 
