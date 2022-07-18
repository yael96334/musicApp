
import { Song } from "../../models/Song";
export interface songArr {

    songsList: Song[];
}

type Action =
    { type: "ADD_SONG", payload: Song }
    | { type: "EDIT_SONG", payload: Song }
    | { type: "DELETE_SONG", payload: string }
    | { type: "GET_SONG_BY_ID", payload: string }
    | { type: "GET_ALL_SONGS", payload: Song[] }
    | { type: "GET_SONG_BY_ARTIST", payload: Song[] }



const initialization: songArr = { songsList: [] }
export const songReducer = (state: songArr = initialization, action: Action) => {
    switch (action.type) {
        case "GET_ALL_SONGS":
            return {
                ...state,
                songsList: [...action.payload]
            }
        case "GET_SONG_BY_ARTIST":
           
            return {
                ...state,
                songsList: [...action.payload]
            }
        case "ADD_SONG":
            return {
                ...state,
                songsList: [...state.songsList, action.payload]

            }

        case "EDIT_SONG":
            return {
                ...state,
                songsList: [...state.songsList.map((song: Song) => { return (song.id === action.payload.id ? action.payload : song) })]
            }
            case "DELETE_SONG":
              
                return {
                    ...state,
                    songsList: state.songsList.filter((song: Song) => song.id !== action.payload)
                }


       
        default: return { ...state }
    }
}
