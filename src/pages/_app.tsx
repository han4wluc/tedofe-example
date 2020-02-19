import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import NavigationBar from '~/containers/NavigationBar';

function MyApp(props: any): any {
  const { Component, pageProps = {} } = props;
  const { authToken } = pageProps;
  const username = authToken;
  const isLoggedIn = !!username;

  return (
    <Layout>
      <Header>
        <NavigationBar username={username} isLoggedIn={isLoggedIn} />
      </Header>
      <Content
        style={{
          minHeight: '800px',
          backgroundColor: 'white',
          padding: '24px',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        <Component {...pageProps} />
      </Content>
      <Footer>Footer</Footer>
    </Layout>
  );
}

export default MyApp;
