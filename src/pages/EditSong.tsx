import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';
import {Song} from '../models/Song';
import { connect, useDispatch } from 'react-redux';

import BackButton from '../components/BackButton';

const theme = createTheme();
type Props = {
    updateSong: (id: string, editSong: Song) => void
}
const EditSong = ({ updateSong }: Props) => {
    const diss = useDispatch();
    const navigate = useNavigate();
    const location = useLocation();
    const loc: any = location.state;
    const [editSong, setEditSong] = React.useState({ id: loc.song.id, title: loc.song.title, artist: loc.song.artist, genre: loc.song.genre, length: loc.song.length, price: loc.song.price })
    const dis = useDispatch();
    
    const handleSubmit = () => {
        updateSong(editSong.id,editSong);
        navigate("/")
    }
    return (
        <>
            <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                    <CssBaseline />
                    <Box
                        sx={{
                            marginTop: 8,
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.//#region ' }}>
                            <IconButton aria-label="edit" size="large" >
                                <EditIcon />
                            </IconButton>
                        </Avatar>
                        <Typography component="h1" variant="h5">
                            EditSong
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="title"
                                        // label="title"
                                        name="title"
                                        autoComplete="title"
                                        value={editSong.title}
                                        onChange={(e) => { setEditSong({ ...editSong, title: (e.target.value) }) }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="artist"
                                        required
                                        fullWidth
                                        id="artist"
                                        label="artist"
                                        autoFocus
                                        value={editSong.artist}
                                        onChange={(e) => { setEditSong({ ...editSong, artist: (e.target.value) }) }}
                                    />
                                </Grid><Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="length"
                                        required
                                        fullWidth
                                        id="length"
                                        label="length"
                                        autoFocus
                                        value={editSong.length}
                                        onChange={(e) => { setEditSong({ ...editSong, length: parseInt(e.target.value) }) }}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        autoComplete="given-name"
                                        name="price"
                                        required
                                        fullWidth
                                        id="price"
                                        label="price"
                                        autoFocus
                                        value={editSong.price}
                                        onChange={(e) => { setEditSong({ ...editSong, price: parseInt(e.target.value) }) }}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Box sx={{ minWidth: 120 }}>
                                        <FormControl fullWidth >
                                            <InputLabel id="demo-simple-select-label">genre</InputLabel>
                                            <Select
                                                labelId="demo-simple-select-label"
                                                id="genre"
                                                value={editSong.genre}
                                                label="Genre"
                                                name="genre"
                                                type='string'
                                            onChange={(e) => { setEditSong({ ...editSong, genre:(e.target.value) }) }}
                                            >
                                                <MenuItem id="genre" value={"POP"}>POP</MenuItem>
                                                <MenuItem id="genre" value={"RAP"}>RAP</MenuItem>
                                                <MenuItem id="genre" value={"CLASSICAL"}>CLASSICAL</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Box>
                                </Grid>
                                <Grid item xs={12}>
                                    <FormControlLabel
                                        control={<Checkbox value="allowExtraEmails" color="primary" />}
                                        label="I want to receive inspiration, marketing promotions and updates via email."
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mt: 3, mb: 2 }}
                            >
                                Save Changes
                            </Button>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <BackButton />
        </>
    );
}
const showListSong = (state: any) => {
    return {
        myList: state.songReducer.songsList
    }
}
export default connect(showListSong)(EditSong);