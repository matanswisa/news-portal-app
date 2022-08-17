import Button from 'react-bootstrap/Button';
import Stack from 'react-bootstrap/Stack';

import React from 'react'
import NewsCarousel from '../Carousel';
import './landing.css';
import { Container } from 'react-bootstrap';

export default function LandingPage() {
    return (
        <>
            <div className="news-feed">
                <NewsCarousel />
                <Container>
                    <h1>Some other news</h1>
                </Container>
            </div>
        </>
    )
}
