import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import Typography from '@material-ui/core/Typography';
import Amazonp from './images/Ap.png';
import compt from './images/comp.png';
import laptop from './images/laptop.jpg';
import mobile from './images/mobile.png';
import shopping from './images/shopping.jpg';
import tv from './images/tv.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    
      },
      paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
      },
      cardsize :{
         
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '50%',
        maxHeight: '50%',
      },
}));

export default function AutoGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
         {/* <Container maxWidth="xl" component="div" style={{ backgroundColor: '#cfe8fc', height: '67vh' }}> */}
       
    <Grid container spacing={1} >
 
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={compt }/>
          <Typography variant="body2" color="textSecondary" component="p">
            Computer
          </Typography>
        </CardContent>
        
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={laptop}/>
          <Typography variant="body2" color="textSecondary" component="p">
          Laptop
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={mobile}/>
          <Typography variant="body2" color="textSecondary" component="p">
           Mobile
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
      </Grid>
     
   
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={tv}/>
          <Typography variant="body2" color="textSecondary" component="p">
        TVs
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={tv}/>
          <Typography variant="body2" color="textSecondary" component="p">
        TVs
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
      </Grid>
      <Grid item xs={3} md={2} lg={2}>
      <Card className={classes.root}>
      <CardActionArea>

        <CardContent>
        <img className={classes.img} src={tv}/>
          <Typography variant="body2" color="textSecondary" component="p">
        TVs
          </Typography>
        </CardContent>
       
      </CardActionArea>
    </Card>
      </Grid>
      
   
  
      
   
    </Grid>
    {/* <BottomNav/> */}
    {/* </Container> */}
  </div>
  );
}