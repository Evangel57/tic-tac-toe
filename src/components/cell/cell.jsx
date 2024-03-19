import React from "react";

import styles from "./cell.module.css"


function Cell({index, value}) {
    return (
        <div id={index}  className={styles.cell}>
            
            {value}

        </div>
    )
}

export default Cell