
import React from 'react';

export default function PokeDex({cards}) {

    const cardItems = cards.map(card => {
        return <li>{card.name}</li>
    });

    return (
        <ul>
            {cardItems}
        </ul>
    );
}
