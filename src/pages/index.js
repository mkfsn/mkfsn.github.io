import React from "react"
import Header from "../components/header"
import Card from "../components/card"
import Footer from "../components/footer"
import style from "./index.module.css"

export default function Home() {
    return (
        <main className={style.main}>
            <Header />
            <Card />
            <Footer />
        </main>
    );
}
