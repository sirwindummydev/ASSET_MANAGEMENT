import React from "react";
import SectionHeader from "../components/common/SectionHeader";
import ActionButton from "../components/common/ActionButton";
import type { ColumnsType } from "antd/es/table";
import { Input, Space, Tag } from "antd";
import { ImportOutlined, SearchOutlined } from "@ant-design/icons";
import SectionTable from "../components/common/SectionTable";
interface AssetCategoryProps {
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
const AssetCategory = (props: AssetCategoryProps) => {
  const {
    title = "Asset Categories",
    subtitle = "List of all asset categories",
  } = props;
  const columns: ColumnsType<AssetCategoryProps> = [
    {
      title: "Category ID",
      dataIndex: "categoryId",
      key: "categoryId",
    },
    {
      title: "Category Name",
      dataIndex: "categoryName",

      key: "categoryName",
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
            <ActionButton label="Add New Category" icon="+" token="primary" />,
            <ActionButton
              label="Import Categories"
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
export default AssetCategory;
