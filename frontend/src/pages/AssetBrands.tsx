import React from "react";
import SectionHeader from "../components/common/SectionHeader";
import ActionButton from "../components/common/ActionButton";
import type { ColumnsType } from "antd/es/table";
import { Input, Space, Tag } from "antd";
import { ImportOutlined, SearchOutlined } from "@ant-design/icons";
import SectionTable from "../components/common/SectionTable";

interface AssetBrandsProps {
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
const AssetBrands = (props: AssetBrandsProps) => {
  const { title = "Asset Brands", subtitle = "List of all asset brands" } =
    props;
  const columns: ColumnsType<AssetBrandsProps> = [
    {
      title: "Brand ID",
      dataIndex: "brandId",
      key: "brandId",
    },
    {
      title: "Brand Name",
      dataIndex: "brandName",
      key: "brandName",
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
            <ActionButton label="Add New Brand" icon="+" token="primary" />,
            <ActionButton
              label="Import Brand"
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
export default AssetBrands;
