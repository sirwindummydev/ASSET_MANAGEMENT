import React from "react";
import type { ReactNode } from "react";
import SectionHeader from "../components/common/SectionHeader";
import ActionButton from "../components/common/ActionButton";
import { icons } from "antd/es/image/PreviewGroup";

interface AllAssetsProps {
  title?: string;
  subtitle?: string;
  actions?: ReactNode;
}

const AllAssets = (props: AllAssetsProps) => {
  const {
    title = "All Assets",
    subtitle = "List of all assets",
    actions,
  } = props;
  return (
    <div>
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
          />,
          <ActionButton
            key="export"
            label="Export Assets"
            icon="⇩"
            color="#092c4c"
          />,
        ]}
      />

      {/* <h1>{title}</h1>
      <p>{subtitle}</p>
      {actions} */}
    </div>
  );
};

export default AllAssets;
