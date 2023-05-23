import React from "react";

import { Button, Form, Input, DatePicker } from "antd";
import "antd/dist/reset.css";

import { date } from "../../helpers/date";

function RegistrationForm(props) {
  const [form] = Form.useForm();
  const layout = {
    labelCol: {
      span: 8,
    },
    wrapperCol: {
      span: 8,
    },
  };

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
      form={form}
      {...layout}
      onFinish={handleSubmit}
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
            message: "Введите дату рождения!",
          },
        ]}
      >
        <DatePicker disabledDate={date.disabledDate} />
      </Form.Item>

      <Form.Item
        name="email"
        label="Email"
        rules={[
          {
            type: "email",
            message: "Некорректный email!",
          },
          {
            required: true,
            message: "Введите email!",
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
            message: "Введите пароль!",
          },
          {
            min: 6,
            max: 32,
            message: "Пароль должен содержать от 6 до 32 символов!",
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
            message: "Повторите пароль!",
          },
          ({ getFieldValue }) => ({
            validator(_, value) {
              if (!value || getFieldValue("password") === value) {
                return Promise.resolve();
              }
              return Promise.reject(new Error("Пароли не совпадают!"));
            },
          }),
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
