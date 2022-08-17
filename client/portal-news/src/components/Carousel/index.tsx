import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Data from '../../rawData.json';
import axios from 'axios';

const IP = 'localhost'
const port = 8000;

interface NewsPosts {
    id: number
    title: string;
    content: string;
    image_url: string;
}

function NewsCarousel() {

    const [posts, setPosts] = useState<Array<NewsPosts>>([]);

    const topPosts = Data.slice(0, 5);

    useEffect(() => {
        const fetchPosts = async () => {
            return await axios.get(`http://${IP}:${port}/news`);
        }

        fetchPosts().then((response) => setPosts(response.data)).catch((error) => console.error(error))

    }, [])

    return (
        <Carousel>
            {topPosts.length ? topPosts.map((post) => {
                return (
                    <Carousel.Item interval={1000}>
                        <img
                            className="d-block w-100 h-50"
                            src={post.image_url}
                            alt={post.title}
                        />
                        <Carousel.Caption>
                            <h3>{post.title}</h3>
                            <p>{post.content}</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                )
            }) : <h1>No content</h1>}
        </Carousel>
    );
}


export default NewsCarousel;