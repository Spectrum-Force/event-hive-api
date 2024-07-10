import { Schema, model, Types } from "mongoose";

const eventSchema = new Schema ({
    name: {type: String, required: true},
    description: {type: String, required: true},
    collegeId: {type: Types.ObjectId, required: true},
    location: {type: String, required: true},
    date: {type: Date, required: true},
    tags: [{type: String}],
    type: {type: String, enum: ['online', 'offline']},
    banner: {type: String, required: true},
    createdBy: {type: Types.ObjectId, required: true}
}, {
    timestamps: true
});

export const eventModel = model('Event', eventSchema)