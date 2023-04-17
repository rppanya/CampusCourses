import { Button, Form, Input } from "antd";
import "antd/dist/reset.css";

function LoginForm(props) {
  const handleSubmit = (data) => {
    let formData = {
      email: data.email,
      password: data.password,
    }
    props.loginThunkCreator(JSON.stringify(formData));
  };

  return (
    <Form
      name="login"
      labelCol={{ span: 8 }}
      wrapperCol={{
        span: 8,
      }}
      style={{
        marginTop: 40,
      }}
      onFinish={handleSubmit}
      autoComplete="off"
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[
          {
            required: true,
            message: "Введите email!",
          },
          {
            type: "email",
            message: "Некорректный email!"
          }
        ]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[
          {
            required: true,
            message: "Введите пароль!",
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        wrapperCol={{
          offset: 8,
          span: 8,
        }}
      >
        <Button type="primary" htmlType="submit">
          Войти
        </Button>
      </Form.Item>
    </Form>
  );
}

export default LoginForm;