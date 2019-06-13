import React from 'react';
import { Button, Jumbotron } from 'reactstrap';

const Episode = ({ title, opening, director, producer, date }) => {
    return (
        <Jumbotron>
            <h1 className="display-3">{title}</h1>
            <p className="lead">{opening}</p>
            <hr className="my-2" />
            <p>{`Director: ${director}, Producer: ${producer}`}</p>
            <p>{`Release Date: ${date}`}</p>
            <p className="lead">
                <Button color="primary">Learn More</Button>
            </p>
        </Jumbotron>
    );
};

export default Episode;