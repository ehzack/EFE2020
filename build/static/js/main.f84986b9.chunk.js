(this["webpackJsonpapp-final-react"] =
  this["webpackJsonpapp-final-react"] || []).push([
  [0],
  {
    37: function (e, t, a) {},
    38: function (e, t, a) {},
    39: function (e, t, a) {},
    40: function (e, t, a) {},
    60: function (e, t, a) {},
    61: function (e, t, a) {},
    62: function (e, t, a) {},
    68: function (e, t, a) {},
    70: function (e, t, a) {
      "use strict";
      a.r(t);
      var n = a(1),
        s = a.n(n),
        i = a(29),
        c = a.n(i),
        o = (a(37), a(4)),
        r = a(5),
        l = a(7),
        j = a(6),
        b = (a.p, a(38), a(39), a(40), a(0)),
        h = (function (e) {
          Object(l.a)(a, e);
          var t = Object(j.a)(a);
          function a() {
            return Object(o.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(b.jsx)("div", {
                    className: "container",
                    children: Object(b.jsxs)("ul", {
                      className: "social-icons",
                      children: [
                        Object(b.jsx)("li", {
                          children: Object(b.jsx)("a", {
                            href: "https://web.facebook.com/efemorocco/",
                            children: Object(b.jsx)("i", {
                              class: "fa fa-facebook",
                            }),
                          }),
                        }),
                        Object(b.jsx)("li", {
                          children: Object(b.jsx)("a", {
                            href: "https://www.instagram.com/efe.maroc/",
                            children: Object(b.jsx)("i", {
                              class: "fa fa-instagram",
                            }),
                          }),
                        }),
                        Object(b.jsx)("li", {
                          children: Object(b.jsx)("a", {
                            href: "https://mobile.twitter.com/efemaroc/",
                            children: Object(b.jsx)("i", {
                              class: "fa fa-twitter",
                            }),
                          }),
                        }),
                        Object(b.jsx)("li", {
                          children: Object(b.jsx)("a", {
                            href: "https://www.linkedin.com/school/efemaroc/",
                            children: Object(b.jsx)("i", {
                              class: "fa fa-linkedin",
                            }),
                          }),
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(n.Component),
        d = a.p + "static/media/Logo EFE-Maroc.094683b5.png",
        u = { height: "100vh", minHeight: "100vh" },
        p = (function (e) {
          Object(l.a)(a, e);
          var t = Object(j.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).HundleSubmit = function () {
                n.props.history.push({
                  pathname: "/Offers",
                  state: { userinfos: "res.data.response" },
                });
              }),
              (n.state = {}),
              n
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(b.jsx)("div", {
                    className: "Home-Class",
                    style: u,
                    children: Object(b.jsxs)("div", {
                      className: "container Home-Content",
                      children: [
                        Object(b.jsxs)("div", {
                          className: "jumbotron Home-Content",
                          children: [
                            Object(b.jsx)("img", {
                              src: d,
                              style: {
                                width: "200px",
                                backgroundColor: "white",
                              },
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("h2", {
                              style: {
                                textAlign: "justify",
                                textJustify: "inter-word",
                                backgroundColor: "rgba(0, 0, 0, .5)",
                                display: "table",
                                margin: "0px auto 0px auto",
                                padding: "5px",
                              },
                              children: Object(b.jsx)("span", {
                                children:
                                  " Bienvenue \xe0 la fondation marocaine de l'\xe9ducation pour l'emploi ",
                              }),
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("h2", {
                              style: {
                                backgroundColor: "rgba(0, 0, 0, .5)",
                                display: "table",
                                margin: "0px auto 0px auto",
                                padding: "5px",
                              },
                              children: Object(b.jsx)("span", {
                                children:
                                  " Agissons pour l'employabilit\xe9 des jeunes ",
                              }),
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsxs)("h2", {
                              style: {
                                backgroundColor: "rgba(0, 0, 0, .5)",
                                display: "table",
                                margin: "0px auto 0px auto",
                                padding: "5px",
                              },
                              children: [
                                Object(b.jsx)("i", {
                                  className: "fas fa-search-location",
                                  style: { fontSize: "36px", color: "red" },
                                }),
                                Object(b.jsx)("span", {
                                  children: " Kenitra Free Zone ",
                                }),
                              ],
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsxs)("button", {
                              className: "outliness purple-white",
                              onClick: this.HundleSubmit,
                              children: [
                                " ",
                                Object(b.jsx)("i", {
                                  className: "fas fa-briefcase",
                                  style: { fontSize: "24px" },
                                }),
                                " \xa0 Voir les Offres ",
                              ],
                            }),
                          ],
                        }),
                        Object(b.jsx)(h, {}),
                      ],
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(n.Component),
        x = a(14),
        m = a.n(x),
        O = (a(60), { height: "100vh", minHeight: "100vh", overflow: "auto" }),
        f = (function (e) {
          Object(l.a)(a, e);
          var t = Object(j.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).GetDataOffers = function () {
                m.a
                  .post("https://backendefe.cliquaprod.com/getPostes")
                  .then(function (e) {
                    console.log(e), n.setState({ data: e.data });
                  })
                  .catch(function (e) {
                    console.log(e);
                  });
              }),
              (n.state = { data: {} }),
              n
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "componentDidMount",
                value: function () {
                  this.GetDataOffers();
                },
              },
              {
                key: "HundleOffer",
                value: function (e) {
                  console.log(e),
                    this.props.history.push({
                      pathname: "/Form",
                      state: { id: e },
                    });
                },
              },
              {
                key: "render",
                value: function () {
                  var e = this;
                  return (
                    this.state.data
                      ? console.log(this.state.data)
                      : console.log(this.state.data.status),
                    Object(b.jsx)("div", {
                      className: "Offers-Class",
                      style: O,
                      children:
                        this.state.data && 1 == this.state.data.status
                          ? Object(b.jsxs)("div", {
                              className: "container Offers-Content scrollable",
                              style: { width: "70%", paddingTop: "10%" },
                              children: [
                                Object(b.jsx)("br", {}),
                                Object(b.jsx)("br", {}),
                                Object(b.jsx)("br", {}),
                                Object(b.jsx)("br", {}),
                                Object(b.jsx)("img", {
                                  src: d,
                                  style: {
                                    width: "200px",
                                    backgroundColor: "white",
                                  },
                                }),
                                Object(b.jsx)("br", {}),
                                Object(b.jsx)("br", {}),
                                this.state.data.response.map(function (t, a) {
                                  return Object(b.jsxs)(
                                    "div",
                                    {
                                      className: "wrapper",
                                      children: [
                                        Object(b.jsx)("div", {
                                          id: "one",
                                          children: "  ",
                                        }),
                                        Object(b.jsx)("div", {
                                          id: "two",
                                          children: Object(b.jsxs)("div", {
                                            style: { textAlign: "left" },
                                            children: [
                                              Object(b.jsxs)("h3", {
                                                children: [" ", t.titre, " "],
                                              }),
                                              Object(b.jsxs)("p", {
                                                children: [
                                                  " ",
                                                  t.description,
                                                  " ",
                                                ],
                                              }),
                                              Object(b.jsxs)("div", {
                                                style: { textAlign: "right" },
                                                children: [
                                                  Object(b.jsx)("i", {
                                                    className:
                                                      "fas fa-map-marker",
                                                    style: { fontSize: "19px" },
                                                  }),
                                                  " ",
                                                  t.ville,
                                                  " \xa0",
                                                  Object(b.jsxs)("button", {
                                                    className: "outlines",
                                                    onClick: (e.HundleOffer = function () {
                                                      console.log(t.id),
                                                        e.props.history.push({
                                                          pathname: "/Form",
                                                          state: { id: t.id },
                                                        });
                                                    }),
                                                    children: [
                                                      " ",
                                                      Object(b.jsx)("i", {
                                                        className:
                                                          "fas fa-briefcase",
                                                        style: {
                                                          fontSize: "24px",
                                                        },
                                                      }),
                                                      "  \xa0 Postuler ",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    a
                                  );
                                }),
                                this.state.data.response.map(function (t, a) {
                                  return Object(b.jsxs)(
                                    "div",
                                    {
                                      className: "wrapper",
                                      children: [
                                        Object(b.jsx)("div", {
                                          id: "one",
                                          children: "  ",
                                        }),
                                        Object(b.jsx)("div", {
                                          id: "two",
                                          children: Object(b.jsxs)("div", {
                                            style: { textAlign: "left" },
                                            children: [
                                              Object(b.jsxs)("h3", {
                                                children: [" ", t.titre, " "],
                                              }),
                                              Object(b.jsxs)("p", {
                                                children: [
                                                  " ",
                                                  t.description,
                                                  " ",
                                                ],
                                              }),
                                              Object(b.jsxs)("div", {
                                                style: { textAlign: "right" },
                                                children: [
                                                  Object(b.jsx)("i", {
                                                    className:
                                                      "fas fa-map-marker",
                                                    style: { fontSize: "19px" },
                                                  }),
                                                  " ",
                                                  t.ville,
                                                  " \xa0",
                                                  Object(b.jsxs)("button", {
                                                    className: "outlines",
                                                    onClick: (e.HundleOffer = function () {
                                                      console.log(t.id),
                                                        e.props.history.push({
                                                          pathname: "/Form",
                                                          state: { id: t.id },
                                                        });
                                                    }),
                                                    children: [
                                                      " ",
                                                      Object(b.jsx)("i", {
                                                        className:
                                                          "fas fa-briefcase",
                                                        style: {
                                                          fontSize: "24px",
                                                        },
                                                      }),
                                                      "  \xa0 Postuler ",
                                                    ],
                                                  }),
                                                ],
                                              }),
                                            ],
                                          }),
                                        }),
                                      ],
                                    },
                                    a
                                  );
                                }),
                              ],
                            })
                          : Object(b.jsx)("div", {
                              className: "container",
                              style: { width: "70%", paddingTop: "10%" },
                              children: Object(b.jsx)("h1", {
                                children: " NO OFFER ",
                              }),
                            }),
                    })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        g = (a(61), { height: "100vh", minHeight: "100vh" }),
        v = (function (e) {
          Object(l.a)(a, e);
          var t = Object(j.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).handleChange = function (e) {
                n.setState({ fullName: e.target.value });
              }),
              (n.handleChange1 = function (e) {
                n.setState({ Phone: e.target.value });
              }),
              (n.handleChange2 = function (e) {
                n.setState({ Email: e.target.value });
              }),
              (n.HundleSubmit = function () {
                "" == n.state.fullName
                  ? alert("Champ nom complet obligatoire")
                  : "" == n.state.Phone
                  ? alert("Champ t\xe9l\xe9phone obligatoire")
                  : "" == n.state.Email
                  ? alert("Champ email obligatoire")
                  : n.validateEmail(n.state.Email)
                  ? (console.log("this.state.Phone.length"),
                    console.log(n.state.Phone.length),
                    n.validatePhone(n.state.Phone) ||
                    (10 == n.state.Phone.length && "0" == n.state.Phone[0])
                      ? (m.a.post(
                          "https://backendefe.cliquaprod.com/SendEmail",
                          { Email: n.state.Email, FullName: n.state.fullName }
                        ),
                        n.props.history.push({ pathname: "/Confirmation" }))
                      : alert("T\xe9l\xe9phone incorrect !!"))
                  : alert("Email incorrect !!");
              }),
              (n.state = { id: null, fullName: "", Phone: "", Email: "" }),
              n
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "validateEmail",
                value: function (e) {
                  return /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(
                    String(e).toLowerCase()
                  );
                },
              },
              {
                key: "validatePhone",
                value: function (e) {
                  return /^\+(?:[0-9] ?){6,14}[0-9]$/.test(e);
                },
              },
              {
                key: "render",
                value: function () {
                  return (
                    console.log(this.props.location.state.id),
                    Object(b.jsx)("div", {
                      className: "Form-Class",
                      style: g,
                      children: Object(b.jsx)("div", {
                        className: "container Form-Content",
                        children: Object(b.jsxs)("div", {
                          className: "jumbotron Form-Content",
                          children: [
                            Object(b.jsx)("img", {
                              src: d,
                              style: {
                                width: "200px",
                                backgroundColor: "white",
                              },
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("h3", {
                              style: {
                                backgroundColor: "rgba(0, 0, 0, .5)",
                                display: "table",
                                margin: "0px auto 0px auto",
                                padding: "5px",
                              },
                              children: Object(b.jsx)("span", {
                                children:
                                  "  Veuillez saisir vos informations pour vous envoyer le formulaire de candidature ",
                              }),
                            }),
                            Object(b.jsx)("div", {
                              id: "form",
                              className: "container",
                              children: Object(b.jsxs)("fieldset", {
                                children: [
                                  Object(b.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                      Object(b.jsx)("label", {
                                        children: "Nom et Pr\xe9nom:",
                                      }),
                                      Object(b.jsx)("input", {
                                        name: "fullName",
                                        id: "fullName",
                                        onChange: this.handleChange,
                                      }),
                                    ],
                                  }),
                                  Object(b.jsxs)("div", {
                                    className: "form-group",
                                    children: [
                                      Object(b.jsx)("label", {
                                        children: "T\xe9l\xe9phone:",
                                      }),
                                      Object(b.jsx)("input", {
                                        name: "Phone",
                                        id: "Phone",
                                        onChange: this.handleChange1,
                                      }),
                                    ],
                                  }),
                                  Object(b.jsxs)("div", {
                                    className: "form-group",
                                    style: { marginBottom: "30px" },
                                    children: [
                                      Object(b.jsx)("label", {
                                        children: "E-mail:",
                                      }),
                                      Object(b.jsx)("input", {
                                        name: "Email",
                                        id: "Email",
                                        onChange: this.handleChange2,
                                      }),
                                    ],
                                  }),
                                  Object(b.jsxs)("button", {
                                    className: "outline purple-white",
                                    onClick: this.HundleSubmit,
                                    children: [
                                      " ",
                                      Object(b.jsx)("i", {
                                        className: "fas fa-briefcase",
                                        style: { fontSize: "24px" },
                                      }),
                                      " \xa0 Postuler ",
                                    ],
                                  }),
                                ],
                              }),
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("div", {
                              style: {
                                color: "red",
                                fontSize: "15px",
                                width: "50%",
                                margin: "auto",
                                backgroundColor: "black",
                              },
                              children:
                                "  *** Vos informations seront utilis\xe9es exclusivement par EFE-Maroc dans le cadre de ses op\xe9rations de formation-Insertion et seront prot\xe9g\xe9s conform\xe9ment \xe0 la r\xe9glementation en vigueur ",
                            }),
                          ],
                        }),
                      }),
                    })
                  );
                },
              },
            ]),
            a
          );
        })(n.Component),
        y = (a(62), { height: "100vh", minHeight: "100vh" }),
        C = (function (e) {
          Object(l.a)(a, e);
          var t = Object(j.a)(a);
          function a(e) {
            var n;
            return (
              Object(o.a)(this, a),
              ((n = t.call(this, e)).HundleSubmit = function () {
                n.props.history.push({
                  pathname: "/",
                  state: { userinfos: "res.data.response" },
                });
              }),
              (n.state = {}),
              n
            );
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(b.jsx)("div", {
                    className: "Confirmation-Class",
                    style: y,
                    children: Object(b.jsxs)("div", {
                      className: "container Confirmation-Content",
                      children: [
                        Object(b.jsx)("img", {
                          src: d,
                          style: { width: "200px", backgroundColor: "white" },
                        }),
                        Object(b.jsx)("br", {}),
                        Object(b.jsx)("br", {}),
                        Object(b.jsxs)("div", {
                          className: "jumbotron Confirmation-Content",
                          children: [
                            Object(b.jsx)("h3", {
                              style: {
                                textAlign: "justify",
                                textJustify: "inter-word",
                                backgroundColor: "rgba(0, 0, 0, .5)",
                                display: "table",
                                margin: "0px auto 0px auto",
                                padding: "5px",
                              },
                              children: Object(b.jsx)("span", {
                                children: " Votre Inscritption est Valid\xe9e ",
                              }),
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("h2", {
                              style: {
                                backgroundColor: "rgba(0, 0, 0, .5)",
                                display: "table",
                                margin: "0px auto 0px auto",
                                padding: "5px",
                              },
                              children: Object(b.jsx)("span", {
                                children:
                                  " Vous allez recevoir un email pour compl\xe9ter votre candidature ",
                              }),
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("h2", {
                              style: {
                                backgroundColor: "rgba(0, 0, 0, .5)",
                                display: "table",
                                margin: "0px auto 0px auto",
                                padding: "5px",
                              },
                              children: Object(b.jsx)("span", {
                                children: " Merci ",
                              }),
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsxs)("button", {
                              className: "outliness purple-white",
                              onClick: this.HundleSubmit,
                              children: [
                                " ",
                                Object(b.jsx)("i", {
                                  className: "fas fa-home",
                                  style: { fontSize: "24px" },
                                }),
                                " \xa0 Acceuil ",
                              ],
                            }),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)("br", {}),
                            Object(b.jsx)(h, {}),
                          ],
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(n.Component),
        N = a(30),
        k = a(32),
        w = a(3),
        S = Object(N.a)(),
        E = (function (e) {
          Object(l.a)(a, e);
          var t = Object(j.a)(a);
          function a() {
            return Object(o.a)(this, a), t.apply(this, arguments);
          }
          return (
            Object(r.a)(a, [
              {
                key: "render",
                value: function () {
                  return Object(b.jsx)(k.a, {
                    history: S,
                    children: Object(b.jsxs)(w.c, {
                      children: [
                        Object(b.jsx)(w.a, {
                          exact: !0,
                          path: "/",
                          component: p,
                        }),
                        Object(b.jsx)(w.a, {
                          exact: !0,
                          path: "/Home",
                          component: p,
                        }),
                        Object(b.jsx)(w.a, {
                          exact: !0,
                          path: "/Form",
                          component: v,
                        }),
                        Object(b.jsx)(w.a, {
                          exact: !0,
                          path: "/Offers",
                          component: f,
                        }),
                        Object(b.jsx)(w.a, {
                          exact: !0,
                          path: "/Confirmation",
                          component: C,
                        }),
                        Object(b.jsx)(w.a, {
                          exact: !0,
                          path: "/SocialMedia",
                          component: h,
                        }),
                      ],
                    }),
                  });
                },
              },
            ]),
            a
          );
        })(n.Component),
        P =
          (a(68),
          n.Component,
          (function (e) {
            Object(l.a)(a, e);
            var t = Object(j.a)(a);
            function a(e) {
              var n;
              return (
                Object(o.a)(this, a),
                ((n = t.call(this, e)).state = { counter: 2, aa: 3 }),
                n
              );
            }
            return (
              Object(r.a)(a, [
                {
                  key: "render",
                  value: function () {
                    return Object(b.jsx)(E, {});
                  },
                },
              ]),
              a
            );
          })(n.Component)),
        F = function (e) {
          e &&
            e instanceof Function &&
            a
              .e(3)
              .then(a.bind(null, 71))
              .then(function (t) {
                var a = t.getCLS,
                  n = t.getFID,
                  s = t.getFCP,
                  i = t.getLCP,
                  c = t.getTTFB;
                a(e), n(e), s(e), i(e), c(e);
              });
        };
      a(69);
      c.a.render(
        Object(b.jsx)(s.a.StrictMode, { children: Object(b.jsx)(P, {}) }),
        document.getElementById("root")
      ),
        F();
    },
  },
  [[70, 1, 2]],
]);
//# sourceMappingURL=main.f84986b9.chunk.js.map
