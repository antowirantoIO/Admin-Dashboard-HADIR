import PropTypes from 'prop-types'
import React ,{useEffect, useState} from "react"
import { Map, InfoWindow, Marker, GoogleApiWrapper } from "google-maps-react"
import { connect } from "react-redux"
import LightData from "./LightData"
import { Row, Col, Card, CardBody, CardTitle, CardSubtitle } from "reactstrap"


import { setBreadcrumbItems } from "../../../../store/actions";

const LoadingContainer = () => <div>Loading...</div>

const Location = props => {

  const [location, setLocation] = useState({
        lat: -7.32299161376136,
        lng:  108.32701754087306,
  })

  const selectedPlace = {}

  // create dragable marker
  const onMarkerDragEnd = (coord, index) => {
    const { latLng } = coord
    const lat = latLng.lat()
    const lng = latLng.lng()
    setLocation({ lat, lng })
  }

  return (
    <React.Fragment>
      <Card>
        <CardBody>
          <CardTitle >Atur Latitude & Longitude Area Instansi</CardTitle>
          <CardSubtitle className="mb-3">
            Silahkan pilih lokasi area instansi dengan cara klik pada peta
            dibawah ini
          </CardSubtitle>
          <Row>
            <Col md={6}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="inputLatitude">Latidude</label>
                  <input type="text" value={location.lat} className="form-control" id="inputLatitude" />
                </div>
            </Col>
            <Col md={6}>
                <div className="mb-3">
                  <label className="form-label" htmlFor="inputLongtitude">Longtitude</label>
                  <input type="text" value={location.lng} className="form-control" id="inputLongtitude" />
                </div>
            </Col>
          </Row>
          <div
            id="gmaps-markers"
            className="gmaps"
            style={{ position: "relative" }}
          >
            <Map
              google={props.google}
              style={{ width: "100%", height: "100%" }}
              zoom={16}
              initialCenter={{ lat: location.lat, lng: location.lng }}
            >
              <Marker
                draggable={true}
                onDragend={(t, map, coord) => onMarkerDragEnd(coord)}
                position={{ lat: location.lat, lng: location.lng }}
              />
              <InfoWindow>
                <div>
                  <h1>{selectedPlace.name}</h1>
                </div>
              </InfoWindow>
            </Map>
          </div>
        </CardBody>
      </Card>
    </React.Fragment>
  )
}

Location.propTypes = {
  google: PropTypes.object
}

export default connect(
  null,
  { }
)(
  GoogleApiWrapper({
    apiKey: "AIzaSyAiWlZhewddMv8EhGF9-5rv6VxWhwVPItQ",
    LoadingContainer: LoadingContainer,
    v: "3",
  })(Location)
)
