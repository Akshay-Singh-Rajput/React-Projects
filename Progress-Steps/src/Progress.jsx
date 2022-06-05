import React, { useState } from "react";
import styles from "./progress.module.css";

export const Progress = () => {
    const [ activeId, setActiveId ] = useState(1);

    const handlePrev = () => {
        if (activeId === 1) return;
        setActiveId(activeId - 1);
    };

    const handleNext = (e) => {
        if (activeId === 4) return;
        setActiveId(activeId + 1);
    };

    const progress = {
        width: (activeId - 1) / 3 * 100 + '%'
    };
    return (
        <>
            <div className={ styles.container }>
                <div className={ styles.progressContainer }>
                    <div className={ styles.progress } style={ progress }></div>
                    <div
                        className={ `${styles.circle} ${activeId === 1 ? styles.active : ""
                            }` }
                    >
                        1
                    </div>
                    <div
                        className={ `${styles.circle} ${activeId === 2 ? styles.active : ""
                            }` }
                    >
                        2
                    </div>
                    <div
                        className={ `${styles.circle} ${activeId === 3 ? styles.active : ""
                            }` }
                    >
                        3
                    </div>
                    <div
                        className={ `${styles.circle} ${activeId === 4 ? styles.active : ""
                            }` }
                    >
                        4
                    </div>
                </div>
                <button className={ styles.btn } disabled={ activeId === 1 ? true : false } id="prev" onClick={ handlePrev }>
                    Prev
                </button>
                <button className={ styles.btn } disabled={ activeId === 4 ? true : false } id="next" onClick={ handleNext }>
                    Next
                </button>
            </div>
        </>
    );
};
