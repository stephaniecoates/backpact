import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const styles = {
  card: {
    width: 275,
    maxHeight: 170
  },
};

const itemButtonStyles = {
    color: 'black',
    maxHeight:'12px',
    fontSize: '9px'
}

function GearItem(props) {
  const { classes } = props;
  return (
      <div style={{margin: '15px'}}key={props.itemId}>
    <Card className={classes.card}>
      <CardActionArea>
          <div style={{display: 'flex'}}>
        <img style={{height: '80px', width: '80px', margin: '20px 10px 5px 10px'}} src={props.itemImage} alt={props.itemName}/>
        <div>
        <CardContent style={{padding: '10px 20px 0px 0px'}}>
          <Typography gutterBottom variant="subtitle1" component="h2">
            {props.itemName}
          </Typography>
          <Typography component="p" style={{fontSize: '10px', height: '75px', width: '160px', margin: 'auto'}}>
            {props.itemInfo}
          </Typography>
        </CardContent>
        </div>
        </div>
      </CardActionArea>
      <CardActions style={{justifyContent: 'space-evenly'}}>
        <Button href={props.learnMore} variant='text' target='_blank' style={itemButtonStyles} size="small">
          Learn More
        </Button>
        <Button href={props.shop} variant='text' target='_blank' style={itemButtonStyles} size="small">
          Shop
        </Button>
        {/* WRITE ADD TO PACK FN IN REDUX */}
        <Button onClick={true} variant='text' style={itemButtonStyles} size="small">
          Add to My Pack
        </Button>
      </CardActions>
    </Card>
    </div>
  );
}

GearItem.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(GearItem);