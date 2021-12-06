import React from 'react'
import Movie from '../Movie';
import {useNavigate} from "react-router-dom"

function Home() {
    const [data, setData] = React.useState([])
    const redirect = useNavigate()
    
    // Função para deletar algum item da lista
    function handleDelete(id) {
      fetch("http://localhost:4000/tvShows/" + id, {
        method: "DELETE"
      }).then((response) => {
        if (response.ok) {
          fetchMovies()
        }
      })
    }
  
    // Função que busca a resposta do db para listar os filmes no componente movie
    function fetchMovies() {
      fetch("http://localhost:4000/tvShows")
        // Callback do fetch chamado por uma função que traz o parametro de resposta
        .then(function (response) {
          return response.json()
        }).then(function (json) {
          setData(json)
        }).catch(function (err) {
          console.log(err);
        })
    }

    // Efeito para atualizar os campos da tela      
    React.useEffect(function () {
        fetchMovies()
      }, [])
    return (
        <div>
            <ul>
                {/* Usamos o atributo map que é uma função dentro de todo array, que tem acesso para fazer laços de repetição */}
                {/* Por padrão recebe um callback que recebe um item (vai receber cada linha do nosso banco de dados) */}
                {data.map(function (item) {
                    // É preciso dar um return para ele renderizar nosso componente
                    return (
                        <Movie name={item.name} id={item.id} onDelete={function () {
                            return handleDelete(item.id)
                        }} onUpdate={function () {
                            redirect ("update/"+item.id);
                        }} />
                    )
                })}
            </ul>
        </div>
    )
}

export default Home
