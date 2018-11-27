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
    let timelineEntries = [
      {
        title: 'Shipment Delivered',
        date: this.getDate(1),
        message: 'Shipment 35191 delivered. Serial#AS475-31001',
        transport: 'Gamma Carrier',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Shipment Condition Exception',
        date: this.getDate(2),
        message: 'Temperature out of range.',
        transport: 'Gamma Carrier',
        type: 'alert',
        invoice: false,
        warning: true,
        warningContent: {
          temp: '38.2°F',
          text: 'TRANSACTION WARNING'
        }
      },
      {
        title: 'Shipment Departed',
        date: this.getDate(2),
        message: 'Shipment 35191 departed. Serial #AS475-31001.',
        transport: 'Gamma Carrier',
        type: 'regular',
        invoice: true,
        invoiceFile: '/documents/Shipment35191.pdf',
        warning: false,
        warningContent: {}
      },
      {
        title: 'Invoice generated',
        date: this.getDate(2),
        message: 'Invoice 91388 sent to customer.',
        transport: 'Batery Producer',
        type: 'regular',
        invoice: true,
        warning: false,
        invoiceFile: '/documents/Invoice91388_SO90342.pdf',
        warningContent: {}
      },
      {
        title: 'Shipping Notice',
        date: this.getDate(2),
        message: 'Shipment 35191 ready. Serial #AS475-31001.',
        transport: 'Vision',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Production Complete',
        date: this.getDate(2),
        message: 'Serial #AS475-31001 produced.',
        transport: 'Vision',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Material Issue',
        date: this.getDate(2),
        message: 'Lot #LOT-20001 issued to work order.',
        transport: 'Vision',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Work Order Generated',
        date: this.getDate(2),
        message: 'Production assemble to order.',
        transport: 'Vision',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Sales Order',
        date: this.getDate(2),
        message: 'Sales Order 90342 created.',
        transport: 'Vision',
        type: 'regular',
        invoice: true,
        invoiceFile:'/documents/SalesOrder90342.pdf',
        warning: false,
        warningContent: {}
      },
      {
        title: 'Purchase Order',
        date: this.getDate(3),
        message: 'Purchase Order 163520 created.',
        transport: 'Computer Services and Rentals',
        type: 'regular',
        invoice: true,
        invoiceFile:'/documents/PurchaseOrder163520.pdf',
        warning: false,
        warningContent: {}
      },
      {
        title: 'Material Receipt to inventory',
        date: this.getDate(3),
        message: 'Purchase Order 163520 received. Lot #LOT-20001.',
        transport: 'Vision',
        type: 'regular',
        invoice: true,
        invoiceFile:'/documents/PurchaseOrder163520.pdf',
        warning: false,
        warningContent: {}
      },
      {
        title: 'Shipment Delivered',
        date: this.getDate(3),
        message: 'Shipment 35191 delivered. Lot #LOT-20001 .',
        transport: 'Gamma Carrier',
        type: 'regular',
        invoice: true,
        invoiceFile:'/documents/Shipment35191.pdf',
        warning: false,
        warningContent: {}
      },
      {
        title: 'Shipment Condition Exception',
        date: this.getDate(3),
        message: 'Temperature out of range.',
        transport: 'Gamma Carrier',
        type: 'alert',
        invoice: false,
        warning: true,
        warningContent: {
          temp: '38.2°F',
          text: 'TRANSACTION WARNING'
        }
      },
      {
        title: 'Shipment Departed',
        date: this.getDate(3),
        message: 'Shipment 9100 departed. Lot #LOT-20001.',
        transport: 'Gamma Carrier',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Invoice Generated',
        date: this.getDate(3),
        message: 'Invoice 6654 sent to customer.',
        transport: 'Battery Producer',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Shipping Notice',
        date: this.getDate(3),
        message: 'Shipment 9100 ready. Lot #LOT-20001.',
        transport: 'Battery Producer',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Sales Order',
        date: this.getDate(4),
        message: 'Sales Order 27234 created.',
        transport: 'Battery Producer',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Purchase Order',
        date: this.getDate(4),
        message: 'Lot #LOT-20001 produced.',
        transport: 'Battery Producer',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Production Complete',
        date: this.getDate(6),
        message: 'Lot #LOT-20001 produced.',
        transport: 'Battery Producer',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Material Issue',
        date: this.getDate(6),
        message: 'Lot #84123 issued to work order.',
        transport: 'Battery Producer',
        type: 'regular',
        invoice: false,
        warning: false,
        warningContent: {}
      },
      {
        title: 'Inventory Condition Exception',
        date: this.getDate(7),
        message: 'Temperature out of range. Lot #84123.',
        transport: 'Battery Producer',
        type: 'alert',
        invoice: false,
        warning: true,
        warningContent: {
          temp: '34.37°F',
          text: 'TRANSACTION WARNING'
        }},
        {
          title: 'Material Receipt to Inventory',
          date: this.getDate(8),
          message: 'Purchase Order 87654 received. Lot #84123.',
          transport: 'Battery Producer',
          type: 'regular',
          invoice: false,
          warning: false,
          warningContent: {}
        },{
          title: 'Material Receipt to Inventory',
          date: this.getDate(8),
          message: 'Purchase Order 87654 received. Lot #84123.',
          transport: 'Battery Producer',
          type: 'regular',
          invoice: false,
          warning: false,
          warningContent: {}
        },
        {
          title: 'Shipment Condition Exception',
          date: this.getDate(7),
          message: 'Temperature out of range.',
          transport: 'Gamma Carrier',
          type: 'alert',
          invoice: false,
          warning: true,
          warningContent: {
            temp: '38.2°F',
            text: 'TRANSACTION WARNING'
          }},
          {
            title: 'Shipment Departed',
            date: this.getDate(8),
            message: 'Shipment 888 departed. Lot #84123',
            transport: 'Gamma Carrier',
            type: 'regular',
            invoice: false,
            warning: false,
            warningContent: {}
          },
          {
            title: 'Shipping Notice',
            date: this.getDate(8),
            message: 'Shipment 888 ready. Lot #123',
            transport: 'Alpha Chemicals',
            type: 'regular',
            invoice: false,
            warning: false,
            warningContent: {}
          },
          {
            title: 'Sales Order',
            date: this.getDate(9),
            message: 'Sales Order 27234 created.',
            transport: 'Alpha Chemicals',
            type: 'regular',
            invoice: false,
            warning: false,
            warningContent: {}
          },
          {
            title: 'Purchase Order',
            date: this.getDate(9),
            message: 'Purchase Order 87654 sent.',
            transport: 'Battery Producer',
            type: 'regular',
            invoice: false,
            warning: false,
            warningContent: {}
          }

    ];

    let transactionsHtml = timelineEntries.map((entry, index) => {
      return this.renderTransaction(entry, index);
    });
    return (<ul className="timeline">{transactionsHtml}</ul>);
  }
  getDate(delay) {
    var options = {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric'
    };
    let today = new Date();
    today.setDate(today.getDate() - delay);
    return today.toLocaleDateString('en-US', options);
  }

  renderTransaction(entry, index) {
    let html = <li />;
    if (entry.warning) {
      html = (
        <li key={index}>
          <div className="shipment-container container-warning">
            <p className="shipment-status">{entry.title}</p>
            <p className="shipment-date">{entry.date}</p>
            <p className="shipment-details">{entry.message}</p>
            <p className="shipment-carrier">{entry.transport}</p>
            <div className="transaction-warning">
              <h3>
                {entry.warningContent.temp} <FontAwesomeIcon icon={faTruck} />
              </h3>
              <strong>
                <FontAwesomeIcon icon={faExclamationTriangle} />{' '}
                {entry.warningContent.text}
              </strong>
            </div>
          </div>
        </li>
      );
    } else {
      html = (
        <li key={index}>
          <div className="shipment-container">
            {(() => {
              if(entry.invoice){
                return <p className="shipment-status">{entry.title} <a onClick={(e)=>window.open(entry.invoiceFile, "_blank")}><FontAwesomeIcon icon={faFileAlt} className="status-icon"/></a></p>
              }else{
                return <p className="shipment-status">{entry.title}</p>
              }
            })()}            
            <p className="shipment-date">{entry.date}</p>
            <p className="shipment-details">{entry.message}</p>
            <p className="shipment-carrier">{entry.transport}</p>
          </div>
        </li>
      );
    }

    return html;
  }
  renderWarning(entry) {
    var warning = (
      <div className="transaction-warning">
        <h3>
          38.2°F <FontAwesomeIcon icon={faTruck} />
        </h3>
        <strong>
          <FontAwesomeIcon icon={faExclamationTriangle} /> Transaction Warning
        </strong>
      </div>
    );
    return warning;
  }
}
