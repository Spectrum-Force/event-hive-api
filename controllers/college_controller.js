import { collegeModel } from "./model/college_model.js"



// create a new college
export const createCollege = async (req, res) => {
    const { name, description, banner, location, rating } = req.body;
    try {
        const newCollege = new collegeModel({
            name,
            description,
            banner,
            location,
            rating,
            user_id: req.user.id,
        });
        const savedCollege = await newCollege.save();

    } catch (error) {
        console.log(error);
        res.status(500).json({ error: "Failed to create college" });
    }
};

// Get all colleges 
export const getAllColleges = async (req, res) => {
    try {
        const colleges = await collegeModel.find();
        res.json(colleges);
    } catch (error) {
        next(error);
    }
};

// Get a single college
export const getCollege = async (req, res) => {
    try {
        const college = await collegeModel.findById(req.params.id);
        res.json(college);
    } catch (error) {
        next(error);
    }
};

// update a college
export const updateCollege = async (req, res) => {
    try {
        const college = await collegeModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.json(college);
    } catch (error) {
        next(error);
    }
};

// delete a college
export const deleteCollege = async (req, res) => {
    try {
        const college = await collegeModel.findByIdAndDelete(req.params.id);
        res.json(college);
    } catch (error) {
        next(error);
    }
}