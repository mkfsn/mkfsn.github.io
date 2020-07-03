import React from "react"
import style from "./footer.module.css"

export default function Footer() {
    return (
        <footer className={style.footer}>
            <div>
                <span>&copy; { getYear() }</span>
            </div>
        </footer>
    )
}

function getYear() {
    return new Date().getFullYear();
}