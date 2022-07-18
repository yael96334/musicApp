
import axios from "axios-by-ts"
import { Song } from "../models/Song";
import { updateSong, DeleteSong, addSong, getAllSongs, GetSongsByArtist } from "../store/action/Songs";

export const _getAllSongs = () => {
    return async (dispatch: any) => {
        try {
            const result = await axios.get<Song[]>('http://localhost:8080/songs/allSongs');
            dispatch(getAllSongs(result.data))

        }
        catch (e) {
            alert(e);
        }
    }
}

export const _addnewSong = (newSong: Song) => {
    return async (dispatch: any) => {
        try {
            const result = await axios({ url: `http://localhost:8080/songs/addSong`, method: 'POST', data: newSong })
           
            dispatch(addSong(result.data))
        }
        catch (e) {
            alert(e);
        }
    }
}
export const _deleteSong = (id: string) => {
   
    return async (dispatch: any) => {
        try {
            const result = await axios({ url: `http://localhost:8080/songs/deletSongById?id=${id}`, method: 'DELETE' });
            console.log(result.data)
            dispatch(DeleteSong(id))
        }
        catch (e) {
            alert(e)
        }
    }

}

export const _updateSong = (id: string, song: Song) => {
    return async (dis: any) => {
        try {

            const result = await axios({ url: `http://localhost:8080/songs/updateSong?song=${id}`, method: 'PUT', data: song })
            dis(updateSong(result.data))
        }
        catch (e) {
            console.log(e)
        }
    }

}
export const _getSongByArtist = (artist: string): any => {
    return async (dispatch: any) => {
        try {
            const result = await axios.get(`http://localhost:8080/songs/GetSongsByArtist?name=${artist}`)
            if (result.data == [])
                return [null];
             
            dispatch(GetSongsByArtist(result.data))

        }
        catch (r) {
            alert(r);
        }
    }
}



