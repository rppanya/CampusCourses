import { useState } from "react";

import { Button, Modal, Form, Radio, Select, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

function ModalEditCourse(props) {
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
      <Button type="primary" onClick={showModal}>
        Редактировать
      </Button>
      <Modal
        title="Редактировать курс"
        open={open}
        okText="Сохранить"
        onOk={() => {
          form.validateFields().then((values) => {
            handleOk(values);
          });
        }}
        onCancel={handleCancel}
        cancelText="Отмена"
      >
        <Form
          form={form}
          onChange={() => {
            form.validateFields();
          }}
          initialValues={props.courseInfo}
        >
          <Form.Item
            style={{ display: props.isAdmin ? null : "none" }}
            label="Название курса"
            name="name"
            rules={[
              {
                required: props.isAdmin ? true : false,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <Input placeholder="Новый курс" />
          </Form.Item>

          <Form.Item
            style={{ display: props.isAdmin ? null : "none" }}
            label="Год начала курса"
            name="startYear"
            rules={[
              {
                required: props.isAdmin ? true : false,
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
            <Input placeholder="2023" id="startYear" type="number" />
          </Form.Item>

          <Form.Item
            style={{ display: props.isAdmin ? null : "none" }}
            label="Общее количество мест"
            name="maximumStudentsCount"
            rules={[
              {
                required: props.isAdmin ? true : false,
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
            <Input placeholder="100" id="maximumStudentsCount" type="number" />
          </Form.Item>

          <Form.Item
            name="semester"
            label="Семестр"
            style={{ display: props.isAdmin ? null : "none" }}
            rules={[
              {
                required: props.isAdmin ? true : false,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <Radio.Group defaultValue={props.courseInfo.semester}>
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
            style={{ display: props.isAdmin ? null : "none" }}
            label="Основной преподаватель курса"
            name="mainTeacherId"
            rules={[
              {
                required: props.isAdmin ? true : false,
                message: "Поле обязательно для заполнения!",
              },
            ]}
          >
            <Select
              options={props.users.map((value) => ({
                key: value.id,
                value: value.id,
                label: value.fullName,
              }))}
            ></Select>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
}

export default ModalEditCourse;
