import React from 'react'
import { useNavigate } from 'react-router'

function Add() {
    const [name, setName] = React.useState("")
    const [loading, setLoading] = React.useState("")
    const redirect = useNavigate()

  // Função para manipular o botão e enviar a requisição para o back
  // fetch para dar o post e atualizar nosso "banco de dados(db.json)"
  // Adiciona novo item a lista
  function handleSubmit(e) {
    e.preventDefault() // Previne trazer o valor default do form
    setLoading(true)
    fetch("http://localhost:4000/tvShows", {
      method: "POST",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ name: name }),
    }).then((response) => {       // Pega o parametro de resposta, confere se está ok e chama a função que atualiza
      if (response.ok) {
          redirect("/")
          setLoading(false)
      }

    });
  }
    
    return (
        <div>
            <form onSubmit={handleSubmit}>
              <label>Add a new movie </label>
                <input
                    placeholder="New Movie"
                    type="text"
                    value={name}
                    onChange={function (event) {
                        setName(event.target.value)
                    }} />
                {/* Expressão ternária usada para fazer um if(?) else(:) */}
                {loading ? <button disabled className="btnLoading">Loading...</button> : <button className="btnSubmit material-icons-outlined">done</button>}
            </form>
        </div>
    )
}

export default Add
