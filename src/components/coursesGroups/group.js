import { Button, Card, Row, Col, Modal, Input, Space } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

function Group(props) {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const [groupName, changeGroupName] = useState(props.title);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    props.editGroupNameThunkCreator(props.id, groupName);
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  return (
    <>
      <Card
        hoverable
        style={{
          width: "100%",
          height: "60px",
          marginTop: "10px",
        }}
        onClick={(e) => {
          navigate(`/groups/${props.id}`);
        }}
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
              <Button
                type="text"
                icon={<EditOutlined />}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  showModal();
                }}
              ></Button>
            </Col>
            <Col>
              <Button
                type="text"
                icon={<DeleteOutlined />}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  props.deleteGroupThunkCreator(props.id)
                }}
              ></Button>
            </Col>
          </Row>
        </Row>
      </Card>
      <Modal
        title="Редактировать группу"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Отмена"
      >
        <Input
          placeholder="Название группы"
          defaultValue={props.title}
          onChange={(e) => {
            changeGroupName(e.target.value);
          }}
        />
      </Modal>
    </>
  );
}
export default Group;
