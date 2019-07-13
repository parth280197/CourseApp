import React from "react";
import { Link } from "react-router-dom";
export default function HomePage() {
  return (
    <div className="jumbotron">
      <h1>Home Page</h1>
      <Link to="about" className="btn btn-primary">
        About
      </Link>
    </div>
  );
}
