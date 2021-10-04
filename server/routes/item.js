import express from 'express';
import { getItems, createItem, deleteItem } from '../controllers/item.js';
import item from '../models/items.js';
const router = express.Router();

//  CRUD settings, here you set .get, .post, .delete
router.get('/', getItems);
router.post('/', createItem);
router.delete('/:id', deleteItem);


export default router;