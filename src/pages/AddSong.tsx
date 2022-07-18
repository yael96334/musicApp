import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import IconButton from '@mui/material/IconButton';
import { Song } from '../models/Song';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { addSong } from '../store/action/Songs';
import BackButton from '../components/BackButton';
const theme = createTheme();
type Props = {
    addNewSong: (addNewSong: Song) => any
    // addNewSong: (addNewSong: Song) => Promise<void>

}
export default function AddSong({ addNewSong }: Props) {

    const diss = useDispatch();
    const [newSong, setNewSong] = React.useState({ id:  Date.now().toString(), title: "", artist: "", genre: "POP", length: 0, price: 0 })
    const navigate = useNavigate();

    const handleSubmit = () => {


        addNewSong(newSong);
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
                        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }} >
                            <IconButton aria-label="edit" size='large'>
                                <AddCircleOutlineIcon />

                            </IconButton>
                        </Avatar>

                        <Typography component="h1" variant="h5">
                            Add Song
                        </Typography>
                        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        fullWidth
                                        id="title"
                                        label="title"
                                        name="title"
                                        autoComplete="title"
                                        type="text"
                                        onChange={(e) => { setNewSong({ ...newSong, title: e.target.value }) }}

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
                                        type="text"
                                        onChange={(e) => { setNewSong({ ...newSong, artist: e.target.value }) }}

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
                                        type="number"
                                        onChange={(e) => { setNewSong({ ...newSong, length: parseInt(e.target.value) }) }}

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
                                        type="number"
                                        onChange={(e) => { setNewSong({ ...newSong, price: parseInt(e.target.value) }) }}


                                    />
                                </Grid>

                                <Grid item xs={12}>

                                    {/* <Box sx={{ minWidth: 120 }}> */}
                                    <FormControl fullWidth >
                                        <InputLabel id="demo-simple-select-label">genre</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="genre"
                                            value={newSong.genre}
                                            label="Genre"
                                            name="genre"
                                            type='string'

                                            onChange={(e) => { setNewSong({ ...newSong, genre: e.target.value }) }}

                                        >
                                            <MenuItem id="genre" value={"POP"}>POP</MenuItem>
                                            <MenuItem id="genre" value={"RAP"}>RAP</MenuItem>
                                            <MenuItem id="genre" value={"CLASSICAL"}>CLASSICAL</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {/* </Box> */}
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
                                Save Song
                            </Button>

                        </Box>
                    </Box>
                </Container>
            </ThemeProvider>
            <BackButton />
        </>
    );
}
