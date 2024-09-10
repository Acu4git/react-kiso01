import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "@pages/Home";
import { Reset } from "styled-reset"; // ユーザーエージェントスタイルシートの無効化
import "@style/index.css";
import { ChakraProvider, Heading } from "@chakra-ui/react";
import Thread from "@pages/Thread";
import Create from "@pages/Create";
import Index from "@pages/Index";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Reset />
    <BrowserRouter>
      <ChakraProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/home" element={<Home />} />
          <Route path="/thread/:id" element={<Thread />} />
          <Route path="/create_thread" element={<Create />} />
        </Routes>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
