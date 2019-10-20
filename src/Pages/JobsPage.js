import React, { useEffect, useState } from 'react';
import Load from '../Components/Loader';

function JobsPage(props) {
    let { location, description } = props.location.state;
    const [jobs, setJobs] = useState(null);
    
    function strip_html_tags(str)
    {
        if ((str===null) || (str===''))
            return false;
        else
        str = str.toString();
        return str.replace(/<[^>]*>/g, '');
    }


    useEffect(() => { 
        fetch(`https://cors-anywhere.herokuapp.com/https://jobs.github.com/positions.json?description=${description}&location=${location}`, {
            headers: {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": '*'
            }
        }).then(x => x.json()).then(y => setJobs(y));
    }, [description, location])

    return (
            <div className="container is-fluid" id="jobs">
                <h1 className="title">
                    {
                        location ?
                        `Jobs in ${location}`:
                        'Jobs: '
                    }    
                 </h1>
            {
                jobs ?
                jobs.map((job) => 
                <div className="card" key={job.id}>
                    {/* <div className="card-image">
                        <figure className="image is-4by3">
                            <img src={job.company_logo} alt={job.company}/>
                        </figure>
                    </div> */}

                    <div className="card-content">
                        <div className="media">
                            <div className="media-left">
                                <figure className="image is-48x48">
                                    {
                                        job.company_logo ?
                                        <img src={job.company_logo} alt={job.company}/>
                                        :
                                        ''
                                    }
                                </figure>
                            </div>
                            <div className="media-content">
                                <p className="title is-4">{job.company}</p>
                                <p className="subtitle is-6">{job.title}, {job.type}, {job.location}</p>
                            </div>
                        </div>

                        <div className="content">
                            {strip_html_tags(job.description)}
                        </div>
                    </div>
                    <footer className="card-footer">


                    </footer>
                </div>
                )
                :
                <Load/>
            }
            </div>
    )
}

export default JobsPage;