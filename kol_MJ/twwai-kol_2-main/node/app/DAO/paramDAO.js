import mongoose from 'mongoose';
import uniqueValidator from 'mongoose-unique-validator';
import mongoConverter from '../service/mongoConverter';
import * as _ from "lodash";

const paramSchema = new mongoose.Schema({
    temp: {type: String},
    humidity: {type: String},
    pressure: {type: String},
    date: {type: String}
}, {
    collection: 'paramsMJ'
});
paramSchema.plugin(uniqueValidator);

const ParamModel = mongoose.model('paramsMJ', paramSchema);

async function query() {
    //funkcja pobierająca wszystkie wpisy
    const result = await ParamModel.find({});
    {
        if (result) {
            return mongoConverter(result);
        }
    }
}

export default {
    query: query,
    add: add,

    model: ParamModel
};
