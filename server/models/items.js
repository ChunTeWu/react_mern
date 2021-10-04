import mongoose from 'mongoose';
// how the data model will look like in mongoDB
const itemSchema = new mongoose.Schema({
    itemNumber: Number,
    itemType: {
        type: String,
        default: "unknownType"
    },
    itemName: String,
    itemPrice: Number
    // itemImg:{
    //     data: Buffer,
    //     contentType: String
    // },
    // section: {
    //     type: String,
    //     default: "unknownItem"
    // }
});

const item = new mongoose.model('item', itemSchema);

export default item;