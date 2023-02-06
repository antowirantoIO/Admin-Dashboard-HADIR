import React, { useEffect } from "react"
import MetaTags from 'react-meta-tags';

import {
  Card,
  CardTitle,
  CardBody,
  Col,
  Row,
} from "reactstrap"

import { connect } from "react-redux";
import { Link } from "react-router-dom"
import { Tab } from '@headlessui/react'

import { setBreadcrumbItems } from "../../../store/actions";

import Information from "./Partials/Information"
import Location from "./Partials/Location"
import Connection from "./Partials/Connection"

const InstitutionsProfile = (props) => {
  const breadcrumbItems = [
    { title: "HADIR", link: "#" },
    { title: "Instansi", link: "#" },
    { title: "Profile Instansi", link: "#" },
  ]

  useEffect(() => {
    props.setBreadcrumbItems('Form Elements', breadcrumbItems)
  })

  return (
    <React.Fragment>

      <MetaTags>
        <title> Profile Instansi | HADIR</title>
      </MetaTags>
        <Row>
          <Tab.Group>
              <Col md={3}>
                <Card>
                  <CardBody>
                    <CardTitle className="h4">Setting Instansi</CardTitle>
                    {/* <h6 className="card-subtitle font-14 text-muted">Profile Setting</h6> */}
                      <Tab.List className={'nav nav-pills flex-column pt-3'}>
                        <Tab as="li" className={({ selected }) => 
                          `nav-link ${selected ? 'active' : ''}`.trim()
                        }>
                            Profile
                        </Tab>
                        <Tab as="li" className={({ selected }) => 
                          `nav-link mt-2 mb-2 ${selected ? 'active' : ''}`.trim()
                        }>
                            Config Wifi
                        </Tab>
                        <Tab as="li"className={({ selected }) => 
                          `nav-link ${selected ? 'active' : ''}`.trim()
                        }>
                            Setting Location
                      </Tab>
                    </Tab.List>
                  </CardBody>
                </Card>
              </Col>
            
              <Col md={9}>
                <Card>
                  <Tab.Panels>
                    <Tab.Panel>
                      <Information />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Connection />
                    </Tab.Panel>
                    <Tab.Panel>
                      <Location />
                    </Tab.Panel>
                  </Tab.Panels>
                </Card>
              </Col>
          </Tab.Group>
        </Row>
    </React.Fragment>
  )
}

export default connect(null, { setBreadcrumbItems })(InstitutionsProfile);