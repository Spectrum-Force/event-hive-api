import { Router } from "express";
import { deleteEvent, getEvent, getEvents, patchEvent, postEvent } from "../controllers/event_controller.js";
import { remoteUpload } from "../middlewares/upload.js";

// Create a router
const eventRouter = Router();

// Define routes
eventRouter.get('/events', getEvents);
eventRouter.get('/events/:id', getEvent);
eventRouter.post('/events', remoteUpload.single('banner'), postEvent);
eventRouter.patch('/events/:id', patchEvent);
eventRouter.delete('/events/:id', deleteEvent);