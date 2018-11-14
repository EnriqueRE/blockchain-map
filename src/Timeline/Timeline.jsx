import React, {Component} from 'react';
import './Timeline.css';
export class Timeline extends Component{
  render(){
    return(
      <ul className="timeline">
      <li>
				<div className="shipment-container">
					<p className="shipment-status">Shipment Delivered</p>
					<p className="shipment-date">{this.getDate()}</p>
					<p className="shipment-details">Shipment 35191 delivered. Serial#AS475-31001</p>
					<p className="shipment-carrier">Gamma Carrier</p>
				</div>
				</li>
				<li>
				<div className="shipment-container">
					<p className="shipment-status">Shipment Delivered</p>
					<p className="shipment-date">{this.getDate()}</p>
					<p className="shipment-details">Shipment 35191 delivered. Serial#AS475-31001</p>
					<p className="shipment-carrier">Gamma Carrier</p>
				</div>
				</li>
				<li>
				<div className="shipment-container">
					<p className="shipment-status">Shipment Delivered</p>
					<p className="shipment-date">{this.getDate()}</p>
					<p className="shipment-details">Shipment 35191 delivered. Serial#AS475-31001</p>
					<p className="shipment-carrier">Gamma Carrier</p>
				</div>
				</li>
				<li>
				<div className="shipment-container">
					<p className="shipment-status">Shipment Delivered</p>
					<p className="shipment-date">{this.getDate()}</p>
					<p className="shipment-details">Shipment 35191 delivered. Serial#AS475-31001</p>
					<p className="shipment-carrier">Gamma Carrier</p>
				</div>
				</li>
      </ul>
    );
  }
 getDate(){
	var options = { weekday: 'short', year: 'numeric', month: 'long', day: 'numeric',  hour:'numeric', minute:'numeric'};
	let today = new Date();
	return today.toLocaleDateString("en-US", options);
 }
}