import * as exercises from './model.mjs';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.static('public'));
app.use(express.urlencoded({extended: true}));
app.use(express.json());


// Post method
app.post('/exercises', (req, res) => {
    exercises.createProfile(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(exercise => {
            res.status(201).json(exercise);
        })
        .catch(error => {
            console.error(error);

            res.status(500).json({ Error: 'Request Failed'});
        })
})

// get method
app.get('/exercises', (req, res) => {
    let filter = {}
    exercises.findExercises(filter, '', 0)
        .then(exercise => {
            res.status(200).json(exercise);
        })
        .catch(error => {
            console.error(error);

            res.status(500).json({ Error: 'Request Failed'});
        })
    
})

// put method
app.put('/exercises/:id', (req, res) => {
    const filter = {...req.body};
    exercises.replace(req.params.id, filter)
    .then(numUpdated => {
        if (numUpdated === 1) {
            res.status(200).json({ _id: req.params.id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date });
        } else {
            res.status(404).json({ Error: 'Resource not found' });
        }
    })
    .catch(error => {
        console.error(error);

        res.status(500).json({ Error: 'Request Failed'});
    })

})

// delete method
app.delete('/exercises/:id', (req, res) => {
    exercises.deleteById(req.params.id)
    .then(deleted => {
        if (deleted === 1) {
            res.status(204).json(deleted);
        } else {
            res.status(404).json({ Error: 'Resource not found' });
        }
    })
    .catch(error => {
        console.error(error);

        res.status(500).json({ Error: 'Request Failed'});
    })
})



app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});