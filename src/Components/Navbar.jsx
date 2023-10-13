import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <nav className="navbar bg-body-tertiary">
                        <div className="container-fluid">
                            <Link className="navbar-brand fw-semibold" to="/">
                                <img src="/Images/profile.svg" alt="Logo" width="50" height="34" className="d-inline-block align-text-top" />
                                Saurabh
                            </Link>
                        </div>
                    </nav>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link active fw-normal" to="/projects">Projects</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-normal" to="/blogs">Blogs</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active fw-normal" to="/about">About</Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    )
}
