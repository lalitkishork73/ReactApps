import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import ReactPlayer from "react-player";
import { Typography, Box, Stack } from "@mui/material";
import { CheckCircle } from "@mui/icons-material";
import { Video } from "./"
import fetchFromAPI from "../utils/fetchFromAPI";
const VideoDetail = () => {
    const { id } = useParams();
    const [vid, setVid] = useState({});
    const [videos, setVideos] = useState(null);

    useEffect(() => {
        fetchFromAPI(`videos?part=snippets,statistics&id=${id}`)
            .then((data) => {
                // console.log(data);
                setVid(data.items[0])
            });

        fetchFromAPI(`search?part=snippet&relatedToVideoId=${id}&type=video`)
            .then((data) => {
                // console.log(data)
                setVideos(data.items)
            });

    }, [id])

    if (!vid.snippet) return 'Loading...';

    const { snippet: { title, channelId
        , channelTitle }, statistics: { viewCount, likeCount } } = vid;
    // console.log(vid);

    return (<>
        <Box minHeight="95vh">
            <Stack direction={{ xs: "column", md: 'row' }}>
                <Box flex={1}>
                    <Box sx={{
                        width: "100%",
                        position: "sticky",
                        top: "86px"
                    }}>
                        <ReactPlayer url={`https://www.youtube.com/watch?v=${id}`}
                            className="react-player" controls />
                        <Typography color="#fff"
                            variant="h5" fontWeight={"bold"} p={2}>
                            {title}
                        </Typography>
                        <Stack direction="row" justifyContent="space-between" sx={{ color: '$fff' }} py={1} px={2}>
                            <Link to={`/channel/${channelId}`}>
                                <Typography variant={{ sm: 'subtitle1', md: 'h6' }}
                                    color="#fff">
                                    {channelTitle}
                                    <CheckCircle sx={{ fontSize: '12px', color: 'gray', ml: '5px' }} />
                                </Typography>
                            </Link>
                            <Stack>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(viewCount).toLocaleString()} views
                                </Typography>
                            </Stack>
                            <Stack direction="row" gap="20px" alignContent='center'>
                                <Typography variant="body1" sx={{ opacity: 0.7 }}>
                                    {parseInt(likeCount).toLocaleString()} likes
                                </Typography>
                            </Stack>
                        </Stack>

                    </Box>
                </Box>
                <Box px={2} py={{ md: 1, xs: 5 }} justifyContent="center" alignItems="center">
                    <Video video={videos} direction="column" />

                </Box>
            </Stack>
        </Box>

    </>)
}

export default VideoDetail;