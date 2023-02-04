import React, { Component } from 'react';
import {
    Col,
    Card,
    UncontrolledTooltip
} from "reactstrap";

class CardInstitutions extends Component {
    render() {
        return (
            <React.Fragment>
                <Card className="directory-card">
                    <div>
                        <div className="directory-bg text-center">
                            <div className="directory-overlay">
                                <img className="rounded-circle avatar-lg img-thumbnail" src={this.props.imgUrl} alt="Generic placeholder" />
                            </div>
                        </div>

                        <div className="directory-content text-center p-4">
                            <p className=" mt-4">{this.props.designation}</p>
                            <h5 className="font-size-16">{this.props.name}</h5>

                            <p className="text-muted">{this.props.desc}</p>
                        </div>
                    </div>
                </Card>
            </React.Fragment>
        );
    }
}

export default CardInstitutions;