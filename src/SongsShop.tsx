import * as React from 'react';
import { Route, Routes } from "react-router-dom";
import SongsLandingPage from './pages/SongsLandingPage';
import AddSong from './pages/AddSong';
import SongList from './pages/SongList';
import EditSong from './pages/EditSong';
import { useEffect } from "react";
import { Song } from './models/Song';
import { useDispatch, useSelector } from "react-redux";
import { songArr } from './store/reducer/Songs';
import { _addnewSong, _deleteSong, _getAllSongs, _getSongByArtist, _updateSong } from "./api/SongsApi";
import type { } from 'redux-thunk/extend-redux';
const SongsShop = () => {
    const songsList: Song[] = useSelector((state: any) => state.songReducer.songsList);
    const dis = useDispatch();
    

    const getAllSongs = () => {
        dis(_getAllSongs());
    }
    const addNewSong = (newSong: Song) => {
        dis(_addnewSong(newSong));
    }

    const deleteSong = (idSong: string) => {
        
        dis(_deleteSong(idSong));
    }

    const editSong = (id: string, editSong: Song) => {
        dis(_updateSong(id, editSong));
    }

    const getbyArtist = (nameArtist: string) => {
        dis(_getSongByArtist(nameArtist))
    }
    useEffect(() => {
        getAllSongs();

    }, [])
    return (

        <Routes>
            <Route path="/" element={<SongList songArr={songsList} deleteSong={deleteSong} getbyArtist={getbyArtist} getSongs={getAllSongs} />} />
            <Route path="/songs/addSong" element={<AddSong addNewSong={addNewSong} />} />
            <Route path="/songs/editSong" element={<EditSong updateSong={editSong} />} />
        </Routes>
    )
}

export default SongsShop;
