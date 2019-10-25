import React from 'react';
import Footer from '../Components/Footer';

function HomePage() {
    return (
        <>
        <section className="hero is-large">
           <div className="container hero-body">
             <h1 className="title" style={{fontSize:'5em', color:'white'}}>Jobs Hub</h1>
             <h2 className="subtitle" style={{color:'white'}}>
                 Bringing your <strong>dream Job</strong> one step closer 
             </h2>
           </div>
        </section>
        <Footer/>
        </>
    )
}

export default HomePage