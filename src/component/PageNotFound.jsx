import React from "react";
import { Link } from "react-router-dom";

export default function() {
  return (
    <div>
      <h2>Page not found</h2>
      <p>
        <Link to="/">Back to home</Link>
      </p>
    </div>
  );
}
