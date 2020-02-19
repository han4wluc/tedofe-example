import React from 'react';
import { Divider } from 'antd';
import FlexView from 'react-flexview';

import 'antd/dist/antd.css';
import Router from 'next/router';

import nextCookie from 'next-cookies'

import TedoList from '~/containers/TedoList';
import CreateTedo from '~/containers/CreateTedo';
import { tedoService } from '~/services/api/TedoService';

function List(props: any = {}): any {
  return (
    <FlexView column width="70%">
      <FlexView grow vAlignContent="center">
        <FlexView>
          <h1>Tedos</h1>
        </FlexView>
        <FlexView marginLeft="auto">
          <CreateTedo />
        </FlexView>
      </FlexView>
      <Divider />
      <FlexView hAlignContent="center">
        <TedoList
          dependencies={{
            tedos: props.tedos,
            isServerRendered: props.isServerRendered,
          }}
        />
      </FlexView>
    </FlexView>
  );
}

List.getInitialProps = async (context: any) => {
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

  const tedos = (await tedoService.fetchTedos())['items'];
  return {
    isServerRendered: true,
    tedos,
    authToken,
  };
};

export default List;
