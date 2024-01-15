
import Card from "@mui/material/Card";
import ListItem from "@mui/material/ListItem";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";
import Countdown from "./Countdown";
import Typography from "@mui/material/Typography";
import Age from '../Components/Age';
import Grid from '@mui/material/Grid';
import BackgroundLetterAvatars from "./Avatar";
import Box from "@mui/material/Box";

const EventCard = ({ birthday }) => {
    console.log(birthday)
    return (
      <ListItem sx={{display:'flex'}}>
        <Card sx={{width:'50%', margin:'auto', borderRadius:4}} m={4}>
          <CardContent>
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <Box sx={{display:'flex', justifyContent:'space-between'}}>
              <BackgroundLetterAvatars birthday={birthday} />
                <Typography gutterBottom variant="h4" component="div">
                  {birthday.name}
                </Typography>
                </Box>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.primary">
                  {birthday.birthday}
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.primary">
                  Countdown: 
                  <Countdown targetDate={birthday.birthday} />
                </Typography>
              </Grid>
              <Grid item xs={6}>
                <Typography variant="body2" color="text.primary">
                  Age:
                  <Age targetDate={birthday.birthday} />
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </ListItem>
    );
  };

export default EventCard;
