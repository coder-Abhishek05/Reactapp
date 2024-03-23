import React from "react";
import ReactDom from "react-dom";
import Navbar from "../components/navbar";
import Card from "../components/card";

ReactDom.render(<Navbar />, document.getElementById("root"));

// import React from "react";
// import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Navbar from "../components/navbar";
// import HomePage from "../public/index.html";
// import AboutPage from "../public/about.html";
// import ContactPage from "../public/contact.html";

// function App() {
//   return (
//     <Router>
//       <Navbar />
//       <Switch>
//         <Route path="/" exact component={HomePage} />
//         <Route path="/about" component={AboutPage} />
//         <Route path="/contact" component={ContactPage} />
//       </Switch>
//     </Router>
//   );
// }

// export default App;
