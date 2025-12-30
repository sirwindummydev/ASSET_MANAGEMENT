import React from "react";
import SectionHeader from "../components/common/SectionHeader";
import ActionButton from "../components/common/ActionButton";
import type { ColumnsType } from "antd/es/table";
import { Input, Space, Tag } from "antd";
import { ImportOutlined, SearchOutlined } from "@ant-design/icons";
import SectionTable from "../components/common/SectionTable";
interface AssetMajorClassProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  majorClassId?: string;
  majorClassName?: string;
  description?: string;
  createdAt?: string;
  createdBy?: string;
  tableComponent?: React.ReactNode;
}
const AssetMajorClass = (props: AssetMajorClassProps) => {
  const {
    title = "Asset Major Classes",
    subtitle = "List of all asset major classes",
  } = props;
  const columns: ColumnsType<AssetMajorClassProps> = [
    {
      title: "Major Class ID",
      dataIndex: "majorClassId",
      key: "majorClassId",
    },
    {
      title: "Major Class Name",
      dataIndex: "majorClassName",
      key: "majorClassName",
    },
    {
      title: "Description",
      dataIndex: "description",
      key: "description",
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
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
          token="primary"
          actions={[
            <ActionButton
              label="Add New Major Class"
              icon="+"
              token="primary"

              //   color="#fa8c16"
            />,
            <ActionButton
              label="Import Major Class"
              icon={<ImportOutlined />}
              token="contrast"
              //   color="#092c4c"
            />,
          ]}
        />
        <SectionTable columns={columns} />
      </Space>
    </>
  );
};

export default AssetMajorClass;
