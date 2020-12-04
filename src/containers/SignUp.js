import React from "react";

import { Link } from "react-router-dom";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, UserOutlined, LockOutlined } from "@ant-design/icons";

function SignUp() {
  const [form] = Form.useForm();
  const onSubmitSignUp = (values) => {
    console.log(values);
  };

  return (
    <div className="admin-app-wrap">
      <div className="admin-app-wrap-form">
        <Row justify="center">
          <Col span={12}>
            <h1 className="ad-font-s-20">Sing Up</h1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form
              form={form}
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onSubmitSignUp}
            >
              <Form.Item
                label="Email"
                initialValue="demo@example.com"
                tooltip="This is a required field"
                name="email"
                rules={[
                  {
                    type: "email",
                    required: true,
                    message: "The input is not valid E-mail!",
                  },
                ]}
              >
                <Input prefix={<MailOutlined />} placeholder="Correo..." />
              </Form.Item>
              <Form.Item className="ad-full-name-content m-0">
                <Form.Item
                  label="Full Name"
                  initialValue="Pablo Perez"
                  tooltip="This is a required field"
                  rules={[
                    {
                      required: true,
                      message: "The input is not valid Name",
                    },
                  ]}
                  name="fullname"
                >
                  <Input prefix={<UserOutlined />} placeholder="Name" />
                </Form.Item>
                <span
                  style={{
                    display: "inline-block",
                    width: "24px",
                    lineHeight: "32px",
                    textAlign: "center",
                  }}
                >
                  -
                </span>
                <Form.Item
                  label="City"
                  initialValue="Merida"
                  tooltip="This is a required field"
                  name="city"
                  rules={[
                    {
                      required: true,
                      message: "The input is not valid Last-Name",
                    },
                  ]}
                >
                  <Input prefix={<UserOutlined />} placeholder="Last Name" />
                </Form.Item>
              </Form.Item>
              <Form.Item
                label="Password"
                initialValue="demo#123"
                tooltip="This is a required field"
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item
                label="Repeat Password"
                initialValue="demo#123"
                tooltip="This is a required field"
                name="repeatpassword"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                  ({ getFieldValue }) => ({
                    validator(rule, value) {
                      if (!value || getFieldValue("password") === value) {
                        return Promise.resolve();
                      }
                      return Promise.reject(
                        new TypeError(
                          "The two passwords that you entered do not match!"
                        )
                      );
                    },
                  }),
                ]}
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Repeat Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item
                  name="checkbox"
                  valuePropName="checked"
                  rules={[
                    {
                      validator: (_, value) =>
                        value
                          ? Promise.resolve()
                          : Promise.reject(
                              new TypeError("something bad happened")
                            ),
                    },
                  ]}
                  noStyle
                >
                  <Checkbox>Remember me</Checkbox>
                </Form.Item>
                <Link to="">Forgot password?</Link>
              </Form.Item>
              <Form.Item className="m-0">
                <Button type="primary" htmlType="submit">
                  Sign Up
                </Button>
                <span className="pl-3 pr-3"> or </span>
                <Link to="/signin">Sign In</Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignUp;
