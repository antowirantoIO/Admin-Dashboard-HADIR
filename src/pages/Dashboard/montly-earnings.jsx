import React from "react"
import { Card, CardBody, Row, Col, CardTitle } from "reactstrap"
import DonutChart from '../AllCharts/DonutChart';

const MonthlyEarnings = props => {
    return (
        <React.Fragment>
            <Card>
                <CardBody>
                    <CardTitle className="h4 mb-4">Chart Pengguna</CardTitle>

                    <Row className="text-center mt-4">
                        <div className="col-6">
                            <h5 className="font-size-20">$56241</h5>
                            <p className="text-muted">Guru</p>
                        </div>
                        <div className="col-6">
                            <h5 className="font-size-20">$23651</h5>
                            <p className="text-muted">Siswa</p>
                        </div>
                    </Row>
                    <div dir="ltr">
                        <DonutChart />
                    </div>

                </CardBody>
            </Card>
        </React.Fragment>
    )

}

export default MonthlyEarnings
