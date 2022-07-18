import { Song } from '../models/Song';
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
import { useNavigate } from 'react-router-dom';
import Image1 from '.../public/images/1.jpg';
import Container from '@mui/material/Container';
import InputBase from '@mui/material/InputBase';

import { useEffect } from 'react';
import { connect } from "react-redux";
import AddButton from '../components/AddButton'
import SearchIcon from '@mui/icons-material/Search';
import { useSelector } from 'react-redux';
import { styled, alpha, createTheme } from '@mui/material/styles';
import SongsLandingPage from './SongsLandingPage'
import { getAllSongs, getSongById } from '../store/action/Songs';
import { useDispatch } from 'react-redux';
import SearchSong from '../components/SearchSong';
const theme = createTheme();

const Search = styled('div')(({ theme }: any) => ({
    position: 'absolute',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    '&:hover': {
        backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
        marginLeft: theme.spacing(1),
        width: 'auto',
    },
}));

const SearchIconWrapper = styled('div')(({ theme }: any) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }: any) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
        padding: theme.spacing(1, 1, 1, 0),
        // vertical padding + font size from searchIcon
        paddingLeft: `calc(1em + ${theme.spacing(4)})`,
        transition: theme.transitions.create('width'),
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            width: '12ch',
            '&:focus': {
                width: '20ch',
            },
        },
    },
}));
type Props = {
    songArr: Song[],
    getSongs: () => void,
    deleteSong: (idSong: string) => void,
    getbyArtist: (nameArtist: string) => void

}
export default function SongList({ songArr, getSongs, deleteSong, getbyArtist }: Props) {
    // let songsList: Song[] = songArr;
    console.log(songArr)
    const theme = useTheme();
    let navigate = useNavigate();
    const dis = useDispatch();
    const [songs, setSongs] = React.useState(useSelector((state: Song[]) => state))
    const [artist, setArtist] = React.useState("");
    const [id, setId] = React.useState("");
    const [showButtonBack, setshowButtonBack] = React.useState<boolean>(false)


    return (
        <>
            <p></p>
            
            <SearchSong getbyArtist={getbyArtist} setshowButtonBack={setshowButtonBack} />
            {songArr.length === 0 &&<h3 style={{textAlign:'center',color:'red'}}>Sorry, no search details are available</h3>}
            {songArr.map(
                (song: Song) => {
                    return (
                        <SongsLandingPage singleSong={song} deleteSong={deleteSong} key={song.id}
                        />

                    )
                })
            }
        {showButtonBack && <Button variant="outlined" sx={{ml:75,   }} onClick={() => { getSongs(), setshowButtonBack(false) }}> All Songs</Button>}
            
            <AddButton />

        </>
    )
}





