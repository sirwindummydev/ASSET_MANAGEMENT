import React from "react";
import type { ReactNode } from "react";
import { Row, Col, Typography, Divider } from "antd";
const { Title, Text } = Typography;

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
}

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  extra?: ReactNode;
  titleColor?: string;
  actions?: ReactNode;
}

const SectionHeader = (props: SectionHeaderProps) => {
  const { title, subtitle, extra, titleColor, actions } = props;
  return (
    <>
      <Row align="middle" justify="space-between">
        <Col>
          <Title
            level={2}
            style={{
              color: titleColor || "#fa8c16",
              paddingBottom: 0,
              marginBottom: 0,
            }}
          >
            {title}
          </Title>
          {subtitle && <Text type="secondary">{subtitle}</Text>}
        </Col>
        <Col style={{ marginTop: 50 }}>{actions}</Col>
      </Row>
      {/* <Divider /> */}
    </>
  );
};

export default SectionHeader;
