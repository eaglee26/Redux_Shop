import React from 'react';
import { Layout, Menu, Button} from 'antd';

const { Header, Content } = Layout;

const  App = () => {
  return (
      <Layout>
          <Header>
              <Menu theme="dark" mode="horizontal">
                  <Menu.Item >nav 1</Menu.Item>
                  <Menu.Item >nav 2</Menu.Item>
                  <Menu.Item >nav 3</Menu.Item>
              </Menu>
          </Header>
          <Content>
              <Button type="danger">Danger</Button>
          </Content>
      </Layout>
  );
};

export default App;
