import mongoose from 'mongoose';

require('dotenv').config();
const key = process.env.KEY;

// Prepare to the database movies_db in the MongoDB server running locally on port 27017
mongoose.connect(
    `${key}`,
    { useNewUrlParser: true }
);

// Connect to to the database
const db = mongoose.connection;
// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});

/**
 * Define the schema
 */
 const info = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true },
    weight: { type: Number, required: true },
    unit: { type: String, required: true },
    date: { type: Date, required: true }
});

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model("User", info);

/**
 * Create a user
 * @param {String} name 
 * @param {Number} reps 
 * @param {Number} weight
 * @param {String} unit 
 * @param {Date} date 
 * @returns A promise. Resolves to the JSON object for the document created by calling save
 */
const createProfile = async (name, reps, weight, unit, date) => {
    const profile = new Exercise({ name: name, reps: reps, weight: weight, unit: unit, date: date })

    return profile.save();
}


/**
 * Retrive user info based on the filter, projection and limit parameters
 * @param {Object} filter 
 * @param {String} projection 
 * @param {Number} limit 
 * @returns 
 */
 const findExercises = async (filter, projection, limit) => {
    const query = Exercise.find(filter)
        .select(projection)
        .limit(limit);
    return query.exec();
}

/**
 * Replace the name, age, email, and phone number properties of the user with the id value provided
 * @param {string} _id
 * @param {Object} properties
 * @returns A promise. Resolves to the number of documents modified
 */
const replace = async (_id, properties) => {
    const result = await Exercise.findOneAndUpdate({_id: _id}, properties, {new: true})
    
    if (result == null)
        return error;

    else {
        return 1;
    }
}

/**
 * Replace the name, age, email, and phone number properties of the user with the id value provided
 * @param {string} _id
 * @returns A promise. Resolves to the number of documents modified
 */
 const deleteById = async (_id) => {
    const result = await Exercise.deleteMany({_id: _id});
    
    return result.deletedCount;
}

export {createProfile, findExercises, replace, deleteById};