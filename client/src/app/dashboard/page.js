//* metrics dashboard view
"use client";

import React, { useEffect } from "react";
import { Stack } from "@mui/material";

import "../../app/global.css";

import RightPanel from "./rightPanel";
import Metrics from "./metrics";

import db from "../firebase";

function Dashboard() {
  const [data, setData] = React.useState(null);
  useEffect(() => {
    const postAnalysisRef = db.ref("/conversation/postAnalysis");

    // Fetch the data
    const fetchData = async () => {
      try {
        const snapshot = await postAnalysisRef.once("value");
        const data = snapshot.val();
        setData(data);
      } catch (error) {
        console.error("Error fetching data: ", error);
        // Handle the error according to your needs
      }
    };

    fetchData();
  }, []);
  const modalStyle = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 'auto', // Adjust the width as needed or keep it auto
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
    borderRadius: '12px',
    outline: 'none', // Removes the default focus outline
  };
  return data ? (
    <Stack
      width="100vw"
      height="100vh"
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      overflow="hidden"
      paddingY="30px"
      paddingRight="30px"
      paddingLeft="110px"
    >
      <Metrics data={data} />
      <RightPanel data={data} />
    </Stack>
  ) : (
    <Stack>
      <Button
        variant="contained"
        onClick={handleOpen}
        sx={{
          color: 'primary',
          fontSize: '14px',
          fontWeight: '800',
          boxShadow: 'none',
          borderRadius: '12px',
          padding: '8px 22px',
          textTransform: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        }}
      >
        Start session
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-title"
        aria-describedby="modal-description"
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box sx={modalStyle}>
          {/* Modal content goes here */}
          <p>Modal Content</p>
        </Box>
      </Modal>
    </Stack>
  );
}

export default Dashboard;
