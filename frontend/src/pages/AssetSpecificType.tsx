import React from "react";
import SectionHeader from "../components/common/SectionHeader";
import ActionButton from "../components/common/ActionButton";
import type { ColumnsType } from "antd/es/table";
import { Input, Space, Tag } from "antd";
import { ImportOutlined, SearchOutlined } from "@ant-design/icons";
import SectionTable from "../components/common/SectionTable";
interface AssetSpecificTypeProps {
  title?: string;
  subtitle?: string;
  actions?: React.ReactNode;
  majorClassId?: string;
  majorClassName?: string;
  description?: string;
  createdAt?: string;
  createdBy?: string;
  tableComponent?: React.ReactNode;
  token?: string;
}
const AssetSpecificType = (props: AssetSpecificTypeProps) => {
  const {
    title = "Asset Specific Types",
    subtitle = "List of all asset specific types",
  } = props;
  const columns: ColumnsType<AssetSpecificTypeProps> = [
    {
      title: "Specific Type ID",
      dataIndex: "specificTypeId",
      key: "specificTypeId",
    },
    {
      title: "Specific Type Name",
      dataIndex: "specificTypeName",
      key: "specificTypeName",
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
              label="Add New Specific Type"
              icon="+"
              token="primary"
            />,
            <ActionButton
              label="Import Specific Type"
              icon={<ImportOutlined />}
              token="contrast"
            />,
          ]}
        />
        <SectionTable columns={columns} />
      </Space>
    </>
  );
};
export default AssetSpecificType;
