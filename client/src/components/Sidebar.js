function Sidebar() {
    return (
        <Box width="240px" height="100%">
        <List>
          <ListItem
            button
            sx={{
              display: 'grid',
              placeContent: 'center',
              width: '50px',
              height: '50px',
              borderRadius: '12px'
            }}
          >
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <HomeIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem
            button
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "50%",
              margin: "8px",
              padding: "8px",
              width: "auto",
              height: "auto",
            }}
          >
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <AccountCircleIcon />
            </ListItemIcon>
          </ListItem>
          <ListItem
            button
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              borderRadius: "50%",
              margin: "8px",
              padding: "8px",
              width: "auto",
              height: "auto",
            }}
          >
            <ListItemIcon sx={{ justifyContent: "center" }}>
              <SettingsIcon />
            </ListItemIcon>
          </ListItem>
        </List>
      </Box>
    );
  }
  export default Sidebar