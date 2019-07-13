import React from "react";
import TextInput from "./common/TextInput";
import SelectInput from "./common/SelectInput";
function CourseForm(props) {
  const options = [
    { value: "", label: "Select author" },
    { value: "1", label: "Patel" },
    { value: "2", label: "Patidar" }
  ];
  return (
    <form onSubmit={props.onSubmit}>
      <TextInput
        id="title"
        label="title"
        onChange={props.onChange}
        name="title"
        value={props.course.title}
        error={props.errors.title}
      />
      <SelectInput
        id="author"
        label="Author"
        name="authorId"
        onChange={props.onChange}
        value={props.course.authorId || ""}
        error={props.errors.authorId || ""}
        className="form-control"
        options={options}
      />
      <TextInput
        id="category"
        label="category"
        onChange={props.onChange}
        name="category"
        value={props.course.category}
        error={props.errors.category}
      />
      <input type="submit" value="Save" className="btn btn-primary" />
    </form>
  );
}

export default CourseForm;
