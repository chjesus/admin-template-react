import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";
import { Row, Col, Form, Input, Button, Checkbox } from "antd";
import { MailOutlined, LockOutlined } from "@ant-design/icons";

import { signIn, showLoader } from "../redux/actions/Auth";
function SignIn() {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const { authUser, loader } = useSelector(({ auth }) => auth);
  const history = useHistory();

  useEffect(() => {
    if (authUser !== null) {
      history.push("/");
    }
  });

  const onSubmitSignIn = (values) => {
    dispatch(showLoader());
    dispatch(signIn(values));
  };

  return (
    <div className="admin-app-wrap">
      <div className="admin-app-wrap-form">
        <Row justify="center">
          <Col span={12}>
            <h1 className="ad-font-s-20">Sign In</h1>
          </Col>
        </Row>
        <Row>
          <Col span={24}>
            <Form
              form={form}
              layout="vertical"
              initialValues={{ remember: true }}
              onFinish={onSubmitSignIn}
            >
              <Form.Item
                label="Email"
                initialValue="admin@akipartes.com"
                tooltip="This is a required field"
                rules={[
                  {
                    type: "email",
                    validator: false,
                    required: true,
                    message: "The input is not valid E-mail!",
                  },
                ]}
                name="email"
              >
                <Input prefix={<MailOutlined />} placeholder="Correo..." />
              </Form.Item>
              <Form.Item
                label="Password"
                initialValue="AdminAki2019-"
                tooltip="This is a required field"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!",
                  },
                ]}
                name="password"
              >
                <Input.Password
                  prefix={<LockOutlined />}
                  placeholder="Password"
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
                <Button type="primary" htmlType="submit" loading={loader}>
                  Sign In
                </Button>
                <span className="pl-3 pr-3"> or </span>
                <Link to="/signup">Sign Up</Link>
              </Form.Item>
            </Form>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default SignIn;
