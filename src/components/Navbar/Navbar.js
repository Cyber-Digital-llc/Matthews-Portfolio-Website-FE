// import "./App.css";
import {
    AppstoreOutlined,
    MailOutlined,
    SettingOutlined,
} from "@ant-design/icons";
import { Menu } from "antd";
import '../Navbar/navbar.css'
import React, { useState } from "react";

const items = [
    {
        label: <a href='#home'>HOME</a>,
        key: "home",
        // icon: <MailOutlined />,
    },
    {
        label: <a href='#about'>ABOUT</a>,
        key: "about",
    },
    {
        label: <a href='#credits'>CREDITS</a>,
        key: "credits",
        disabled: true,
    },
    {
        label: <a href='#music'>MUSIC</a>,
        key: "music",
    },
    {
        label: <a href='#contact'>CONTACT</a>,
        key: "contact",
    },
];

function Navbar() {
    const [current, setCurrent] = useState("home");

    const onClick = (e) => {
        console.log("click", e);
        setCurrent(e.key);
    };
    return (
        <div className='navbar'>
            <Menu
                onClick={onClick}
                selectedKeys={[current]}
                mode='horizontal'
                items={items}
            />
        </div>
    );
}

export default Navbar;
