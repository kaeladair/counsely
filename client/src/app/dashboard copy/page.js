import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, Box, Typography, Divider, Container, Button } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import { PlayArrow as PlayArrowIcon } from '@mui/icons-material';
import RecordButton from './RecordButton.client';
import Sidebar from '@/components/Sidebar';

<Sidebar/>
function MainContent() {
  return (
    <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center', backgroundColor: 'white', borderRadius: '8px' }}>
      <Typography variant="h2" gutterBottom>
        Large Text Heading
      </Typography>
      <Divider variant="middle" />
      <Typography variant="body1" gutterBottom>
        Small Text Description
      </Typography>
      <Box sx={{ width: '80%', height: 200, borderRadius: '8px', my: 2, bgcolor: 'grey.300', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <RecordButton />
      </Box>
      <Box sx={{ width: '80%', height: 200, borderRadius: '8px', my: 2, bgcolor: 'grey.300' }} />
    </Box>
  );
}

function RightPanel() {
  return (
    <Box sx={{ width: '20%', height: 'calc(100vh - 32px)', p: 3, borderRadius: '8px' }}>
      <Box sx={{ borderRadius: '8px', my: 2, bgcolor: 'grey.300', height: '30%' }} />
      <Box sx={{ borderRadius: '8px', my: 2, bgcolor: 'grey.300', height: '30%' }} />
      <Box sx={{ borderRadius: '8px', my: 2, bgcolor: 'grey.300', height: '30%' }} />
    </Box>
  );
}

function Dashboard() {
  return (
    <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between', backgroundColor: 'white', width: '100%', height: '100%', margin: '0px' }}>
      <Sidebar />
      <MainContent />
      <RightPanel />
    </Container>
  );
}

export default Dashboard;