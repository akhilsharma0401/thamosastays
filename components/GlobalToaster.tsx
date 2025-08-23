// GlobalToaster.tsx
import React, { memo } from "react";
import type { CSSProperties } from "react";
import { Toaster } from "react-hot-toast";

const successStyle: CSSProperties = {
  color: "#000",
  background: "#ffffff",
  // padding: "10px 10px",
};

const GlobalToaster: React.FC = () => {
  return (
    <Toaster
      position="top-center"
      reverseOrder={false}
      toastOptions={{
        success: { style: successStyle },
        // error: { style: { background: "red", color: "#fff" } },
      }}
    />
  );
};

export default memo(GlobalToaster);
