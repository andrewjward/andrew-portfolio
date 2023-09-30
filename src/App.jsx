import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from 'react'
import './App.css'
import Nav from "./components/Nav";


import Profile from "./components/HomePage";
import About from "./components/About";
import Projects from "./components/Projects";

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Nav/>
      <Routes>
        <Route
                path="/"
                element={<Profile />}
              />
        <Route
                path="/about"
                element={<About />}
              />
        <Route
                path="/projects"
                element={<Projects />}
                />
      </Routes>
    </BrowserRouter>
  )
}
