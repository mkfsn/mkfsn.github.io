import React from "react"
import { Helmet } from "react-helmet"
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
            <Helmet>
                <meta name="google-site-verification" content="glBq2kB4AN8DIhnjIQm3n0dOxPf9NYcBQB8SPlBskQ4" />
            </Helmet>
        </main>
    );
}
