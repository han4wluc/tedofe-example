import { useState } from 'react';

export const defaultAuthData = {
  isLoggedIn: false,
  username: null,
};

const key = 'auth';

function _getAuthData() {
  if (process.browser) {
    console.warn('bbbb')
    const data = window.localStorage.getItem(key);
    if (!data) {
      return defaultAuthData;
    }
    return JSON.parse(data);
  }
  return defaultAuthData;
}

function _setAuthData(data: any) {
  if (process.browser) {
    console.warn('aaaa')
    window.localStorage.setItem(key, JSON.stringify(data));
    return data;
  }
  return data;
}

function useAuth() {
  const [authData, setAuthData] = useState<any>(_getAuthData());
  console.warn('authData', authData);
  return {
    isLoggedIn: authData.isLoggedIn,
    username: authData.username,
    setAuthData: (data: any) => {
      _setAuthData(data);
      setAuthData(data);
    },
  };
}

export default useAuth;
