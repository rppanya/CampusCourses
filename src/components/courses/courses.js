import Course from "./course";
import ModalContainer from "../modals/modalContainer";

function Courses(props) {
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>
        {props.name ? "Группа - " : ""}
        {props.name}
      </h2>
      {props.isAdmin ? (
        <ModalContainer
          action={props.createCourseThunkCreator}
          id={props.id}
          createCourse={true}
        ></ModalContainer>
      ) : null}
      {props.courses
        ? props.courses.map((element) => {
            return <Course course={element} key={element.id} />;
          })
        : null}
    </div>
  );
}

export default Courses;
