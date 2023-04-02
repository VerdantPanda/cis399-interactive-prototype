import {
  TextField,
  Box,
  Grid,
  Button,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemText,
  ListItemButton,
  ListItemIcon,
  Drawer,
} from '@mui/material/';

import { Container } from '@mui/system';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';

export default function Dashbaord() {
  return (
    <Container>
      <Grid container spacing={2}>
        <Grid item xs={4}>
          {/* <div>Compass Care Logo</div> */}
        </Grid>
        <Grid item xs={8}>
          <div>Today & Calander </div>
        </Grid>
        <Grid item xs={4}>
          <Nav />
        </Grid>
        <Grid item xs={8}>
          <div>
            Main Section
            <div>Incoming Patient Column</div>
            <div>Next Patient Column</div>
          </div>
        </Grid>
      </Grid>
    </Container>
  );
}

function Nav() {
  return (
    <div>
      {' '}
      <Drawer
        sx={{
          width: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '15%',
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box>
          <img
            width="50%"
            alt="compass care logo"
            src="https://www.freepnglogos.com/uploads/medicine-logo-png-1.png"
          />
        </Box>
        <Divider />

        <List>
          {['Home', 'Search', 'Messages', 'Reports', 'Patients'].map((text, index) => (
            <ListItem key={text} disablePadding>
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>

       
      </Drawer>
    </div>
  );
}
