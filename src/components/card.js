import React from "react";
import style from "./card.module.css";
import avatar from "../../static/avatar.png";

export default function Card() {
    return (
        <div className={style.card}>
            <div className={style.cardHeader}>
                <img src={avatar} alt="avatar" />
                <h2>
                    Pei-ming Wu
                    &nbsp;
                    <small>aka mkfsn</small>
                </h2>
                <h5>@Taiwan</h5>
            </div>
            <div className={style.cardBody}>
            </div>
        </div>
    );
}