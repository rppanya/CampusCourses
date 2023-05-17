import { Button, Input, Modal, Form } from "antd";
import Group from "./group";
import { useState } from "react";
import FormItem from "antd/es/form/FormItem";

function Groups(props) {
  const [open, setOpen] = useState(false);
  const [groupName, changeGroupName] = useState("");
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    form.validateFields().then(() => {
      props.createGroupThunkCreator(groupName);
      setOpen(false);
    });
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [form] = Form.useForm();
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>Группы кампусных курсов</h2>
      <Button
        type="primary"
        style={{ display: props.isAdmin ? "inline-block" : "none" }}
        onClick={showModal}
      >
        Создать группу
      </Button>
      <Modal
        title="Создать группу"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
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
            <Input placeholder="Название группы" />
          </FormItem>
        </Form>
      </Modal>
      {props.group.groups.map((value) => {
        return (
          <Group
            title={value.name}
            key={value.id}
            id={value.id}
            isAdmin={props.isAdmin}
            editGroupNameThunkCreator={props.editGroupNameThunkCreator}
            deleteGroupThunkCreator={props.deleteGroupThunkCreator}
          ></Group>
        );
      })}
    </div>
  );
}
export default Groups;
