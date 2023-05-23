import { useState } from "react";
import { useNavigate } from "react-router-dom";

import { Button, Card, Row, Col, Modal, Input, Form } from "antd";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import FormItem from "antd/es/form/FormItem";
import swal from "sweetalert";

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

  const showModalDelete = () => {
    swal({
      title: "Вы уверены что хотите удалить группу?",
      text: "Это действие невозможно будет отменить, после подтверждения группа будет удалена навсегда!",
      icon: "warning",
      buttons: {
        cancel: "Отмена",
        defeat: "Удалить",
      },
      dangerMode: true,
    }).then((value) => {
      switch (value) {
        case "cancel":
          break;
        case "defeat":
          props.deleteGroupThunkCreator(props.id);
          break;
        default:
          break;
      }
    });
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
            rules={[{ required: true, message: "Введите название группы!" }]}
          >
            <Input placeholder="Название группы" defaultValue={props.title} />
          </FormItem>
        </Form>
      </Modal>
    </>
  );
}
export default Group;
