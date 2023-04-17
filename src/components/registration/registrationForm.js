import { Button, Form, Input, InputNumber, DatePicker, message } from "antd";
import "antd/dist/reset.css";
import React from "react";
import { date } from "../../helpers/date";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function RegistrationForm(props) {
  const handleSubmit = (e) => {
    let formData = {
      fullName: e.fullName,
      birthDate: e.birthDate,
      email: e.email,
      password: e.password,
      confirmPassword: e.confirmPassword,
    };
    props.registrationThunkCreator(JSON.stringify(formData));
  };

  return (
    <Form
      {...layout}
      name="nest-messages"
      onFinish={handleSubmit}
      labelCol={{ span: 8 }}
      wrapperCol={{
        span: 8,
      }}
      style={{
        marginTop: 40,
      }}
    >
      <Form.Item
        name="fullName"
        label="ФИО"
        rules={[
          {
            required: true,
            message: "Введите ФИО!",
          },
          {
            pattern: /^[А-Яа-я- ]+$/,
            message: "Некорректное ФИО!",
          },
        ]}
      >
        <Input />
      </Form.Item>
      <Form.Item
        label="Дата рождения"
        name="birthDate"
        rules={[
          {
            required: true,
            message: "Введите дату рождения!"
          },
        ]}
      >
        <DatePicker disabledDate={date.disabledDate}/>
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "Некорректный email!"
          },
          {
            required: true,
            message: "Введите email!"
          }
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
            message: "Введите пароль!"
          },
        ]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item
        label="Повторите пароль"
        name="confirmPassword"
        rules={[
          {
            required: true,
            message: "Повторите пароль!"
          }
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
          Зарегестрироваться
        </Button>
      </Form.Item>
    </Form>
  );
}

export default RegistrationForm;
