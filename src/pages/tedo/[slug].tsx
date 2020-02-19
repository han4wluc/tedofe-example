import React from 'react';
import FlexView from 'react-flexview';
import Router from 'next/router';
import nextCookie from 'next-cookies';
import TedoDetail from '~/containers/TedoDetail';
import { tedoService } from '~/services/api/TedoService';

function TedoPage(props: any = {}): any {
  const { tedo } = props;
  return (
    <FlexView column width="70%">
      <TedoDetail
        dependencies={{
          tedo,
        }}
      />
    </FlexView>
  );
}

TedoPage.getInitialProps = async (context: any) => {
  const { auth_token: authToken } = nextCookie(context);

  if (!authToken) {
    if (typeof window === 'undefined') {
      context.res.writeHead(302, { Location: '/signin' })
      context.res.end()
    } else {
      Router.push('/signin');
    }
    return;
  }
  const { slug } = context.query;
  const tedo = (await tedoService.fetchTedoBySlug(slug))['items'][0];
  return {
    isServerRendered: true,
    tedo,
    authToken,
  };
};

export default TedoPage;
