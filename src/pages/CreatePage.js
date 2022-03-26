import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import TableHead from '../Components/TableHead.js';

export const CreatePage = () => {

    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    const addExercise = async () => {
        const editedExercise = { name, reps, weight, unit, date };
        const response = await fetch(`/exercises`, {
            method: 'POST',
            body: JSON.stringify(editedExercise),
            headers: {
                'Content-Type': 'application/json',
            },

        });
        if (response.status === 201) {
            alert("Successfully added the exercise");
        } else {
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    };

    return (
        <div>
            <h2>Add exercise</h2>
            <table>
                <thead>
                    <TableHead />
                </thead>
                <tbody>
                    <tr>
                        <td><input
                            type="text"
                            value={name}
                            placeholder="name"
                            onChange={e => setName(e.target.value)} />
                        </td>
                        <td><input
                            type="number"
                            value={reps}
                            placeholder="# of reps"
                            onChange={e => setReps(e.target.value)} />
                        </td>
                        <td><input
                            type="number"
                            value={weight}
                            placeholder="weight"
                            onChange={e => setWeight(e.target.value)} />
                        </td>
                        <td><input
                            type="text"
                            value={unit}
                            placeholder="Add the unit of weight"
                            onChange={e => setUnit(e.target.value)} />
                        </td>
                        <td><input
                            type="date"
                            required pattern="\d{2}-\d{2}-\d{2}"
                            value={date.substring(0,10)}
                            onChange={e => setDate(e.target.value)} />
                        </td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
            <button
                id="add-button"
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default CreatePage;