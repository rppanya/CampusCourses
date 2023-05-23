import { useState } from "react";

import { Checkbox, Button, Tag, Modal, Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import TextArea from "antd/es/input/TextArea";

function Notifications(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
    form.validateFields().then((values) => {
      props.createNotificationThunkCreator(props.courseId, values);
      setOpen(false);
    });
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [form] = Form.useForm();

  return (
    <div>
      <Button
        type="primary"
        onClick={showModal}
        style={{ display: props.isAdmin || props.isTeacher ? "block" : "none" }}
      >
        Создать уведомление
      </Button>
      {props.notifications.map((element, index) => {
        return (
          <Tag
            style={{
              width: "100%",
              height: "30px",
              fontSize: "14px",
              marginTop: "5px",
            }}
            color={element.isImportant ? "red" : null}
            key={index}
          >
            {element.text}
          </Tag>
        );
      })}

      <Modal
        title="Создать уведомление"
        open={open}
        okText="Сохранить"
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Отмена"
      >
        <Form
          form={form}
          onChange={() => {
            form.validateFields();
          }}
        >
          <FormItem
            name="text"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <TextArea></TextArea>
          </FormItem>
          <FormItem name="isImportant" valuePropName="checked">
            <Checkbox>Важное</Checkbox>
          </FormItem>
        </Form>
      </Modal>
    </div>
  );
}

export default Notifications;
