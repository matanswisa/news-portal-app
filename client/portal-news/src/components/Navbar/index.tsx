import React from 'react'
import { Container, Navbar } from 'react-bootstrap'

export default function AppNavbar() {
    return (
        <Navbar bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">
                    News App
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}
