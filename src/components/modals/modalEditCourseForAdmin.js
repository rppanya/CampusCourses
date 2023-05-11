import { Button, Modal, Form, Radio, Select, Input } from "antd";
import TextArea from "antd/es/input/TextArea";

import { useState } from "react";

function ModalEditCourseForAdmin(props) {
  const [open, setOpen] = useState(false);
  const showModal = () => {
    setOpen(true);
  };
  const handleOk = (data) => {
    console.log("action", props.action);
    props.action(props.id, JSON.stringify(data));
    setOpen(false);
  };
  const handleCancel = () => {
    setOpen(false);
  };
  const [form] = Form.useForm();
  return (
    <div>
      <Button onClick={showModal}>Редактировать</Button>
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
        <Form form={form}>
          <Form.Item
            style={{ display: props.isAdmin ? null : "none" }}
            label="Название курса"
            name="name"
            rules={[
              {
                required: true,
                message: "Please input courses name!",
              },
            ]}
          >
            <Input
              placeholder="Новый курс"
              defaultValue={props.courseInfo.name}
              initialValue={props.courseInfo.name}
              value={props.courseInfo.name}
            />
          </Form.Item>

          <Form.Item
            style={{ display: props.isAdmin ? null : "none" }}
            label="Год начала курса"
            name="startYear"
            rules={[
              {
                required: true,
                message: "Please input start year!",
              },
            ]}
          >
            <Input
              placeholder="2023"
              defaultValue={props.courseInfo.startYear}
              value={props.courseInfo.startYear}
            />
          </Form.Item>

          <Form.Item
            style={{ display: props.isAdmin ? null : "none" }}
            label="Общее количество мест"
            name="maximumStudentsCount"
            rules={[
              {
                required: true,
                message: "Please input maximum students count!",
              },
            ]}
          >
            <Input
              placeholder="100"
              defaultValue={props.courseInfo.maximumStudentsCount}
              value={props.courseInfo.maximumStudentsCount}
            />
          </Form.Item>

          <Form.Item
            name="semester"
            label="Семестр"
            style={{ display: props.isAdmin ? null : "none" }}
          >
            <Radio.Group defaultValue={props.courseInfo.semester}>
              <Radio value="Autumn">Осенний</Radio>
              <Radio value="Spring">Весенний</Radio>
            </Radio.Group>
          </Form.Item>

          <Form.Item name="requirements" label="Требования">
            <TextArea
              defaultValue={props.courseInfo.requirements}
              value={props.courseInfo.requirements}
            ></TextArea>
          </Form.Item>

          <Form.Item name="annotations" label="Аннотации">
            <TextArea
              defaultValue={props.courseInfo.annotations}
              value={props.courseInfo.annotations}
            ></TextArea>
          </Form.Item>

          <Form.Item
            style={{ display: props.isAdmin ? null : "none" }}
            label="Основной преподаватель курса"
            name="mainTeacherId"
          >
            <Select
              defaultValue={props.courseInfo.mainTeacherId}
              value={props.courseInfo.mainTeacherId}
            >
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

export default ModalEditCourseForAdmin;
