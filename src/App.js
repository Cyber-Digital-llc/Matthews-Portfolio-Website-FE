import "./App.css";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import React, { useState } from "react";

import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";

function App() {
    return (
        <div className='App'>
            <Navbar />
            <Header />
        </div>
    );
}

export default App;
