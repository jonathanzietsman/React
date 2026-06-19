import { useState, useEffect } from 'react'
import axios from 'axios'

// Custom Hook that encapsulates analytical fetching behavior for any provided endpoint
const useAPI = endpoint => {
    // Internal local state cache allocated to hold returned API server content array arrays
    const [data, setData] = useState([]);

    // Triggers network data fetch once when the hosting component first loads onto the screen
    useEffect(() => {
        getData()
    }, []) // Empty dependency array [] acts as an on-mount trigger mechanism

    // Asynchronous network transaction handler
    const getData = async () => {
        const response = await axios.get(endpoint) // Resolves data stream fetch via axios GET request
        setData(response.data) // Updates hook state context with database file array content
    }

    // Exposes internal state variables directly to the utilizing target hook consumer
    return data
}

export default useAPI;