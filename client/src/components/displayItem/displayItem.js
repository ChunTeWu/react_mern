// edit the "table" demo template from materialUI
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from 'axios';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

// set style
const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

export default function ShowItemTable() {
  const classes = useStyles();
  const [itemList, setItemList] = useState([]);
  const deleteItem = (id) => {
    // use ` because we need to pass in some value
    axios.delete(`http://localhost:5000/items/${id}`).then(() => {
      window.location.reload(false);
    });
  }
  // useEffect is a react hook which calls itself when page load or reload
  useEffect(() => {
    // promise function for get function set all item after get the data
    axios.get('http://localhost:5000/items').then((allItems) =>{
      setItemList(allItems.data);
    })
  }, [])
  return (
    <>
    <h2>All Items</h2>
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Item Name</TableCell>
            <TableCell align="right">Item Number</TableCell>
            <TableCell align="right">Item Type</TableCell>
            <TableCell align="right">Price</TableCell>
            <TableCell align="right">Action</TableCell>

          </TableRow>
        </TableHead>
        <TableBody>
          {itemList.map((item, key) => (
            <TableRow key={key}>
              <TableCell component="th" scope="row">
                {item.itemName}
              </TableCell>
              <TableCell align="right">{item.itemNumber}</TableCell>
              <TableCell align="right">{item.itemType}</TableCell>
              <TableCell align="right">{item.itemPrice}</TableCell>
              {/* use icon by installing npm install @material-ui/icons */}
              <TableCell align="right">
                <IconButton aria-label="delete" className={classes.margin} onClick={() => deleteItem(item._id)}>
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
    </>
  );
}
