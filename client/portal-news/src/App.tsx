import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import LandingPage from './components/LandingPage';
import AppNavbar from './components/Navbar';
import axios from 'axios';
import { RecoilRoot, useRecoilState } from 'recoil';
import { postsState } from './recoil-states/atoms';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import NewsPostPage from './components/NewsPage';


export interface NewsPosts {
  id: number
  title: string;
  content: string;
  image_url: string;
}


const IP = '127.0.0.1';
const PORT = 8000;

function App() {

  const [post, setPosts] = useRecoilState(postsState);

  useEffect(() => {
    const fetchPosts = async () => {
      return await axios.get(`http://${IP}:${PORT}/news`);
    }
    fetchPosts().then((response) => setPosts(response.data)).catch((error) => console.error(error))
  }, [])



  return (
    <>
      <RecoilRoot>
        <AppNavbar />
        <Router>
          <Routes>
            <Route path="/" element={<LandingPage />}></Route>
            <Route path="/post/" element={<NewsPostPage />}></Route>
          </Routes>
          <LandingPage />

        </Router>
      </RecoilRoot>
    </>
  );
}

export default App;
