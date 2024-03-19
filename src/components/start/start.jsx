import React from "react";
import styles from "./start.module.css"
import imgCross from "./img/cross.png"
import imgZero from "./img/zero.png"
import { useState } from "react";
import Field from "../field/field";

function EnterName( {playerInfo, handlePlayerInfo}) {

    const [nameX, setNameX] = useState("");
    const [nameY, setNameY] = useState("");

    const handleSetNameX = (event) => {
        setNameX(event.target.value)
    }
    const handleSetNameY = (event) => {
        setNameY(event.target.value)
    }

    const handleChecking = () => {

        if (nameX === "" || nameY === "") {
            alert("Enter name")
        } else {
            console.log("данные в playerInfo")
            handlePlayerInfo(nameX, nameY)
        }
    }
    console.log(playerInfo.x)
    console.log(playerInfo.y)

    console.log(playerInfo)
    return (
        
        playerInfo.x !== "" && playerInfo.y !== "" 
        ? 
        <div>
            <div className={styles.names}>
                <p className={styles.text}>{playerInfo.x.nameX} <span className={styles.colortext}> vs </span> {playerInfo.y.nameY}</p>
            </div>
            <Field value={playerInfo} onClick={handleChecking} /> 
        </div>
        :

        <div className={styles.container}>
            <div className={styles.block}>
                <div className={styles.img}>
                    <img src={imgCross} onClick />
                    <img src={imgZero} />
                </div>
                <div>  
                    <input type="text" placeholder="Enter name for X" className={styles.input} value={nameX} onChange={handleSetNameX} />
                    <input type="text" placeholder="Enter name for Y" className={styles.input} value={nameY} onChange={handleSetNameY}/>
                </div>
                <div>
                    <button onClick={handleChecking} className={styles.button}>Enter</button>
                </div>
                </div>
        </div>

        
    )
       
}

export default EnterName