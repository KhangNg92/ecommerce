'use client';

import { ConfigProvider } from 'antd';

import { COLORS } from '../common/colors';

const ThemeAntDesign = (props: { children: React.ReactNode }) => {
  return (
    <ConfigProvider
      theme={{
        token: {
          fontFamily: "'Poppins', sans-serif",
          colorPrimary: COLORS.primary,
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
