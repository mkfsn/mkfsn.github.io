import React from "react"

export default function Header() {
    return (
        <nav className="navbar navbar-expand navbar-light bg-light">
            <div className="container-fluid">
                <div className="collapse navbar-collapse justify-content-center">
                    <div className="navbar-nav">
                        <a className="nav-link" href="/blog">Blog</a>
                        <a className="nav-link" href="/resume">Resume</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}