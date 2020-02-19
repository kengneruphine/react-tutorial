import React, { Component } from 'react'

//creating simple component
const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>name</th>
                <th>Job</th>
            </tr>
        </thead>
    )
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td>
                <button onClick={()=> props.removeCharacter(index)}>Delete</button>
                </td>
            </tr>
        )
    })
    return <tbody>{rows}</tbody>
}

const Table = (props) => {
        const { characterData, removeCharacter } = props  //getting the data

        return (
            <table>
                <TableHeader />
                <TableBody characterData={characterData} removeCharacter={removeCharacter} />
            </table>
        )
}

export default Table