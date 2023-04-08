import { Button, Form, Input } from "antd";
import "antd/dist/reset.css";
import React from "react";
import { connect } from "react-redux";
import { getProfileInfoThunkCreator, loginThunkCreator } from "../../reducers/auth-reducer";

function mapStateToProps(state){ 
  return { auth: state.auth }
};

class LoginForm extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let formData = {
        email: e.email,
        password: e.password
    } 
    this.props.loginThunkCreator(JSON.stringify(formData))
  }

  onChange(e) {
    var newState = {};
    newState[e.target.name] = e.target.value;
    this.setState(newState);
  }

  render() {
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
        initialValues={{
          remember: true,
        }}
        onFinish={this.handleSubmit}
        autoComplete="off"
      >
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
          label="Password"
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
            offset: 8,
            span: 8,
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
 
export default connect(mapStateToProps, { loginThunkCreator, getProfileInfoThunkCreator })(LoginForm);
