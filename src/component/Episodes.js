import React from 'react';
import Episode from './single_component/Episode';

const Episodes = ({ films }) => {
    films.sort((a, b) => {
        if (a.release_date > b.release_date) return 1;
        else return -1;
    });
    const episodes = films.map((film) => <Episode key={film.episode_id} title={film.title} opening={film.opening_crawl} director={film.director} producer={film.producer} date={film.release_date} />)
    return (
        <div>
            {episodes}
        </div>
    );
}

export default Episodes;