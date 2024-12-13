import React, {useEffect, useState} from 'react'

function ExibirDados(){
    const [dados,setDados]=useState([])

    useEffect(() =>{
        fetch('https://jsonplaceholder.typicode.com/posts')
        .then(response => response.json())
        .then(data => setDados(data))
    },[])
    
    return(
        <div>
            <h1>Posts</h1>
            <ul>
                {dados.map(posts => (
                    <li key={posts.id}>
                        <h2>{posts.title}</h2>
                        <p>{posts.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}



export default ExibirDados