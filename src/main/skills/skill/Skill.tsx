import React from "react";
import style from './Skill.module.css'

type skillProps = {
    title: string
    description: string
}

export const Skill = (props: skillProps) => {
    return (
        <div className={style.skill}>
            <div className={style.icon}></div>
            <h3 className={style.title}>{props.title}</h3>
            <span className={style.description}>{props.description}</span>
        </div>
    )
}