import { Button, Form, Input, DatePicker } from "antd";
import "antd/dist/reset.css";
import Title from "antd/es/typography/Title";

const onFinish = (values) => {
  console.log("Success:", values);
};
const onFinishFailed = (errorInfo) => {
  console.log("Failed:", errorInfo);
};
const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

export default function Profile() {
  return (
    <Form
      disabled={true}
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{
        span: 8,
      }}
      style={{
        marginTop: 40,
      }}
      initialValues={{
        remember: true,
      }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Title level={3}>Профиль</Title>

      <Form.Item
        name={["user", "name"]}
        label="ФИО"
        rules={[
          {
            required: true,
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item label="Дата рождения">
        <DatePicker />
      </Form.Item>

      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            type: "email",
            message: "Please input your email!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="">
          Изменить
        </Button>
      </Form.Item>
    </Form>
  );
}
