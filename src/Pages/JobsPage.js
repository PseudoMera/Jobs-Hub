import React, { useEffect, useState } from 'react'
import axios from 'axios'

function JobsPage(props) {
    const { location, description } = props.location.state
    const [jobs, setJobs] = useState([])
    

    useEffect(() => {
        const handleRequest = async () => {
            await axios.get(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`).then((response) => {
             console.log(response.data)
             setJobs(response.data)
        })
       }

       handleRequest()
    }, [description, location])

    return (
        <>
        </>
    )
}

export default JobsPage;