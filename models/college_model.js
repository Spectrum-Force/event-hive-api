import { timeStamp } from "console";
import { Schema, model } from "mongoose"
import { type } from "os"



const collegeSchema = new Schema({
    name: {
        type: String,
        required: true,

    },
    description: {
        type: String,
        required: true,

    },
    banner: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    rating: {
        type: Number,
        required: true,
    },
timeStamps: true,
}
);


const collegeModel = model("college", collegeSchema);

export default collegeModel;