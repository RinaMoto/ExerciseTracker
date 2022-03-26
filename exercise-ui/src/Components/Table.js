import React from 'react';
import Row from './Row.js';
import TableHead from './TableHead.js';

function Table({ info, onDelete, onEdit }) {
    return (
        <table id="info">
            <thead>
                <TableHead />
            </thead>
            <tbody>
                <>
                {info.map((info, i) => <Row info={info}
                    onDelete={onDelete}
                    onEdit={onEdit}
                    key={i} />)}
                </>
            </tbody>
        </table>
    );
}

export default Table;
