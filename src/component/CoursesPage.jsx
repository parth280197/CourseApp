import React, { useState, useEffect } from "react";
import { getCourses } from "../api/courseApi";
import CourseList from "./CourseList";
import { Link } from "react-router-dom";

export default function CoursesPage() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    getCourses().then(_courses => setCourses(_courses));
  }, []);

  return (
    <>
      <h1>Courses Page</h1>
      <CourseList courses={courses} />
      <Link className="btn btn-primary" to="/course">
        Add new course
      </Link>
    </>
  );
}
