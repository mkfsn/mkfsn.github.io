import React from "react";
import style from "./card.module.css";
import avatar from "../../static/avatar.png";
import {FaGithub, FaTwitter, FaLinkedin} from 'react-icons/fa';

function Card() {
    return (
        <div className={style.card}>
            <CardHeader/>
            <CardBody/>
        </div>
    );
}

function CardHeader() {
    return (
        <div className={style.cardHeader}>
            <Profile/>
            <IconList/>
        </div>
    )
}

function CardBody() {
    return (
        <div className={style.cardBody}>
        </div>
    )
}

function Profile() {
    return (
        <>
            <img src={avatar} alt="avatar" />
            <h2>
                Pei-ming Wu
                &nbsp;
                <small>aka mkfsn</small>
            </h2>
            <h5>@Taiwan</h5>
        </>
    )
}

function IconList() {
    const links = [
        {key: '2', icon: FaGithub, href: 'https://github.com/mkfsn'},
        {key: '3', icon: FaTwitter, href: 'https://twitter.com/mkfsn'},
        {key: '4', icon: FaLinkedin, href: 'https://linkedin.com/in/mkfsn'},
    ];
    return (
        <h4>
            {links.map((link) => (
                <a target="_blank" rel="noreferrer" href={link.href} key={link.key} className={style.link}>
                    <link.icon />
                </a>
            ))}
        </h4>
    )
}

export default Card