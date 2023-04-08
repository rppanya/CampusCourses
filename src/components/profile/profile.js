import { Button, Form, Input, DatePicker } from "antd";
import "antd/dist/reset.css";
import Title from "antd/es/typography/Title";
import React from "react";
import { changeProfileInfoThunkCreator, getProfileInfoThunkCreator } from "../../reducers/auth-reducer";
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

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    let formData = {
        fullName: e.fullName,
        birthDate: e.birthDate
    } 
    this.props.changeProfileInfoThunkCreator(formData, this.props.auth.token)
  }

  render() {
    return (
      <Form
        //disabled={true}
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
          <Input placeholder={this.props.auth.user.fullName} />
        </Form.Item>

        <Form.Item label="Дата рождения">
          <DatePicker name="birthDate" placeholder={this.props.auth.user.birthDate} />
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
          <h1>{this.props.auth.user.email}</h1>
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
}

export default connect(mapStateToProps, { changeProfileInfoThunkCreator })(Profile);
