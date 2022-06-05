import React, { useState } from "react";
import ImageURLs from "../constants/Urls";
import styles from "./ExpandingCards.module.css";

export const ExpandingCards = () => {

    const [ activeId, setActiveId ] = useState(1);

    const onClick = (id) => setActiveId(id);

    return (
        <div className={ styles.container }>
            {
                ImageURLs.map(card => (
                    <div
                        key={ card.id }
                        className={ `${styles.panel} ${activeId === card.id ? styles.active : ''}` }
                        onClick={ () => onClick(card.id) }
                        style={ { backgroundImage: `url(${card.url})` } }>
                        <h3 className={ styles.title }>{ card.title }</h3>
                    </div>
                ))
            }
        </div>
    );
};
