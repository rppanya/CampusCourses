import { Button, Card, Row, Col, Modal, Input, Space, Form } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import FormItem from "antd/es/form/FormItem";

function Group(props) {
  const navigate = useNavigate();
  const [openEdit, setOpenEdit] = useState(false);
  const [groupName, changeGroupName] = useState(props.title);
  const showModalEdit = () => {
    setOpenEdit(true);
  };
  const handleOkEdit = () => {
    form.validateFields().then(() => {
      props.editGroupNameThunkCreator(props.id, groupName);
      setOpenEdit(false);
    });
  };
  const handleCancelEdit = () => {
    setOpenEdit(false);
  };
  const [form] = Form.useForm();

  const [openDelete, setOpenDelete] = useState(false);

  const showModalDelete = () => {
    setOpenDelete(true);
  };
  const handleOkDelete = () => {
    props.deleteGroupThunkCreator(props.id);
    setOpenDelete(false);
  };
  const handleCancelDelete = () => {
    setOpenDelete(false);
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
                  showModalEdit();
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
                  showModalDelete();
                }}
              ></Button>
            </Col>
          </Row>
        </Row>
      </Card>
      <Modal
        title="Редактировать группу"
        open={openEdit}
        onOk={handleOkEdit}
        onCancel={handleCancelEdit}
        cancelText="Отмена"
      >
        <Form
          form={form}
          onChange={() => {
            form.validateFields().then((values) => {
              changeGroupName(values);
            });
          }}
        >
          <FormItem
            name="name"
            rules={[{ required: true, message: "Введите название группы" }]}
          >
            <Input placeholder="Название группы" defaultValue={props.title} />
          </FormItem>
        </Form>
      </Modal>
      <Modal
        title="Удалить группу"
        open={openDelete}
        onOk={handleOkDelete}
        onCancel={handleCancelDelete}
        cancelText="Отмена"
        okText="Да"
      >
        <h4>
          Вы не сможете отменить это действие. Вы действительно хотите удалить
          группу?
        </h4>
      </Modal>
    </>
  );
}
export default Group;
