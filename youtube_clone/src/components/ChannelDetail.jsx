import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Video, ChannelCard } from "./"
import fetchFromAPI from "../utils/fetchFromAPI";
const ChannelDetail = () => {
    const { id } = useParams();
    const [channelDetail, setchannelDetail] = useState(null)
    const [video, setVideo] = useState([])

    console.log(channelDetail, video)
    useEffect(() => {
        fetchFromAPI(`channels?part=snippet&id=${id}`).then((data) => setchannelDetail(data?.items[0]))
        fetchFromAPI(`search?channelId=${id}&part=snippet&order=date`).then((data) => setVideo(data?.items))
    }, [id])
    return (<>
        <Box minHeight={"95vh"}>
            <Box>
                <div style={{
                    background: 'linear-gradient(95deg,rgba(0,238,247,1)0%,rgba(206,3,184,1)100%,rgba(0,212,255,1)100%',
                    zIndex: 10,
                    height: '300px'
                }} />
                <ChannelCard channelDetail={channelDetail} marginTop="-93px" />
            </Box>
            <Box p={2} display="flex">
                <Box sx={{ mr: { sm: '100px' } }} />
                <Video video={video} />
            </Box>
        </Box>
    </>)
}

export default ChannelDetail;