import React from 'react';
import { Button, Modal } from 'antd';
import { ICreateTedoStore } from './CreateTedo.store';
import { Formik } from 'formik';
import { Form, Input, SubmitButton } from 'formik-antd';

const { TextArea } = Input;

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 16 },
  },
};

const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 6,
    },
  },
};

function CreateTedo(props: { store: ICreateTedoStore }): any {
  const s = props.store;
  return (
    <React.Fragment>
      <Button onClick={s.showCreateTedoModal} type="primary">
        Create Tedo
      </Button>
      <Modal
        title="Create Tedo"
        onCancel={s.hideCreateTedoModal}
        visible={s.modalVisible}
        footer={null}
      >
        <Formik
          initialValues={{}}
          onSubmit={values => {
            // const finalValues = {
            //   ...values,
            //   variablesFormat: JSON.parse(values.variablesFormat),
            // };
            // console.warn('submit', finalValues);
            // s.updateTedo(finalValues);
            s.createTedo(values);
          }}
        >
          <Form layout="vertical" {...formItemLayout}>
            <Form.Item key={'slug'} name={'slug'} label={'Slug'}>
              <Input name={'slug'} />
            </Form.Item>
            <Form.Item key={'label'} name={'label'} label={'Label'}>
              <Input name={'label'} />
            </Form.Item>
            <Form.Item
              key={'description'}
              name={'description'}
              label={'Description'}
            >
              <TextArea name={'description'} />
            </Form.Item>
            <Form.Item name="_" {...tailFormItemLayout}>
              <SubmitButton loading={false} disabled={false}>
                Save
              </SubmitButton>
            </Form.Item>
          </Form>
        </Formik>
      </Modal>
    </React.Fragment>
  );
}

export default CreateTedo;
