import React from 'react';
import Router from 'next/router';
import nextCookie from 'next-cookies'
import SignInContainer from '~/containers/SignIn';

function SignIn(): any {
  return <SignInContainer />;
}

SignIn.getInitialProps = async (context: any) => {
  const { auth_token: authToken } = nextCookie(context);
  if (!!authToken) {
    if (typeof window === 'undefined') {
      context.res.writeHead(302, { Location: '/list' })
      context.res.end()
    } else {
      Router.push('/list');
    }
    return;
  }
  return {
    authToken,
  };
};

export default SignIn;
