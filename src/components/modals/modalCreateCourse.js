import { Button, Modal, Form, Radio, Select, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

import { useEffect, useState } from "react";

function ModalCreateCourse(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (data) => {
    props.action(props.id, JSON.stringify(data));
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [form] = Form.useForm();
  console.log(props)

  return (
    <div>
      <Button
        onClick={showModal}
      >
        Создать курс
      </Button>
      <Modal
        title="Создать курс"
        open={open}
        okText="Создать"
        onOk={() => {
          form.validateFields().then((values) => {
            handleOk(values)
          })
          .catch((info) => {
            console.log(info)
          })
        }}
        onCancel={handleCancel}
        cancelText="Отмена"
      >
        <Form form={form}>
          <Form.Item
            label="Название курса"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input courses name!",
              },
            ]}
          >
            <Input placeholder="Новый курс" />
          </Form.Item>

          <Form.Item
            label="Год начала курса"
            name="startYear"
            rules={[
              {
                required: true,
                message: "Please input start year!",
              },
            ]}
          >
            <Input placeholder="2023" />
          </Form.Item>

          <Form.Item
            label="Общее количество мест"
            name="maximumStudentsCount"
            rules={[
              {
                required: true,
                message: "Please input maximum students count!",
              },
            ]}
          >
            <Input placeholder="100" />
          </Form.Item>

          <Form.Item name="semester" label="Семестр">
            <Radio.Group>
              <Radio value="Autumn">Осенний</Radio>
              <Radio value="Spring">Весенний</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="requirements" label="Требования">
            <TextArea></TextArea>
          </Form.Item>

          <Form.Item name="annotations" label="Аннотации">
            <TextArea></TextArea>
          </Form.Item>

          <Form.Item label="Основной преподаватель курса" name="mainTeacherId">
            <Select>
              {
                props.users.map((value) => {
                  return (
                    <Select.Option key={value.id} value={value.id}>{value.fullName}</Select.Option>
                  )
                })
              }
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalCreateCourse;
