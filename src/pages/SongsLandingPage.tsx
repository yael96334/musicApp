import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import SkipPreviousIcon from '@mui/icons-material/SkipPrevious';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import SkipNextIcon from '@mui/icons-material/SkipNext';
import DeleteIcon from '@mui/icons-material/Delete';
import Button from '@mui/material/Button';
import EditIcon from '@mui/icons-material/Edit';
import { Song } from '../models/Song';
import Container from '@mui/material/Container';
import { DeleteSong } from '../store/action/Songs';
import { connect } from 'http2';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { type } from '@testing-library/user-event/dist/type';
import SongList from './SongList';
type Props = {
    singleSong: Song,
    deleteSong: (id: string) => void
}
export default function SongsLandingPage({ singleSong, deleteSong }: Props) {
    const theme = useTheme();
    const dis = useDispatch();
    const navigate = useNavigate();
    return (
        <>
            <Container component="body" maxWidth="xs" >
                <Card sx={{ display: 'flex' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                        <CardContent sx={{ flex: '1 0 auto' }}>
                            <Typography component="div" variant="h5">
                                {singleSong.title}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {"artist: " + singleSong.artist}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {"the price: " + singleSong.price}
                            </Typography>
                            <Typography variant="subtitle1" color="text.secondary" component="div">
                                {"the length: " + singleSong.length}
                            </Typography>
                        </CardContent>
                        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, pb: 1 }}>
                            <IconButton aria-label="previous">
                                {theme.direction === 'rtl' ? <SkipNextIcon /> : <SkipPreviousIcon />}
                            </IconButton>
                            <IconButton aria-label="play/pause">
                                <PlayArrowIcon sx={{ height: 38, width: 38 }} />
                            </IconButton>
                            <IconButton aria-label="next">
                                {theme.direction === 'rtl' ? <SkipPreviousIcon /> : <SkipNextIcon />}
                            </IconButton>

                            <div  >
                                <IconButton aria-label="delete" size="large" onClick={() => deleteSong(singleSong.id)} >
                                    <DeleteIcon fontSize="inherit" />
                                </IconButton>
                            </div>
                            <IconButton aria-label="edit" size="large" onClick={() => {

                                navigate('/songs/EditSong', { state: { song: singleSong } })

                            }}>
                                <EditIcon />
                            </IconButton>
                        </Box>
                    </Box>
                    <CardMedia
                        component="img"
                        sx={{ width: 151, height: 200 }}
                        // image={`images/${song.url}`}
                        alt="Live from space album cover"
                    />

                </Card>
            </Container>
            <p></p>
        </>
    );
}
