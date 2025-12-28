import React from "react";
import type { ReactNode } from "react";
import SectionHeader from "../components/common/SectionHeader";
import ActionButton from "../components/common/ActionButton";
import type { ColumnsType } from "antd/es/table";
import { Input, Space, Tag } from "antd";
import { ImportOutlined, SearchOutlined } from "@ant-design/icons";
import SectionTable from "../components/common/SectionTable";

interface AllAssetsProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
  assetId?: string;
  name?: string;
  category?: string;
  status?: string;
  branch?: string;
  department?: string;
  team?: string;
  assignedTo?: string;
  purchaseDate?: string;
  tableComponent?: ReactNode;
}

const AllAssets = (props: AllAssetsProps) => {
  const handleAddNewAsset = () => {
    return () => {
      console.log("Add New Asset clicked");
    };
  };
  const { title = "All Assets", subtitle = "List of all assets" } = props;

  const columns: ColumnsType<AllAssetsProps> = [
    {
      title: "Asset ID",
      dataIndex: "assetId",
      key: "assetId",
    },
    {
      title: "Asset Name",
      dataIndex: "assetName",
      key: "assetName",
    },
    {
      title: "Serial Number",
      dataIndex: "serialNumber",
      key: "serialNumber",
    },
    {
      title: "Category",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status: string) => {
        let color = "blue";
        if (status === "Available") {
          color = "green";
        } else if (status === "Assigned") {
          color = "orange";
        } else if (status === "Under Maintenance") {
          color = "red";
        }
        return <Tag color={color}>{status}</Tag>;
      },
    },
    {
      title: "Branch",
      dataIndex: "branch",
      key: "branch",
    },
    {
      title: "Department",
      dataIndex: "department",
      key: "department",
    },
    {
      title: "Team",
      dataIndex: "team",
      key: "team",
    },
    {
      title: "Assigned To",
      dataIndex: "assignedTo",
      key: "assignedTo",
    },
    {
      title: "Purchase Date",
      dataIndex: "purchaseDate",
      key: "purchaseDate",
    },
  ];

  return (
    <div>
      <Space direction="vertical" size="large" style={{ width: "100%" }}>
        <SectionHeader
          title={title}
          subtitle={subtitle}
          // actions={<ActionButton label="Add New Asset" icon="+" />}
          actions={[
            <ActionButton
              key="add"
              label="Add New Asset"
              icon="+"
              color="#fa8c16"
              onClick={handleAddNewAsset()}
            />,
            <ActionButton
              key="export"
              label="Import Assets"
              icon={<ImportOutlined />}
              color="#092c4c"
            />,
          ]}
        />
        <SectionTable columns={columns} />
      </Space>

      {/* <h1>{title}</h1>
      <p>{subtitle}</p>
      {actions} */}
    </div>
  );
};

export default AllAssets;
