import React from 'react';

function About({ user }) {
    return (
        <div>
            <h1 className="about-title">{user?.about?.address}</h1>
            <p className="about-description">{user?.about?.description}</p>
            <p className="about-email">{user?.about?.email}</p>
        </div>
    );
}

export default About;
