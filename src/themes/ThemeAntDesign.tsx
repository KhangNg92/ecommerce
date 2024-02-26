'use client';

import { ConfigProvider } from 'antd';

import { COLORS } from '../common/colors';

const ThemeAntDesign = (props: { children: React.ReactNode }) => {
  console.log('load');
  return (
    <ConfigProvider
      theme={{
        token: {
          colorPrimaryBg: COLORS.primary,
          fontFamily: "'Poppins', sans-serif",
          colorPrimary: '#2A85FF',
          colorLink: COLORS.primary,
          // colorBgContainerDisabled: COLORS.colorBgContainerDisabled,
          // colorTextDisabled: COLORS.white,
        },
      }}
    >
      {props.children}
    </ConfigProvider>
  );
};

export default ThemeAntDesign;
