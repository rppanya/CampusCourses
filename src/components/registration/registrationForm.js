import { Button, Form, Input, InputNumber, DatePicker } from "antd";
import "antd/dist/reset.css";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

const validateMessages = {
  required: "${label} is required!",
  types: {
    email: "${label} is not a valid email!",
    number: "${label} is not a valid number!",
  },
  number: {
    range: "${label} must be between ${min} and ${max}",
  },
};

const onFinish = (values) => {
  console.log(values);
};

export default function RegistrationForm() {
  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={onFinish}
      labelCol={{ span: 8 }}
      wrapperCol={{
        span: 8,
      }}
      style={{
        marginTop: 40,
      }}
      validateMessages={validateMessages}
    >
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
        name={["user", "email"]}
        label="Email"
        rules={[
          {
            type: "email",
          },
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Повторите пароль"
        name="password"
        rules={[
          {
            required: true,
            message: "Please input your password!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item
        wrapperCol={{
          ...layout.wrapperCol,
          offset: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
}
