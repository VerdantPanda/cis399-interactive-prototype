import { useState } from 'react';

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
  Modal,
  Checkbox,
} from '@mui/material/';

import { Container } from '@mui/system';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ErrorOutlineRoundedIcon from '@mui/icons-material/ErrorOutlineRounded';

import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function Dashbaord() {
  const [showPatientOverview, setPatientOverview] = useState(false);

  return (
    <Box sx={{ backgroundColor: 'azure', height: '100%' }}>
      <Nav />
      <Container
        sx={{
          textAlign: 'center',
          marginLeft: '14%',
          height: '100%',
        }}
      >
        <Stack>
          <Box sx={{ width: '100%', height: '100%', backgroundColor: 'azure' }}>
            <Calander />
          </Box>
          <Divider />
          {showPatientOverview ? (
            <PatientOverview setPatientOverview={setPatientOverview} />
          ) : (
            <MainSection setPatientOverview={setPatientOverview} />
          )}
          {/* <MainSection /> */}
          {/* <PatientOverview /> */}
        </Stack>
      </Container>
    </Box>
  );
}

function Nav() {
  return (
    <Box sx={{ backgroundColor: 'azure' }}>
      {' '}
      <Drawer
        sx={{
          width: '100%',
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: '15%',
            boxSizing: 'border-box',
            backgroundColor: 'azure',
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
    <Stack direction="row" padding={0}>
      <Card
        sx={{
          backgroundColor: 'skyblue',
          textAlign: 'start',
          minWidth: '200px',
          minHeight: '100px',
          paddingLeft: '10px',
        }}
      >
        <Typography>
          <h3>
            Today <br /> Wed 01 March
          </h3>
        </Typography>
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

function PatientOverview(props) {
  return (
    <Box>
      <br />
      <br />
      <Stack direction={'row'} spacing={5}>
        {' '}
        <Button
          variant="contained"
          onClick={() => {
            props.setPatientOverview(false);
          }}
        >
          Back
        </Button>
        <h2>Patient Overview</h2>
      </Stack>
      <br />
      <br />
      <Divider></Divider>
      <Grid container>
        <Grid item xs={12}>
          <Card
            sx={{
              alignContent: 'center',
              alignItems: 'center',
              alignSelf: 'center',
              padding: '10px',
              marginTop: '10px',
            }}
          >
            <Stack direction="row" spacing={1}>
              <Avatar sx={{ width: 56, height: 56 }}>PG</Avatar>
              <Typography
                variant="h7"
                color="text.secondary"
                textAlign="left"
                sx={{
                  alignSelf: 'center',
                }}
              >
                Gillmore, Patrick
              </Typography>
              <Grid container>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      alignSelf: 'center',
                    }}
                  >
                    <i>Gender</i>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      alignSelf: 'center',
                    }}
                  >
                    <i>DOB</i>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography
                    variant="subtitle2"
                    sx={{
                      alignSelf: 'center',
                    }}
                  >
                    <i>Address</i>
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">M</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">03/10/11995</Typography>
                </Grid>
                <Grid item xs={4}>
                  <Typography variant="subtitle2">
                    3101 Walnut St, Philadelphia, PA 19104
                  </Typography>
                </Grid>
              </Grid>
              <Button variant="contained">Send Message</Button>
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={8}>
          <h3>Medical History</h3>
          <Card>Kidney Disease</Card>
        </Grid>
        <Grid item xs={4}>
          <Card></Card>
        </Grid>
        <Grid item xs={6}>
          <h3>Medication</h3>
          <Card>
            <Stack>
              Wellbutrin, 150mg <br />
              Once a day
              <Divider />
            </Stack>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <h3>Imaging/Labs</h3>
          <Card>
            <h4>Past Results</h4>
            <TextField id="outlined-basic" label="Search" variant="outlined" />
            <Card>
              Basic Metabolic Panel
              <br />
              Reason: Annual Check Up
              <br />
              Date: 10/23/2021
            </Card>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
}

function MainSection(props) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [open2, setOpen2] = useState(false);
  const handleOpen2 = () => setOpen2(true);
  const handleClose2 = () => setOpen2(false);

  return (
    <Box sx={{ backgroundColor: 'azure', height: '100%', marginTop: '5px' }}>
      <Stack spacing={3}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <ModalContent2 handleClose={handleClose} />
        </Modal>
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
          </Grid>
          <Grid item xs={4}></Grid>
          <Grid item xs={4}>
            <h2 style={{ textAlign: 'left' }}>Next Patient</h2>
          </Grid>
          <Grid item xs={4}>
            <PatientCard setPatientOverview={props.setPatientOverview} />
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ backgroundColor: 'ghostwhite' }}>
              <CardActionArea>
                <CardContent sx={{ textAlign: 'left' }}>
                  <Typography>
                    <Stack direction="row" spacing={2}>
                      <ErrorOutlineRoundedIcon
                        sx={{ color: 'red', scale: '1.5' }}
                      />
                      <h2>
                        <b>Warning</b>
                      </h2>
                    </Stack>
                    Your next patient will come with an interpreter. Learn more
                    about their medical culture for better care.
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button variant="contained" onClick={handleOpen}>
                    Learn More
                  </Button>
                </CardActions>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={4}>
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

function PatientCard(props) {
  return (
    <Stack>
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
            {/* <CardActionArea> */}
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
              <Button
                sx={{ height: 'auto' }}
                variant="contained"
                onClick={() => {
                  console.log('test');
                  props.setPatientOverview(true);
                }}
              >
                Overview
              </Button>
            </Stack>
            {/* </CardActionArea> */}
          </Stack>
        </CardContent>
      </Card>

      <Card>
        <Card>
          <Stack>
            Wellbutrin, 150mg <br />
            Once a day
            <Divider />
          </Stack>
          <Button variant="outline"></Button>
        </Card>
      </Card>
    </Stack>
  );
}

function ModalContent1(props) {
  const [expanded, setExpanded] = useState(false);

  const smallText = (
    <div>
      <b>1. Holistic approach</b> <br />
      Japanese culture traditionally places a a strong emphasis on holistic
      approaches to health, which may include practices such as acupuncture,
      moxibustion, and herbal medicine herbal medicine. The patient may be more
      likely to seek out alternative or complementary therapies in addition to
      Western medicine...
      <br />
      <br />
      <Stack direction={'row-reverse'}>
        <Button
          variant="contained"
          onClick={() => {
            setExpanded(true);
          }}
        >
          {' '}
          Read more
        </Button>
      </Stack>
    </div>
  );

  const bigText = (
    <div>
      <b>1. Holistic approach</b> <br />
      Japanese culture traditionally places a a strong emphasis on holistic
      approaches to health, which may include practices such as acupuncture,
      moxibustion, and herbal medicine herbal medicine. The patient may be more
      likely to seek out alternative or complementary therapies in addition to
      Western medicine.
      <br />
      <br />
      <b>2. Respect for authority.</b> In Japan, there is a strong cultural
      emphasis on respect for authority figures. This may mean that the patient
      may be hesitant to ask questions or provide information that contradicts
      what the doctor has said.
      <br />
      <br />
      <b>3. Family.</b> In Japan, family plays a central role in many aspects of
      life, including healthcare decisions. The patient may involve their family
      members in their care or may rely on family members to translate or
      communicate for them.
      <br />
      <br />
      <b>4. Physical contact.</b> Some Japanese patients may be uncomfortable
      with physical contact or may prefer more formal interactions with their
      doctors.
      <br />
      <br />
      <b>5. Diet.</b> Traditional Japanese diets tend to be low in saturated fat
      and high in fish, vegetables, and rice. However, Japanese culture includes
      many processed and high sugar foods.
      <br />
      <br />
      <b>6. Stigma around mental health.</b> Mental health issues are often
      stigmatized in Japan, and patients may be hesitant to seek help for
      conditions such as depression or anxiety. Doctors may need to be
      especially sensitive to cultural attitudes and beliefs surrounding mental
      health.
    </div>
  );

  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        height: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',

        boxShadow: 24,
        p: 4,
        overflow: 'auto',
        borderRadius: '16px',
      }}
    >
      <Stack direction="row" spacing={2}>
        <ErrorOutlineRoundedIcon sx={{ color: 'red', scale: '2' }} />

        <Typography id="modal-modal-title" variant="h6" component="h2">
          About Patient Patrick Gillmore
        </Typography>
      </Stack>
      <Typography id="modal-modal-description" sx={{ mt: 2, height: 400 }}>
        It is important to note that individual beliefs and practices may vary,
        and that the patient's individual experiences and health history should
        always be taken into account.
        <br />
        <br />
        <Stack direction={'row'} spacing={2}>
          {' '}
          <Checkbox
            sx={{ scale: '1.4' }}
            onClick={() => {
              if (expanded) {
                props.handleClose();
              } 
            }}
          />
          <p>
            <b>I acknowledge that I've read the above information</b>
          </p>
        </Stack>
        <br />
        Please consider:
        <br />
        <br />
        <Box
          sx={{
            borderRadius: '16px',
            backgroundColor: 'Lavender',
            padding: '20px',
          }}
        >
          {expanded ? bigText : smallText}
        </Box>
        <br />
        {/* <Stack direction={'row-reverse'}>
          <Button variant="contained" onClick={props.handleClose}>
            Proceed
          </Button>
        </Stack>
        <br />
        <br /> */}
      </Typography>
    </Box>
  );
}

function ModalContent2(props) {
  return (
    <Box
      sx={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        maxHeight: 800,
        height: 'auto',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
        overflow: 'auto',
        borderRadius: '16px',
      }}
    >
      <ErrorOutlineRoundedIcon sx={{ color: 'red', scale: '1.5' }} />
      <h2>About Patient Patrick Gillmore</h2>
      <h4>
        Click the following items for more information about Japanese Medical
        Culture:
      </h4>

      {[
        {
          title: '1. Holistic approach',
          sum: 'Japanese culture traditionally places a strong emphasis on holistic approaches to health, which may include practices such as acupuncture, moxibustion, and herbal medicine  herbal medicine. The patient may be more likely to seek out alternative or complementary therapies in addition to Western medicine.',
        },

        {
          title: '2. Respect for authority',
          sum: 'In Japan, there is a strong cultural emphasis on respect   for authority figures. This may mean that the patient may be hesitant to ask questions or provide information that contradicts what the doctor has said.',
        },

        {
          title: '3. Family',
          sum: 'In Japan, family plays a centralrole in many aspects of life, including healthcare decisions. The patient may involve their family members in their care or may rely on family members to translate or communicate for them.',
        },

        {
          title: '4. Physical contact',
          sum: 'Some Japanese patients may be  uncomfortable with physical contact or may prefer more formal interactions with their doctors.',
        },

        {
          title: '5. Diet',
          sum: 'Traditional Japanese diets tend to be low in saturated fat and high in fish, vegetables, and rice. However, Japanese culture includes many processed and high sugar foods.',
        },

        {
          title: '6. Stigma around mental health',
          sum: 'Mental health issues are often stigmatized in Japan, and patients may be hesitant to seek help for conditions such as depression or anxiety. Doctors may need to be especially sensitive to cultural attitudes and beliefs surrounding mental health.',
        },
      ].map((elem) => {
        return (
          <Box>
            <Accordion>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography>
                  <b>{elem.title}</b>
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{elem.sum}</Typography>
              </AccordionDetails>
            </Accordion>
            <br />
          </Box>
        );
      })}

      <Stack direction={'row'}>
        {' '}
        <Checkbox />
        <p>I acknowledge that I've read the above information</p>
      </Stack>
      <Button variant="contained" onClick={props.handleClose}>
        Proceed
      </Button>
    </Box>
  );
}
