import { useEffect, useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import Data from '../../rawData.json';
import axios from 'axios';
import { NewsPosts } from '../../App';
import { useRecoilState } from 'recoil';
import { postsState } from '../../recoil-states/atoms';


function NewsCarousel() {


    const [posts, setPosts] = useRecoilState<Array<NewsPosts>>(postsState);
    const topPosts = posts.slice(0, 5);

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