import React from 'react'
import {useParams, useNavigate} from "react-router-dom"

function Update() {
    const [loading, setLoading] = React.useState("")
    const [nameToUpdate, setNameToUpdate] = React.useState("")
    const {id} = useParams()
    const redirect = useNavigate()
    // Função para atualizar/editar algum item da lista
    function handleUpdate(e) {
        e.preventDefault();
        setLoading(true)
        fetch("http://localhost:4000/tvShows/" + id, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ name: nameToUpdate }),
        }).then((response) => {       // Pega o parametro de resposta, confere se está ok e chama a função que atualiza
            if (response.ok) {
                redirect("/")
                setLoading(false)
            }
        })
    }

    return (
        <div>
            <form onSubmit={handleUpdate}>
                <label>Update the movie </label>
                <input
                    placeholder="Edit Movie"
                    type="text"
                    value={nameToUpdate}
                    onChange={function (event) {
                        setNameToUpdate(event.target.value)
                    }} />
                {loading ? <button disabled className="btnLoading">Loading...</button> : <button className="btnSubmit material-icons-outlined">done</button>}
            </form>
        </div>
    )
}

export default Update
