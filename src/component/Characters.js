import React, { Component } from 'react';
import Character from './single_component/Character';
import Loading from './single_component/Loading';

class Characters extends Component {
    constructor() {
        super();
        this.state = {
            characters: []
        }
    }

    componentDidMount() {
        fetch('https://swapi.co/api/people/?page=1')
            .then(response => response.json())
            .then(resp => this.setState({ characters: resp.results }))
            .catch(error => console.log(error));
    }

    render() {
        const characters = this.state.characters.map((character, i) => <Character key={i} name={character.name} height={character.height} mass={character.mass} hair={character.hair_color} skin={character.skin_color} eye={character.eye_color} birth={character.birth_year} gender={character.gender} species={character.species} />);
        return (characters) ?  
            (
                <div>
                    {characters}
                </div>
            ) :
            (
                <Loading />
            );                      
    };
}

export default Characters;