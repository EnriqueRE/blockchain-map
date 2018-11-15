import React, { Component } from 'react';
import './Timeline.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faTruck,
	faExclamationTriangle,
	faFileAlt
} from '@fortawesome/free-solid-svg-icons';
export class Timeline extends Component {
  render() {
    return (
      <ul className="timeline">
        <li>
          <div className="shipment-container">
            <p className="shipment-status">Shipment Delivered</p>
            <p className="shipment-date">{this.getDate()}</p>
            <p className="shipment-details">
              Shipment 35191 delivered. Serial#AS475-31001
            </p>
            <p className="shipment-carrier">Gamma Carrier</p>
          </div>
        </li>
        <li>
          <div className="shipment-container container-warning">
            <p className="shipment-status">Shipment Delivered</p>
            <p className="shipment-date">{this.getDate()}</p>
            <p className="shipment-details">Temperature out of range.</p>
            <p className="shipment-carrier">Gamma Carrier</p>
            <div className="transaction-warning">
              <h3>
                38.2°F <FontAwesomeIcon icon={faTruck} />
              </h3>
              <strong>
                <FontAwesomeIcon icon={faExclamationTriangle} /> Transaction
                Warning
              </strong>
            </div>
          </div>
        </li>
				<li>
          <div className="shipment-container">
            <p className="shipment-status">Shipment Departed <FontAwesomeIcon icon={faFileAlt} className="status-icon"/></p>
            <p className="shipment-date">{this.getDate()}</p>
            <p className="shipment-details">
              Shipment 35191 delivered. Serial#AS475-31001
            </p>
            <p className="shipment-carrier">Gamma Carrier</p>
          </div>
        </li>
				<li className="disabled">
          <div className="shipment-container">
            <p className="shipment-status">Shipment Delivered</p>
            <p className="shipment-date">{this.getDate()}</p>
            <p className="shipment-details">
              Shipment 35191 delivered. Serial#AS475-31001
            </p>
            <p className="shipment-carrier">Gamma Carrier</p>
          </div>
        </li>
      </ul>
    );
  }
  getDate() {
    var options = {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    let today = new Date();
    return today.toLocaleDateString('en-US', options);
  }
}
