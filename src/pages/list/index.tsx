import React from 'react';
import { useStaticRendering } from 'mobx-react';
import { Divider, Button } from 'antd';
import FlexView from 'react-flexview';

import 'antd/dist/antd.css';

import TedoList from '~/containers/TedoList';
import CreateTedo from '~/containers/CreateTedo';

const isServer = typeof window === 'undefined';
// eslint-disable-next-line react-hooks/rules-of-hooks
useStaticRendering(isServer);

export default class Counter extends React.Component<any, any> {
  render(): any {
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
          <TedoList />
        </FlexView>
      </FlexView>
    );
  }
}
