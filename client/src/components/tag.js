import React from "react";
import Chip from "@mui/material/Chip";

function Tag({ textColor, borderColor, tagName, backgroundColor }) {
  return (
    <Chip
      label={tagName}
      variant="outlined"
      sx={{
        color: textColor,
        backgroundColor: backgroundColor,
        border: borderColor,
        padding: "8px 6px",
        borderRadius: "12px",
        fontWeight: "600",
        fontSize: "14px",
      }}
    />
  );
}

export default Tag;
