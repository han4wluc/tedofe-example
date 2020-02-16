import { Form, Input, SubmitButton } from 'formik-antd';
import { Formik } from 'formik';
import { Card } from 'antd';
import React from 'react';
import Link from 'next/link';
import FlexView from 'react-flexview';

function SignIn(): any {
  return (
    <div>
      <Formik
        initialValues={{}}
        onSubmit={values => {
          console.warn(values);
        }}
      >
        <Form layout="vertical">
          <h2>Sign In into Tedo</h2>
          <Card style={{ width: 400 }}>
            <Form.Item key={'username'} name={'username'} label={'Username'}>
              <Input name={'username'} />
            </Form.Item>
            <Form.Item key={'password'} name={'password'} label={'Password'}>
              <Input name={'password'} />
            </Form.Item>
            <FlexView column>
              <SubmitButton loading={false} disabled={false}>
                Sign In
              </SubmitButton>
            </FlexView>
          </Card>

          <div style={{ marginTop: 16 }}>
            <span>{`Don't have an account yet?`}</span>
            <span> </span>
            <Link href="/signup">
              <a>Register now</a>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SignIn;
