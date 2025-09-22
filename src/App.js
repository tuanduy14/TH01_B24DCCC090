import React, { useState } from 'react';
import ToDoList from './component/ToDoList/ToDoList';
import ColorPicker from './component/ColorPicker/ColorPicker';
import ShoppingCart from './component/ShoppingCart/ShoppingCart';
import RenderPost from './component/RenderPost/RenderPost';
import Quiz from './component/Quiz/Quiz';
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  NavLink,
  useNavigate,
  Navigate,
} from "react-router-dom";



function App() {
  return (
    <div>
       <BrowserRouter>
        <nav style={{
          display: "flex", 
          justifyContent: "center",
          alignItems: "center"
        }}>
          
          
          
          <Link to="/ToDoList" style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            fontSize: "16px",
            padding: "12px 20px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            letterSpacing: "1px"
          }}>Bài 1</Link>
          
          <Link to="/ColorPicker" style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            fontSize: "16px",
            padding: "12px 20px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            letterSpacing: "1px"
          }}>Bài 2</Link>
          
          <Link to="/ShoppingCart" style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            fontSize: "16px",
            padding: "12px 20px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            letterSpacing: "1px"
          }}>Bài 3</Link>
          
          <Link to="/RenderPost" style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            fontSize: "16px",
            padding: "12px 20px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            letterSpacing: "1px"
          }}>Bài 4</Link>
          
          <Link to="/Quiz" style={{
            textDecoration: "none",
            color: "black",
            fontWeight: "600",
            fontSize: "16px",
            padding: "12px 20px",
            borderRadius: "8px",
            transition: "all 0.3s ease",
            letterSpacing: "1px"
          }}>Bài 5</Link>
        </nav>
        
        <Routes>
          <Route path="/ToDoList" element={<ToDoList />} />
          <Route path="/ColorPicker" element={<ColorPicker />} />
          <Route path="/ShoppingCart" element={<ShoppingCart />} />
          <Route path="/RenderPost" element={<RenderPost />} />
          <Route path="/Quiz" element={<Quiz />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;




