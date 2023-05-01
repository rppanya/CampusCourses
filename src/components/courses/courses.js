import { useState } from "react";
import Course from "./course";
import { Button, Modal, Input, Form, Radio, Select } from "antd";
import TextArea from "antd/es/input/TextArea";

function Courses(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = () => {
  };
  const handleCancel = () => {
    setOpen(false);
  };
  console.log(props);
  return (
    <div>
      <h2 style={{ marginTop: "20px" }}>Группа - {props.name}</h2>
      <Button
        style={{ display: props.isAdmin ? "inline-block" : "none" }}
        onClick={showModal}
      >
        Создать группу
      </Button>
      <Modal
        title="Создать курс"
        open={open}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelText="Отмена"
      >
        <Form>
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
            <Input defaultValue="Новый курс" placeholder="Новый курс" />
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
            <Input defaultValue="2023" placeholder="2023" />
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
            <Input defaultValue="100" placeholder="100" />
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
              <Select.Option value="demo">Demo</Select.Option>
            </Select>
          </Form.Item>
        </Form>
      </Modal>
      
      {props.courses
        ? props.courses.map((element) => {
            return <Course course={element} key={element.id} />;
          })
        : null}
    </div>
  );
}

export default Courses;
