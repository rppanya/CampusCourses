import { Card } from "antd";

function Student(props) {
  return <Card title={props.student.name}></Card>;
}

export default Student;
