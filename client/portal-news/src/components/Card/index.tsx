import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Button from 'react-bootstrap/Button';
import { Navigate, useNavigate } from "react-router";
import { useState } from 'react';
import { useRecoilState } from 'recoil';
import { postsState } from '../../recoil-states/atoms';


function PostCard() {

    const navigate = useNavigate();

    const [posts, setPosts] = useRecoilState(postsState);

    return (

        <div style={{ margin: '10px' }}>
            <Row xs={1} md={2} className="g-4">
                {posts.map((post, idx) => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={post.image_url} />
                            <Card.Body>
                                <Card.Title>{post.title}</Card.Title>
                                <Card.Text>
                                    {post.content}
                                </Card.Text>
                                <Button onClick={() => {
                                    navigate(`/post/${post.id}`)
                                }}>Read More</Button>
                                <span style={{ display: 'block' }}>0 views</span>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
}

export default PostCard;