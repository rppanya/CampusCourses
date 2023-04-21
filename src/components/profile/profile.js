import { Button, Form, Input, DatePicker } from "antd";
import "antd/dist/reset.css";
import Title from "antd/es/typography/Title";
import { useState } from "react";
import { date } from "../../helpers/date";

function Profile(props) {
  const [disabledForm, changeDeisabledForm] = useState(true);


  const handleSubmit = (e) => {
    let formData = {
      fullName: e.fullName,
      birthDate: e.birthDate,
    };
    changeDeisabledForm(true)
    props.changeProfileInfoThunkCreator(formData);
  };

  return (
    <div>
      <Form
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
        <Title level={3}>Профиль</Title>

        <Form.Item
          name="fullName"
          label="ФИО"
          rules={[
            {
              required: true,
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Дата рождения" name="birthDate">
          <DatePicker disabledDate={date.disabledDate}
          format={"YYYY-MM-DD"}
          />
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
            display: disabledForm ? "none" : "inline-block",
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
          margin: "10px",
          display: !disabledForm ? "none" : "inline-block",
        }}
        onClick={() => changeDeisabledForm(false)}
      >
        Изменить
      </Button>
    </div>
  );
}

export default Profile;
