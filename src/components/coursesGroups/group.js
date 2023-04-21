import { Button, Card, Row, Col } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

function Group(props) {
  const navigate = useNavigate();
  return (
    <Card
      hoverable
      style={{
        width: "100%",
        height: "60px",
        marginTop: "10px",
      }}
      onClick={() => {navigate(`/groups/${props.id}`)}}
    >
      <Row>
        <Col span={6}>
          <p>{props.title}</p>
        </Col>
        <Row
          style={{
            marginLeft: "auto",
            display: props.isAdmin ? "flex" : "none",
          }}
        >
          <Col>
            <Button type="text" icon={<EditOutlined />}></Button>
          </Col>
          <Col>
            <Button type="text" icon={<DeleteOutlined />}></Button>
          </Col>
        </Row>
      </Row>
    </Card>
  );
}
export default Group;
