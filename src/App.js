import React, { Component } from "react";
import Navigation from "./components/navigation/Navigation";
import Recent from "./components/recent/Recent";
import Presentation from "./components/viewall/Presentation";
import Addpresentation from "./components/addpresentation/Addpresentation";
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

class App extends Component {
  state = {
    presentations: [
      {
        id: 1,
        presentatorname: "Anuj Thapa",
        evaluatorname: "Kushal Kushal",
        topic: "Index",
        url: "https://reactjs.org/docs/state-and-lifecycle.html",
        presentationdata: "11/01/2018",
        keywords: [{ word: "learning" }, { word: "motivation" }],
        comments:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum"
      },
      {
        id: 2,
        presentatorname: "David David",
        evaluatorname: "Noman Noman",
        topic: "Presentation",
        url: "https://reactjs.org/docs/state-and-lifecycle.html",
        presentationdata: "11/05/2018",
        keywords: [{ word: "react" }, { word: "reactjs" }],
        comments:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum"
      },
      {
        id: 3,
        presentatorname: "Anuj Thapa",
        evaluatorname: "Kushal Kushal",
        topic: "Index",
        url: "https://reactjs.org/docs/state-and-lifecycle.html",
        presentationdata: "11/02/2018",
        keywords: [{ word: "learn" }, { word: "code" }],
        comments:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum"
      },
      {
        id: 4,
        presentatorname: "Anuj Thapa",
        evaluatorname: "Kushal Kushal",
        topic: "Index",
        url: "https://reactjs.org/docs/state-and-lifecycle.html",
        comments:
          "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum"
      }
    ]
  };
  lastPresentation = () => {
    const data = this.state.presentations.filter(
      item => item.id === this.state.presentations.length
    );
    return data;
  };

  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Switch>
            <Route
              path
              exact="/"
              component={props => (
                <Recent
                  {...props}
                  presentation={this.state.presentations}
                  recentpresentation={this.lastPresentation()}
                />
              )}
            />
            <Route
              path="/presentation"
              component={props => (
                <Presentation
                  {...props}
                  presentation={this.state.presentations}
                />
              )}
            />
            <Route
              path="/addpresentation"
              component={props => <Addpresentation />}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
