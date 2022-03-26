import React from 'react';
import Table from '../Components/Table.js';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({ setExerciseToEdit}) {
    const history = useHistory();
    const [info, setInfo] = useState([]);

    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, { method: 'DELETE' });
        if (response.status === 204) {
            setInfo(info.filter(m => m._id !== _id));
        } else {
            console.error(`Failed to delete movie with id = ${_id}, status code = ${response.status}`);
        }
    }

    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise");
    }

    const loadInfo = async() => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setInfo(data);
    }

    useEffect(() => {
        loadInfo();
    }, []);

    return (
        <>
            <h2>Home</h2>
            <Table info={info} onDelete={onDelete}
                    onEdit={onEdit}></Table>
        </>
    );
}

export default HomePage;