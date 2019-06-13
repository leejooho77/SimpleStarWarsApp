import React from 'react';
import { Button, Card, CardBody, CardSubtitle, CardText, CardTitle } from 'reactstrap';
import { useFetch } from '../../util/useFetch';
import Loading from './Loading';

const Character = ({ name, height, mass, hair, skin, eye, birth, gender, species }) => {
    const [ data, loading ] = useFetch(species);

    return (!loading) ? 
        (
            <div>
                <Card>
                    <CardBody>
                        <CardTitle>{name}</CardTitle>
                        <CardSubtitle>{`Height: ${height}, Weight: ${mass}, Gender: ${gender}`}</CardSubtitle>
                        <CardText>{`Birth Year: ${birth}, Hair Color: ${hair}, Skin Color: ${skin}, Eye Color: ${eye},`}</CardText>
                        <Button color="primary">{data.name}</Button>
                    </CardBody>
                </Card>
            </div>
        ) :
        (
            <Loading />
        );
};

export default Character;