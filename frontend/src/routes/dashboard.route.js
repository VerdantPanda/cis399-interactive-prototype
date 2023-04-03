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
  Avatar,
  Drawer,
  Card,
  CardActionArea,
  CardActions,
  Stack,
  CardContent,
  Typography,
} from '@mui/material/';

import { Container } from '@mui/system';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';

export default function Dashbaord() {
  return (
    <Container
      sx={{ alignContent: 'center', alignSelf: 'center', textAlign: 'center' }}
    >
      {/* <Nav /> */}
      <Stack spacing={3}>
        <Box sx={{ width: '100%', height: '100%', backgroundColor: 'green' }}>
          <Calander />
        </Box>
        <Divider />
        <MainSection />
      </Stack>
    </Container>
  );
}

function Nav() {
  return (
    <Box sx={{ backgroundColor: 'red' }}>
      {' '}
      <Drawer
        sx={{
          width: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '15%',
            boxSizing: 'border-box',
            backgroundColor: 'orange',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Box
          sx={{
            width: '100px',
            height: '100px',
            scale: '1',
            // flexShrink: 0,

            alignSelf: 'center',
            // backgroundColor: 'blue',
          }}
        >
          <img
            width="100%"
            height="100%"
            alt="compass care logo"
            src="https://www.freepnglogos.com/uploads/medicine-logo-png-1.png"
            style={{ objectFit: 'fill' }}
          />
        </Box>
        <Divider />

        <Box
          sx={{
            alignSelf: 'center',
            textAlign: 'center',
            marginLeft: 'auto',
            marginRight: 'auto',
            alignContent: 'center',
          }}
        >
          <Stack direction="column" spacing={2}>
            <h2>Dr. Chu</h2>

            <Avatar sx={{ width: 56, height: 56, alignSelf: 'center' }}>
              DC
            </Avatar>

            <h3>Dermatologist</h3>
            <a href="#g">Edit personal information</a>
            <br />
          </Stack>
        </Box>

        <Divider />

        <List>
          {['Home', 'Search', 'Messages', 'Reports', 'Patients'].map(
            (text, index) => (
              <ListItem key={text} disablePadding>
                <ListItemButton>
                  <ListItemIcon>
                    {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                  </ListItemIcon>
                  <ListItemText primary={text} />
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>
      </Drawer>
    </Box>
  );
}

function Calander() {
  return (
    <Stack direction="row" padding={1}>
      <Card
        sx={{
          backgroundColor: 'skyblue',
          textAlign: 'start',
          minWidth: '200px',
          minHeight: '100px',
        }}
      >
        <h3>
          Today <br /> Wed 01 March
        </h3>
      </Card>
      {[
        { name: 'Patrick Gillmore', time: '10:30 - 11:00 AM' },
        { name: 'Kendrick Fiona', time: '11:00 - 11:30 AM' },
        { name: 'Micahel', time: '10:30 - 10:00 AM' },
        { name: 'John Stevenson', time: '10:30 - 10:00 AM' },
      ].map((elem) => (
        // <CardActionArea>
        <Card
          sx={{
            minWidth: '200px',
            minHeight: '100px',
            marginLeft: 'auto',
            marginRight: 'auto',
            borderBlockColor: 'blue',
          }}
          variant="outlined"
        >
          <h3>{elem.time}</h3>
          {elem.name}
        </Card>
        // {/* </CardActionArea> */}
      ))}
    </Stack>
  );
}

function MainSection() {
  return (
    <Box>
      <Stack spacing={4}>
        <Box sx={{ textAlign: 'left' }}>
          <h2>
            <b>Welcome, Dr. Chu</b>
          </h2>
          You have{' '}
          <span style={{ color: 'green' }}>
            <u>2 new messages</u>
          </span>{' '}
          and{' '}
          <span style={{ color: 'red' }}>
            <u>1 warning</u>{' '}
          </span>
          for an incoming patient.
        </Box>

        <Grid container spacing={1}>
          <Grid item xs={4}>
            <h2 style={{ textAlign: 'left' }}>Incoming Patient</h2>
            <PatientCard />
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ backgroundColor: 'ghostwhite' }}>
              <CardActionArea>
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography>
                    <h2>
                      <PriorityHighIcon sx={{ color: 'red' }} />
                      <b>Warning</b>
                    </h2>
                    Your next patient will come with an interpreter. Learn more
                    about their medical culture for better care.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained">Learn More</Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
            <h2 style={{ textAlign: 'left' }}>Next Patient</h2>
            <PatientCard />
          </Grid>
        </Grid>
      </Stack>

      {/* <div>
        Main Section
        <div>Incoming Patient Column</div>
        <div>Next Patient Column</div>
      </div> */}
    </Box>
  );
}

function PatientCard() {
  return (
    <Card sx={{ width: '350px', backgroundColor: 'ghostwhite' }}>
      <CardContent>
        <Stack spacing={2}>
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            textAlign="left"
          >
            <b>Wednesday, 01 March</b>
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            <AccessTimeIcon /> 10:30 - 11:00 - 30 mins <br />
          </Typography>
          <Typography variant="body2" color="text.secondary" textAlign="left">
            <LocationOnIcon /> 33-211 Bryn Mawr Rd, NA 11220
          </Typography>
          <CardActionArea>
            <Stack direction="row" spacing={5}>
              <Box>
                <Stack direction="row" spacing={2}>
                  <Avatar sx={{ width: 56, height: 56 }}>PG</Avatar>
                  <Typography
                    variant="body2"
                    color="text.secondary"
                    textAlign="left"
                  >
                    Patrick Gillmore
                    <br />
                    New Patient
                  </Typography>
                </Stack>
              </Box>
              <Button sx={{ height: 'auto' }} variant="contained">
                Overview
              </Button>
            </Stack>
          </CardActionArea>
        </Stack>
      </CardContent>
    </Card>
  );
}
