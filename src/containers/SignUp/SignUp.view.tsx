import { Form, Input, SubmitButton } from 'formik-antd';
import { Formik } from 'formik';
import { Card } from 'antd';
import React from 'react';
import Link from 'next/link';
import FlexView from 'react-flexview';
import { ISignUpStore } from './SignUp.store';

function SignUp(props: { store: ISignUpStore }): any {
  const s = props.store;
  return (
    <div>
      <Formik initialValues={{}} onSubmit={s.signUp}>
        <Form layout="vertical">
          <h2>Sign Up new account</h2>
          <Card style={{ width: 400 }}>
            <Form.Item key={'username'} name={'username'} label={'Username'}>
              <Input name={'username'} />
            </Form.Item>
            <Form.Item key={'email'} name={'email'} label={'email'}>
              <Input name={'email'} />
            </Form.Item>
            <Form.Item key={'password'} name={'password'} label={'Password'}>
              <Input name={'password'} />
            </Form.Item>
            <FlexView column>
              <SubmitButton loading={s.signUpIsLoading} disabled={false}>
                Sign Up
              </SubmitButton>
            </FlexView>
          </Card>
          <div style={{ marginTop: 16 }}>
            <span>{`Already have an account?`}</span>
            <span> </span>
            <Link href="/signin">
              <a>Sign In</a>
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default SignUp;
