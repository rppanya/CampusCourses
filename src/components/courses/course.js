import { Card } from "antd";
const courseStatuses = {
  "OpenForAssigning": <b style={{ color: "green" }}>Открыт для записи</b>,
  "Started": <b style={{ color: "blue" }}>В процессе обучения</b>,
  "Created": <b style={{ color: "grey" }}>Создан</b>,
  "Finished": <b style={{ color: "red" }}>Закрыт</b>,
};

function Course(props) {
  return (
    <Card
      id={props.course.id}
      hoverable
      title={props.course.name}
      extra={courseStatuses[props.course.status]}
      style={{ textAlign: "left", fontSize: "12px", margin: "10px" }}
    >
      <p>Учебный год - {props.course.startYear}</p>
      <p>Семестр - {props.course.semester}</p>
      <p>Мест всего - {props.course.maximumStudentsCount}</p>
      <p>Мест свободно - {props.course.remainingSlotsCount}</p>
    </Card>
  );
}

export default Course;
