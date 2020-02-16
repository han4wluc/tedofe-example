import Link from 'next/link';
import React from 'react';
import { List } from 'antd';
import { TedoListStore } from './TedoList.store';
import FlexView from 'react-flexview';

function TedoList(props: { store: TedoListStore }): any {
  const s = props.store;
  return (
    <List
      style={{ flex: 1 }}
      dataSource={s.tedos}
      renderItem={(item: any) => {
        return (
          <List.Item>
            <FlexView grow>
              <FlexView grow basis={200}>
                <Link href={`/tedo/${item.slug}`}>
                  <h3>{item.slug}</h3>
                </Link>
              </FlexView>
              <FlexView>
                <span>{'item.type'}</span>
              </FlexView>
            </FlexView>
          </List.Item>
        );
      }}
    />
  );
}

export default TedoList;
