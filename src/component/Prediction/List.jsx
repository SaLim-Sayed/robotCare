import React from "react";
import { NavLink, Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";
import Footer from "../Footer/Footer";

function App({ keys }) {
  function generateId() {
    return (
      Math.random().toString(36).substring(2) +
      new Date().getTime().toString(36)
    );
  }
  return (
    <>
      <Navbar />
      <div className="container-fluid Appp">
        <ul className="categories">
          <div className="bdy">
            <h2>Body Parts</h2>
          </div>
          {Object.keys(keys).map((el) => (
            <li key={generateId()}>
              <button className="catbtn">
                <NavLink className="cat" to={el}>
                  {el}
                </NavLink>
              </button>
            </li>
          ))}
        </ul>
        </div>
        <Outlet />
    
      <Footer />
    </>
  );
}

export default App;
