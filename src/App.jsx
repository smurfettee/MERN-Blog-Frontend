import { useState } from 'react';
import './App.css';
import {Route, Routes} from "react-router-dom";
import Navbar from "./components/navbar";
import IndexComp from './components/indexxomp'
import Login from './components/login';
import About from './components/about';
import Register from './components/register';
import { UserContextProvider } from './components/userContext';
import NewPost from './components/NewPost';
import PostPage from './components/postPage';
import EditPost from './components/EditPost';

function App() {
  return (
    <UserContextProvider>
      <Routes>
        <Route index element={
          <>
            <Navbar/>
            <IndexComp/>
          </>
        }/>
        <Route path='/login' element={
          <>
            <Navbar/>
            <Login/>
          </>
        }/>
        <Route path='/register' element={
          <>
            <Navbar/>
            <Register/>
          </>
        }/>
        <Route path='/about' element={
          <>
            <Navbar/>
            <About/>
          </>
        }/>
        <Route path='/newpost' element={
          <>
            <Navbar/>
            <NewPost/>
          </>
        }/>
        <Route path='/post/:id' element={
          <>
            <Navbar/>
            <PostPage/>
          </>
        }/>
        <Route path='/edit/:id' element={
          <>
            <Navbar/>
            <EditPost/>
          </>
        }/>
      </Routes>
    </UserContextProvider>
  );
};

export default App;
