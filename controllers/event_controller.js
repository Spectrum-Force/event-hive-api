import { eventModel } from "../models/event_model.js";

export const postEvent = async (req, res, next) => {
    try {
        const addData = await eventModel.create({
            ...req.body,
            banner: req.file.filename
        });
        res.status(200).json(addData)
    } catch (error) {
        next(error)
    }
}

export const getEvents = async (req, res, next) => {
    try {
        const allEvents = await eventModel.find()
        res.status(200).json(allEvents)
    } catch (error) {
        next(error)
    }
}

export const getEvent = async (req, res, next) => {
    try {
        const event = await eventModel.findById(req.params.id)
        res.status(200).json(event)
    } catch (error) {
        next(error)
    }
}

export const patchEvent = async (req, res, next) => {
    try {
        const updatedEvent = await eventModel.findByIdAndUpdate(req.params.id)
        res.status(200).json(updatedEvent)
    } catch (error) {
        next(error)
    }
}

export const deleteEvent = async (req, res, next) => {
    try {
        const deleteData = await eventModel.findByIdAndDelete(req.params.id)
        res.status(200).json(`Event with ID ${req.params.id} has been deleted`)
    } catch (error) {
        next(error)
    }
}