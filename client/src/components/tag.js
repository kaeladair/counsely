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
        padding: "18px 12px",
        borderRadius: "12px",
        fontWeight: "600",
        fontSize: "18px",
      }}
    />
  );
}

export default Tag;
