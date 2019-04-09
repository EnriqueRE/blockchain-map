(window.webpackJsonp = window.webpackJsonp || []).push([
  [0], {
    12: function (e, t, a) {
      e.exports = a.p + "/static/media/map.2a8fbcad.png"
    },
    13: function (e, t, a) {
      e.exports = a(31)
    },
    20: function (e, t, a) {},
    22: function (e, t, a) {},
    24: function (e, t, a) {},
    26: function (e, t, a) {},
    31: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(0),
        r = a.n(n),
        i = a(11),
        o = a.n(i),
        s = (a(18), a(20), a(2)),
        c = a(3),
        l = a(5),
        m = a(4),
        g = a(6),
        p = (a(22), a(24), function (e) {
          function t() {
            return Object(s.a)(this, t), Object(l.a)(this, Object(m.a)(t).apply(this, arguments))
          }
          return Object(g.a)(t, e), Object(c.a)(t, [{
            key: "render",
            value: function () {
              return r.a.createElement("div", {
                className: "col-md-8 offset-md-4 time-header"
              }, r.a.createElement("strong", null, "Today is: ", this.getDate()))
            }
          }, {
            key: "getDate",
            value: function () {
              return (new Date).toLocaleDateString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric"
              })
            }
          }]), t
        }(n.Component)),
        d = a(12),
        u = a.n(d),
        h = function (e) {
          function t() {
            return Object(s.a)(this, t), Object(l.a)(this, Object(m.a)(t).apply(this, arguments))
          }
          return Object(g.a)(t, e), Object(c.a)(t, [{
            key: "render",
            value: function () {
              return r.a.createElement("div", {
                className: "col"
              }, r.a.createElement("img", {
                src: u.a,
                alt: "map",
                height: "550x",
                width: "auto"
              }))
            }
          }]), t
        }(n.Component),
        w = (a(26), a(7)),
        v = a(8),
        y = function (e) {
          function t() {
            return Object(s.a)(this, t), Object(l.a)(this, Object(m.a)(t).apply(this, arguments))
          }
          return Object(g.a)(t, e), Object(c.a)(t, [{
            key: "render",
            value: function () {
              var e = this,
                t = [{
                  title: "Shipment Delivered",
                  date: this.getDate(1),
                  message: "Shipment 35191 delivered. Serial#AS475-31001",
                  transport: "Gamma Carrier",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Shipment Condition Exception",
                  date: this.getDate(2),
                  message: "Temperature out of range.",
                  transport: "Gamma Carrier",
                  type: "alert",
                  invoice: !1,
                  warning: !0,
                  warningContent: {
                    temp: "38.2\xb0F",
                    text: "TRANSACTION WARNING"
                  }
                }, {
                  title: "Shipment Departed",
                  date: this.getDate(2),
                  message: "Shipment 35191 departed. Serial #AS475-31001.",
                  transport: "Gamma Carrier",
                  type: "regular",
                  invoice: !0,
                  invoiceFile: "/block-chain/documents/Shipment35191.pdf",
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Invoice generated",
                  date: this.getDate(2),
                  message: "Invoice 91388 sent to customer.",
                  transport: "Batery Producer",
                  type: "regular",
                  invoice: !0,
                  warning: !1,
                  invoiceFile: "/block-chain/documents/Invoice91388_SO90342.pdf",
                  warningContent: {}
                }, {
                  title: "Shipping Notice",
                  date: this.getDate(2),
                  message: "Shipment 35191 ready. Serial #AS475-31001.",
                  transport: "Vision",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Production Complete",
                  date: this.getDate(2),
                  message: "Serial #AS475-31001 produced.",
                  transport: "Vision",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Material Issue",
                  date: this.getDate(2),
                  message: "Lot #LOT-20001 issued to work order.",
                  transport: "Vision",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Work Order Generated",
                  date: this.getDate(2),
                  message: "WO-002-1038 Production assemble to order",
                  transport: "Vision",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Sales Order",
                  date: this.getDate(2),
                  message: "Sales Order 90342 created.",
                  transport: "Vision",
                  type: "regular",
                  invoice: !0,
                  invoiceFile: "/block-chain/documents/SalesOrder90342.pdf",
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Purchase Order",
                  date: this.getDate(3),
                  message: "Purchase Order 163520 created.",
                  transport: "Computer Services and Rentals",
                  type: "regular",
                  invoice: !0,
                  invoiceFile: "/block-chain/documents/PurchaseOrder163520.pdf",
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Material Receipt to inventory",
                  date: this.getDate(3),
                  message: "Purchase Order 163520 received. Lot #LOT-20001.",
                  transport: "Vision",
                  type: "regular",
                  invoice: !0,
                  invoiceFile: "/block-chain/documents/PurchaseOrder163520.pdf",
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Shipment Delivered",
                  date: this.getDate(3),
                  message: "Shipment 35191 delivered. Lot #LOT-20001 .",
                  transport: "Gamma Carrier",
                  type: "regular",
                  invoice: !0,
                  invoiceFile: "/block-chain/documents/Shipment35191.pdf",
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Shipment Condition Exception",
                  date: this.getDate(3),
                  message: "Temperature out of range.",
                  transport: "Gamma Carrier",
                  type: "alert",
                  invoice: !1,
                  warning: !0,
                  warningContent: {
                    temp: "38.2\xb0F",
                    text: "TRANSACTION WARNING"
                  }
                }, {
                  title: "Shipment Departed",
                  date: this.getDate(3),
                  message: "Shipment 9100 departed. Lot #LOT-20001.",
                  transport: "Gamma Carrier",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Invoice Generated",
                  date: this.getDate(3),
                  message: "Invoice 6654 sent to customer.",
                  transport: "Battery Producer",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Shipping Notice",
                  date: this.getDate(3),
                  message: "Shipment 9100 ready. Lot #LOT-20001.",
                  transport: "Battery Producer",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Sales Order",
                  date: this.getDate(4),
                  message: "Sales Order 27234 created.",
                  transport: "Battery Producer",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Purchase Order",
                  date: this.getDate(4),
                  message: "Lot #LOT-20001 produced.",
                  transport: "Battery Producer",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Production Complete",
                  date: this.getDate(6),
                  message: "Lot #LOT-20001 produced.",
                  transport: "Battery Producer",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Material Issue",
                  date: this.getDate(6),
                  message: "Lot #LOT-20001 issued to work order.",
                  transport: "Battery Producer",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Inventory Condition Exception",
                  date: this.getDate(7),
                  message: "Temperature out of range. Lot #LOT-20001.",
                  transport: "Battery Producer",
                  type: "alert",
                  invoice: !1,
                  warning: !0,
                  warningContent: {
                    temp: "34.37\xb0F",
                    text: "TRANSACTION WARNING"
                  }
                }, {
                  title: "Material Receipt to Inventory",
                  date: this.getDate(8),
                  message: "Purchase Order 87654 received. Lot #LOT-20001.",
                  transport: "Battery Producer",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Shipment Delivered",
                  date: this.getDate(8),
                  message: "Shipment 888 delivered. Lot #LOT-20001.",
                  transport: "Battery Producer",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Shipment Condition Exception",
                  date: this.getDate(7),
                  message: "Temperature out of range.",
                  transport: "Gamma Carrier",
                  type: "alert",
                  invoice: !1,
                  warning: !0,
                  warningContent: {
                    temp: "38.2\xb0F",
                    text: "TRANSACTION WARNING"
                  }
                }, {
                  title: "Shipment Departed",
                  date: this.getDate(8),
                    message: "Shipment 888 departed. Lot#84123",
                  transport: "Gamma Carrier",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Shipping Notice",
                  date: this.getDate(8),
                  message: "Shipment 888 ready. Lot Lot#84123",
                  transport: "Alpha Chemicals",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Sales Order",
                  date: this.getDate(9),
                  message: "Sales Order 27234 created.",
                  transport: "Alpha Chemicals",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }, {
                  title: "Purchase Order",
                  date: this.getDate(9),
                  message: "Purchase Order 87654 sent.",
                  transport: "Battery Producer",
                  type: "regular",
                  invoice: !1,
                  warning: !1,
                  warningContent: {}
                }].map(function (t, a) {
                  return e.renderTransaction(t, a)
                });
              return r.a.createElement("ul", {
                className: "timeline"
              }, t)
            }
          }, {
            key: "getDate",
            value: function (e) {
              var t = new Date;
              return t.setDate(t.getDate() - e), t.toLocaleDateString("en-US", {
                weekday: "short",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
              })
            }
          }, {
            key: "renderTransaction",
            value: function (e, t) {
              r.a.createElement("li", null);
              return e.warning ? r.a.createElement("li", {
                key: t
              }, r.a.createElement("div", {
                className: "shipment-container container-warning"
              }, r.a.createElement("p", {
                className: "shipment-status"
              }, e.title), r.a.createElement("p", {
                className: "shipment-date"
              }, e.date), r.a.createElement("p", {
                className: "shipment-details"
              }, e.message), r.a.createElement("p", {
                className: "shipment-carrier"
              }, e.transport), r.a.createElement("div", {
                className: "transaction-warning"
              }, r.a.createElement("h3", null, e.warningContent.temp, " ", r.a.createElement(w.a, {
                icon: v.c
              })), r.a.createElement("strong", null, r.a.createElement(w.a, {
                icon: v.a
              }), " ", e.warningContent.text)))) : r.a.createElement("li", {
                key: t
              }, r.a.createElement("div", {
                className: "shipment-container"
              }, e.invoice ? r.a.createElement("p", {
                className: "shipment-status"
              }, e.title, " ", r.a.createElement("a", {
                onClick: function (t) {
                  console.log(e.invoiceFile);
                  return window.open(e.invoiceFile, "_blank")
                }
              }, r.a.createElement(w.a, {
                icon: v.b,
                className: "status-icon"
              }))) : r.a.createElement("p", {
                className: "shipment-status"
              }, e.title), r.a.createElement("p", {
                className: "shipment-date"
              }, e.date), r.a.createElement("p", {
                className: "shipment-details"
              }, e.message), r.a.createElement("p", {
                className: "shipment-carrier"
              }, e.transport)))
            }
          }, {
            key: "renderWarning",
            value: function (e) {
              return r.a.createElement("div", {
                className: "transaction-warning"
              }, r.a.createElement("h3", null, "38.2\xb0F ", r.a.createElement(w.a, {
                icon: v.c
              })), r.a.createElement("strong", null, r.a.createElement(w.a, {
                icon: v.a
              }), " Transaction Warning"))
            }
          }]), t
        }(n.Component);
      var C = function (e) {
        function t() {
          return Object(s.a)(this, t), Object(l.a)(this, Object(m.a)(t).apply(this, arguments))
        }
        return Object(g.a)(t, e), Object(c.a)(t, [{
          key: "render",
          value: function () {
            return function (e) {
              var t = window.document.getElementsByTagName("script")[0],
                a = window.document.createElement("script");
              a.src = e, a.async = !0, a.defer = !0, t.parentNode.insertBefore(a, t)
            }("https://maps.googleapis.com/maps/api/js?key=AIzaSyB4zh7f42nXFEssbWNqFsVVoRaaxpoF0Jk&callback=initMap"), r.a.createElement("div", {
              className: "App container"
            }, r.a.createElement("div", {
              className: "row"
            }, r.a.createElement("div", {
              className: "col-md-12"
            }, r.a.createElement(p, null)), " "), " ", r.a.createElement("div", {
              className: "row"
            }, " "), " ", r.a.createElement("div", {
              className: "row fixed-height"
            }, r.a.createElement("div", {
              className: "col col-sm-12, col-md-6, col-lg-6 overflowed"
            }, " ", r.a.createElement(y, null), " "), " ", r.a.createElement("div", {
              className: "col col-sm-12, col-md-6, col-lg-6"
            }, r.a.createElement(h, null)), " "), " ")
          }
        }]), t
      }(n.Component);
      Boolean("localhost" === window.location.hostname || "[::1]" === window.location.hostname || window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));
      o.a.render(r.a.createElement(C, null), document.getElementById("root")), "serviceWorker" in navigator && navigator.serviceWorker.ready.then(function (e) {
        e.unregister()
      })
    }
  },
  [
    [13, 2, 1]
  ]
]);
//# sourceMappingURL=main.4bc4ae4a.chunk.js.map