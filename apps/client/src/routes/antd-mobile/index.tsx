import React from "react";
import { Space, Button, Divider, Switch, Card } from "antd-mobile";

export const Store = () => {
  return (
    <div>
      <Space wrap>
        <Button color="primary">Primary</Button>
        <Button color="success">Success</Button>
        <Button color="danger">Danger</Button>
        <Button color="warning">Warning</Button>
        <Button loading color="primary" loadingText="正在加载">
          Loading
        </Button>
        <Button disabled color="primary">
          Disabled
        </Button>
      </Space>
      <Divider>默认内容在中间</Divider>
      <Divider contentPosition="left">左侧内容</Divider>
      <Divider contentPosition="right">右侧内容</Divider>
      <Switch />
      <Card title="卡片标题">卡片内容</Card>
    </div>
  );
};
