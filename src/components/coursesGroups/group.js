import { Card } from "antd";

function Group(props) {
  return (
    <Card style={{ width: "100%", height: "50px", marginTop: "10px"}}>
    <p>{props.title}</p>
  </Card>
  );
}
export default Group;
