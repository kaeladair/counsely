import React from 'react';
import { Drawer, List, ListItem, ListItemIcon, Box, Typography, Divider, Container } from '@mui/material';
import HomeIcon from '@mui/icons-material/Home';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SettingsIcon from '@mui/icons-material/Settings';
import Tag from '../../components/tag';
// import {theme} from '../theme';

function Sidebar() {
  return (
    <Drawer variant="permanent" anchor="left" sx={{
      width: 240,
      flexShrink: 0,
      '& .MuiDrawer-paper': {
        width: 80,
        boxSizing: 'border-box',
        borderRadius: '16px',
        margin: '16px',
        position: 'relative',
        float: 'left',
        height: 'calc(100vh - 32px)'
      },
    }}>
      <List>
        <ListItem button sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: '50%',
          margin: '8px',
          padding: '8px',
          width: 'auto',
          height: 'auto',
        }}>
          <ListItemIcon sx={{ justifyContent: 'center' }}><HomeIcon /></ListItemIcon>
        </ListItem>
        <ListItem button sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: '50%',
          margin: '8px',
          padding: '8px',
          width: 'auto',
          height: 'auto',
        }}>
          <ListItemIcon sx={{ justifyContent: 'center' }}><AccountCircleIcon /></ListItemIcon>
        </ListItem>
        <ListItem button sx={{
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          borderRadius: '50%',
          margin: '8px',
          padding: '8px',
          width: 'auto',
          height: 'auto',
        }}>
          <ListItemIcon sx={{ justifyContent: 'center' }}><SettingsIcon /></ListItemIcon>
        </ListItem>
      </List>
    </Drawer>
  );
}

function MainContent() {

  return (
    // <ThemeProvider theme={theme}>
    <Box component="main" sx={{ flexGrow: 1, p: 3, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <Tag
        tagName='ADHD'
            textColor = '#D196D2'
            backgroundColor= '#FFE7FF'
            borderColor = '3px solid #D196D2'
          
      />

      <Typography variant="h2" gutterBottom>
        Large Text Heading
      </Typography>
      <Divider variant="middle" />
      <Typography variant="body1" gutterBottom>
        Small Text Description
      </Typography>
      <Box sx={{ width: '80%', height: 200, borderRadius: '8px', my: 2, bgcolor: 'grey.300' }} />
      <Box sx={{ width: '80%', height: 200, borderRadius: '8px', my: 2, bgcolor: 'grey.300' }} />
    </Box>
    // </ThemeProvider>
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
    <Container sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-between' }}>
      <Sidebar />
      <MainContent />
      <RightPanel />
    </Container>
  );
}

export default Dashboard;