import { Button, Form, Input, InputNumber, DatePicker } from "antd";
import "antd/dist/reset.css";
import React from "react";
import { campusCoursesApi } from "../../Api/campusCoursesApi";
import { registrationThunkCreator } from "../../reducers/auth-reducer";
import { connect } from "react-redux";

const layout = {
  labelCol: {
    span: 8,
  },
  wrapperCol: {
    span: 16,
  },
};

function mapStateToProps(state){ 
  return { auth: state.auth }
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

class RegistrationForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let formData = {
      fullName: e.fullName,
      birthDate: e.birthDate,
      email: e.email,
      password: e.password,
      confirmPassword: e.confirmPassword,
    };
    console.log(formData)
    this.props.registrationThunkCreator(JSON.stringify(formData))
  }

  render() {
    return (
      <Form
        {...layout}
        name="nest-messages"
        onFinish={this.handleSubmit}
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
          <DatePicker />
        </Form.Item>

        <Form.Item
          name="email"
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
          name="confirmPassword"
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
}

export default connect(mapStateToProps, { registrationThunkCreator })(RegistrationForm);
