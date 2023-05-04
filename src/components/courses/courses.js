import Course from "./course";
import ModalCreateCourse from "../modals/modalCreateCourse";

function Courses(props) {
  return (
  <div>
      {props.isAdmin? <ModalCreateCourse {...props} /> : null}
      {props.courses
        ? props.courses.map((element) => {
            return <Course course={element} key={element.id} />;
          })
        : null}
    </div>
  );
}

export default Courses;
