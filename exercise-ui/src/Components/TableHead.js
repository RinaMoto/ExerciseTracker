import React from 'react';

function TableHead() {
    return (
        <tr>
            <th>Exercise</th>
            <th>Reps</th>
            <th>Weight</th>
            <th>Unit</th>
            <th>Date (YY-MM-DD)</th>
            <th>Edit</th>
            <th>Delete</th>
        </tr>
    );
}

export default TableHead;