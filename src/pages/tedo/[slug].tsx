import React from 'react';

import { useRouter } from 'next/router';
import FlexView from 'react-flexview';

import TedoDetail from '~/containers/TedoDetail';

export default function Tedo(): any {
  const router = useRouter();
  const { slug } = router.query;

  if (slug === undefined) {
    return null;
  }

  return (
    <FlexView column width="70%">
      <TedoDetail />
    </FlexView>
  );
}
