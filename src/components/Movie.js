import React from 'react'

function movies(props) {
    return (
            <li className="list">
                <p>
                    {props.name}
                </p>
                <div>
                    <button className="btnEdit material-icons-outlined" onClick={props.onUpdate}>edit</button>
                    <button className="btnDelete material-icons-outlined" onClick={props.onDelete}>delete</button>
                </div>
            </li>
    )
}

export default movies
