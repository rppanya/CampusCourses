import { useState } from "react";

import { Button, Modal, Form, Radio, Select, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

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

  return (
    <div>
      <Button onClick={showModal}>Создать курс</Button>
      <Modal
        title="Создать курс"
        open={open}
        okText="Создать"
        onOk={() => {
          form.validateFields().then((values) => {
            handleOk(values);
          });
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
                message: "Поле обязательно для заполнения!",
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
                message: "Поле обязательно для заполнения!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    getFieldValue("startYear").length > 0 &&
                    (getFieldValue("startYear") > 2029 ||
                      getFieldValue("startYear") < 2000)
                  ) {
                    return Promise.reject("Некорректное значение!");
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input id="startYear" placeholder="2023" type="number" />
          </Form.Item>

          <Form.Item
            label="Общее количество мест"
            name="maximumStudentsCount"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (
                    getFieldValue("maximumStudentsCount").length > 0 &&
                    (getFieldValue("maximumStudentsCount") > 200 ||
                      getFieldValue("maximumStudentsCount") < 1)
                  ) {
                    return Promise.reject("Некорректное значение!");
                  }
                  return Promise.resolve();
                },
              }),
            ]}
          >
            <Input id="maximumStudentsCount" placeholder="100" type="number" />
          </Form.Item>

          <Form.Item
            name="semester"
            label="Семестр"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <Radio.Group>
              <Radio value="Autumn">Осенний</Radio>
              <Radio value="Spring">Весенний</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item
            name="requirements"
            label="Требования"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <TextArea></TextArea>
          </Form.Item>

          <Form.Item
            name="annotations"
            label="Аннотации"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <TextArea></TextArea>
          </Form.Item>

          <Form.Item
            label="Основной преподаватель курса"
            name="mainTeacherId"
            rules={[
              {
                required: true,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <Select>
              {props.users.map((value) => {
                return (
                  <Select.Option key={value.id} value={value.id}>
                    {value.fullName}
                  </Select.Option>
                );
              })}
            </Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalCreateCourse;
