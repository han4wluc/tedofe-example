// import App from 'next/app'
import React from 'react';
import { Layout } from 'antd';
const { Header, Footer, Content } = Layout;
import FlexView from 'react-flexview';
import Link from 'next/link';

function MyApp({ Component, pageProps }: any): any {
  return (
    <Layout>
      <Header>
        <FlexView>
          <FlexView grow>
            <Link href="/list">
              <div style={{ color: 'white' }}>Tedos</div>
            </Link>
            <div style={{ color: 'white', marginLeft: 16 }}>Docs</div>
          </FlexView>
          <FlexView>
            <Link href="/signin">
              <div style={{ color: 'white' }}>Sign In</div>
            </Link>
            <Link href="/signup">
              <div style={{ color: 'white', marginLeft: 16 }}>Sign Up</div>
            </Link>
          </FlexView>
        </FlexView>
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
