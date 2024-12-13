import React, { useState, useEffect } from "react";

function FetchDados() {
    const [users, setUsers] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
                setLoading(false)
            })
    }, [])

    return (
        <div>
            {loading ? <p>Carregando...</p> : (
                <ul>
                    {users.map((users) =>(
                        <li key={users.id}>{users.name}</li>
                    ))}
                </ul>
            )}
        </div>
    )
}

export default FetchDados