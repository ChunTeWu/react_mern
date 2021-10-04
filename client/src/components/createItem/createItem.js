// edit the 'text file' demo template from materialUI
// need to import usestate if using hook
import React, {useState} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios';
// set style
const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));
// if using React function the function name needs to be Capital
export default function CreateItem() {
  const classes = useStyles();
  const [item, setItem] = useState({
    itemNumber: 0,
    itemType: "",
    itemName: "",
    itemPrice: 0
  });
  // sending data to backend using axios (npm isntall axios --save)
  const createItem = () => {
    axios.post('http://localhost:5000/items', item).then( () => {
      // after post the page will reload
      window.location.reload(false);
    });
  }
  return (
    // use a empty tag to wrap all the part
    <>
    <h2>Create Item</h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Item Number" variant="outlined" value={item.itemNumber} onChange={
        (e)=> setItem({...item, itemNumber: e.target.value})
      }/>
      <TextField id="outlined-basic" label="Item Type" variant="outlined" value={item.itemType} onChange={
        (e)=> setItem({...item, itemType: e.target.value})
      }/>
      <TextField id="outlined-basic" label="Item Name" variant="outlined" value={item.itemName} onChange={
        (e)=> setItem({...item, itemName: e.target.value})
      }/>
      <TextField id="outlined-basic" label="Item Price" variant="outlined" value={item.itemPrice} onChange={
        (e)=> setItem({...item, itemPrice: e.target.value})
      }/>
      <Button variant="contained" color="primary" onClick={createItem}>
        Create
      </Button>
    </form>
    </>
  );
}
