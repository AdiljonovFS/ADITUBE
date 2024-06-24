import React from "react";
import {Route, Routes} from "react-router-dom";
import {Main, Channel, VideoDetail, Search, Navbar} from "../index" ;
import {Box} from "@mui/material";

const App = () => {
    return (
        <Box>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Main/>} />
                <Route path="/channel/:id"  element={<Channel/>} />
                <Route path="/video/:id"  element={<VideoDetail/>} />
                <Route path="/search/:id"  element={<Search/>} />
            </Routes>
        </Box>
    )
}
export default App;
