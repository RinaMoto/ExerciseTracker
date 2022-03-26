import React from 'react';

import { BiEdit } from 'react-icons/bi';
import { MdDeleteOutline } from 'react-icons/md';


function Row({ info, onDelete, onEdit }) {
    return (
        <tr>
            <td>{info.name}</td>
            <td>{info.reps}</td>
            <td>{info.weight}</td>
            <td>{info.unit}</td>
            <td>{info.date.substring(2, 10)}</td>
            <td><BiEdit id="icon" onClick={() => onEdit(info)} /></td>
            <td><MdDeleteOutline id="icon" onClick={() => onDelete(info._id)} /></td>
        </tr>
    );
}

export default Row;