import Course from "./course";

function Courses(props) {
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>Группа - {props.name}</h2>
      {console.log(props.courses)}
      {
        props.courses ? props.courses.map((element) => {
          return <Course course={element} key={element.id}/>;
        }) : null
      }
    </div>
  );
}

export default Courses;
