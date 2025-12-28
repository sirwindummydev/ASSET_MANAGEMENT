import Reac from "react";
import { Card, Row, Col, Typography, Space } from "antd";
import SectionHeader from "../components/common/SectionHeader";
import ActionButton from "../components/common/ActionButton";
import SectionTable from "../components/common/SectionTable";
import type { ColumnsType } from "antd/es/table";

import type { ReactNode } from "react";
import { ImportOutlined } from "@ant-design/icons";

interface AssetDomainProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}

const AssetDomain = (props: AssetDomainProps) => {
  const { title = "All Asset Domain", subtitle = "List of all assets domain" } =
    props;

  const columns: ColumnsType<AssetDomainProps> = [
    {
      title: "Domain ID",
      dataIndex: "domainId",
      key: "domainId",
    },
    {
      title: "Domain Name",
      dataIndex: "domainName",
      key: "domainName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Created At",
      dataIndex: "CreatedAt",
      key: "createdAt",
    },
    { title: "Created By", dataIndex: "createdBy", key: "createdBy" },
  ];

  return (
    <>
      <Space orientation="vertical" size="large" style={{ width: "100%" }}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          actions={[
            <ActionButton label="Add New Domain" icon="+" color="#fa8c16" />,
            <ActionButton
              label="Import Domain"
              icon={<ImportOutlined />}
              color="#092c4c"
            />,
          ]}
        />

        <SectionTable columns={columns} />
      </Space>
    </>
  );
};

export default AssetDomain;
