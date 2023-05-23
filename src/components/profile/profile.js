import { useState } from "react";

import { Button, Form, Input, DatePicker } from "antd";
import Title from "antd/es/typography/Title";
import "antd/dist/reset.css";

import { date } from "../../helpers/date";

function Profile(props) {
  const [disabledForm, changeDeisabledForm] = useState(true);
  const handleSubmit = (e) => {
    let formData = {
      fullName: e.fullName,
      birthDate: e.birthDate,
    };
    changeDeisabledForm(true);
    props.changeProfileInfoThunkCreator(formData);
  };

  return (
    <div>
      <Form
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
        onFinish={handleSubmit}
        disabled={disabledForm}
        fields={[
          {
            name: ["fullName"],
            value: props.account.user.fullName,
          },
          {
            name: ["birthDate"],
            value: date.formatDate(props.account.user.birthDate),
          },
        ]}
      >
        <Title level={3} style={{ textAlign: "center" }}>
          Профиль
        </Title>

        <Form.Item
          name="fullName"
          label="ФИО"
          rules={[
            {
              required: true,
            },
            {
              pattern: /^[А-Яа-я- ]+$/,
              message: "Некорректное ФИО!",
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Дата рождения" name="birthDate">
          <DatePicker disabledDate={date.disabledDate} format={"YYYY-MM-DD"} />
        </Form.Item>

        <Form.Item
          label="Email"
          name="email"
          rules={[
            {
              required: false,
              type: "email",
              message: "Please input your email!",
            },
          ]}
        >
          <p>{props.account.user.email}</p>
        </Form.Item>
        <Form.Item
          style={{
            justifyContent: "center",
            display: disabledForm ? "none" : "flex",
          }}
        >
          <Button type="primary" htmlType="submit">
            Сохранить Изменения
          </Button>
        </Form.Item>
      </Form>
      <Button
        type="primary"
        htmlType=""
        style={{
          margin: "auto",
          display: !disabledForm ? "none" : "block",
        }}
        onClick={() => changeDeisabledForm(false)}
      >
        Изменить
      </Button>
    </div>
  );
}

export default Profile;
