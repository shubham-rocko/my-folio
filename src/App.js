// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Route, Routes, Navigate, Switch } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

const routeList = [
  { path: "/about", component: <About /> },
  { path: "/portfolio", component: <Projects /> },
  { path: "/contact", component: <Contact /> },
  { path: "/resume", component: <Resume /> },
];

function App() {
  return (
    <div className="App">
      <Header className="header" />
      <Routes>
        <Route exact path="/" element={<Navigate replace to="/about" />} />
        {routeList.map((route) => (
          <Route key={route.path} path={route.path} element={route.component} />
        ))}
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
