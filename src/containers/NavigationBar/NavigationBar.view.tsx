import React from 'react';
import { Popover } from 'antd';
import FlexView from 'react-flexview';
import Link from 'next/link';
import { INavigationBarStore } from './NavigationBar.store';

function SignOut(props: { onClickSignOut: any }): any {
  return <a onClick={props.onClickSignOut}>Sign out</a>;
}

function NavigationBar(props: {
  store: INavigationBarStore;
  username: string;
  isLoggedIn: string;
}): any {
  const { isLoggedIn, username } = props;

  const s = props.store;

  return (
    <FlexView>
      <FlexView grow>
        <Link href="/list">
          <div style={{ color: 'white' }}>Tedos</div>
        </Link>
        <div style={{ color: 'white', marginLeft: 16 }}>Docs</div>
      </FlexView>
      <FlexView>
        {!isLoggedIn && (
          <Link href="/signin">
            <div style={{ color: 'white' }}>Sign In</div>
          </Link>
        )}
        {!isLoggedIn && (
          <Link href="/signup">
            <div style={{ color: 'white', marginLeft: 16 }}>Sign Up</div>
          </Link>
        )}

        {isLoggedIn && (
          <Popover
            placement="bottom"
            content={<SignOut onClickSignOut={s.signOut} />}
            trigger="hover"
          >
            <div style={{ color: 'white', marginLeft: 16 }}>{username}</div>
          </Popover>
        )}
      </FlexView>
    </FlexView>
  );
}

export default NavigationBar;
