import React, { useEffect, useState } from 'react'

function useFetchData(url, amount = undefined) {
    const [items, setItems] = useState(() => [])

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setItems(prev => prev = data))
            .catch(err => console.log(err.message))
    }, [])


    if (amount) {
        console.log(amount)
        return items.slice(0, amount)
    }

    return items
}

export default useFetchData
