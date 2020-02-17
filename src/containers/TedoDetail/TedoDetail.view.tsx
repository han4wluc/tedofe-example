import React from 'react';
import FlexView from 'react-flexview';
import { Form, Input, SubmitButton } from 'formik-antd';
import { Formik } from 'formik';
import { ITedoDetailStore } from './TedoDetail.store';
import { Tabs } from 'antd';

const { TabPane } = Tabs;

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

function TedoList(props: { store: ITedoDetailStore }): any {
  const s = props.store;
  if (s.tedoLoading) {
    return null;
  }
  return (
    <div>
      <Formik
        initialValues={{
          ...s.tedo,
          variablesFormat: JSON.stringify(s.tedo.variablesFormat, null, 2),
        }}
        onSubmit={values => {
          const finalValues = {
            ...values,
            variablesFormat: JSON.parse(values.variablesFormat),
          };
          console.warn('submit', finalValues);
          s.updateTedo(finalValues);
        }}
      >
        <Form layout="vertical" {...formItemLayout}>
          <FlexView grow vAlignContent="center">
            <FlexView>
              <h1>{s.tedo.slug}</h1>
            </FlexView>
            <FlexView marginLeft="auto">
              <Form.Item name="_" {...tailFormItemLayout}>
                <SubmitButton loading={false} disabled={false}>
                  Save
                </SubmitButton>
              </Form.Item>
            </FlexView>
          </FlexView>
          {/* <Form.Item key={'slug'} name={'slug'} label={'Slug'}>
                <Input name={'slug'} />
              </Form.Item> */}
          <Form.Item
            key={'description'}
            name={'description'}
            label={'Description'}
          >
            <TextArea name={'description'} />
          </Form.Item>
          {/* <Form.Item key={'type'} name={'type'} label={'Type'}>
                <Input name={'type'} />
              </Form.Item> */}
          <Form.Item
            key={'renderFunction'}
            name={'renderFunction'}
            label={'Render Function'}
          >
            <Input name={'renderFunction'} />
          </Form.Item>
          <Tabs animated={false}>
            <TabPane key="template" tab="Template">
              <Form.Item key={'template'} name={'template'}>
                <TextArea
                  name={'template'}
                  autoSize={{
                    minRows: 20,
                  }}
                />
              </Form.Item>
            </TabPane>
            <TabPane key="format" tab="Format">
              <Form.Item key={'variablesFormat'} name={'variablesFormat'}>
                <TextArea
                  name={'variablesFormat'}
                  autoSize={{
                    minRows: 20,
                  }}
                />
              </Form.Item>
            </TabPane>
            {/* <TabPane key="samples" tab="Samples"></TabPane> */}
          </Tabs>
        </Form>
      </Formik>
    </div>
  );
}

export default TedoList;
