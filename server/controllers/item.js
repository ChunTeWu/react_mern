import ItemData from '../models/items.js';
// here are the detail CRUD functions for routes 
// GET find items
export const getItems = async (req, res) => {
    try {
        //async finding result
        const allItems = await ItemData.find();
        // for detail http status: https://httpstatus.com/
        // 200 = ok
        // when find data return res data in the form of json
        res.status(200).json(allItems);
    } catch (error) {
        // 404 = not found
        res.status(404).json({message : error.message});
    }
}
// POST create an item
export const createItem = async (req, res) => {
    res.send('sadfsdf');
    // store all the request body into reqItem
    const reqItem = req.body;
    // pass the value into the Item that created in routes folder
    const newItem = new ItemData(reqItem);
    try {
        // async for waiting saving result
        await newItem.save();
        // 201 = created
        res.status(201).json(newItem);
    } catch (error) {
        // 409 = conflict
        res.status(409).json({message: error.message});
    }
}
// Delete item
export const deleteItem = async (req, res) =>{
    const id = req.params.id;
    try {
        await ItemData.findByIdAndRemove(id).exec();
        res.send('Item Deleted!');
    } catch (error) {
        console.log(error);
    }
}