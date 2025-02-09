import { GithubOutlined } from '@ant-design/icons';
import { DefaultFooter } from '@ant-design/pro-components';
import React from 'react';

const Footer: React.FC = () => {
  return (
    <DefaultFooter
      style={{
        background: 'none',
      }}
      links={[
        {
          key: 'User Center Frontend',
          title: 'User Center Frontend',
          href: 'https://github.com/tangfire/user-center-demo-frontend',
          blankTarget: true,
        },
        {
          key: 'github',
          title: <GithubOutlined />,
          href: 'https://github.com/tangfire',
          blankTarget: true,
        },
        {
          key: 'User Center Backend',
          title: 'User Center Backend',
          href: 'https://github.com/tangfire/user-center-demo',
          blankTarget: true,
        },
      ]}
    />
  );
};

export default Footer;
