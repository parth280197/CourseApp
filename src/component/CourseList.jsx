import React from "react";
import { Link } from "react-router-dom";

export default function CourseList(props) {
  return (
    <table className="table">
      <thead>
        <tr>
          <th>Title</th>
          <th>Author </th>
          <th>Category</th>
        </tr>
      </thead>
      <tbody>
        {props.courses.map(course => (
          <tr key={course.id}>
            <td>
              <Link to={"/course/" + course.slug}>{course.title}</Link>
            </td>
            <td>{course.authorId}</td>
            <td>{course.category}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
