import { Song } from "../../models/Song"

export const getAllSongs = (songs:Song[]) => {
    return {
        type: "GET_ALL_SONGS",
        payload: songs
    }
}


export const GetSongsByArtist = (arr: Song[]) => {
    return {
        type: "GET_SONG_BY_ARTIST",
        payload: arr
    }
}
export const addSong = (song: Song) => {
    return {
        type: "ADD_SONG",
        payload: song
    }
}

export const DeleteSong = (id: string) => {
    
    return {
        type: "DELETE_SONG",
        payload: id
    }
}
export const getSongById = (id: string) => {

    return {
        type: "GET_SONG_BY_ID",
        payload: id
    }
}

export const updateSong = (song: Song) => {

    return {
        type: "EDIT_SONG",
        payload: song
    }
}
// import { Song } from "../../models/Song" 

// export const addSong = (newSong: Song) => {
//     return {
//         type: "ADD_SONG",
//         payload: newSong
//     }
// }

// export const updateSong = (songToEdit: Song) => {
//     return {
//         type: "EDIT_SONG",
//         payload: songToEdit
//     }
// }

// export const DeleteSong = (id: string) => {
//     return {
//         type: "DELETE_SONG",
//         payload: id
//     }
// }

// export const getAllSongs = (songs: Song[]) => {
//     return {
//         type: "GET_SONGS",
//         payload: songs
//     }
// }

