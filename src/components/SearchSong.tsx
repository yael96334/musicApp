
import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from "react";

type Props = {
  // setshowButtonBack: React.Dispatch<React.SetStateAction<boolean>>,
  getbyArtist: (nameArtist: string) => void,
  setshowButtonBack: React.Dispatch<React.SetStateAction<boolean>>

}
const SearchSong = ({ getbyArtist ,setshowButtonBack}: Props) => {

  const [artist, setArtist] = useState<string>('')
  const getSongByArrtist = (e: any) => {
    e.preventDefault()
    getbyArtist(artist)
    setshowButtonBack(true);
  }

  return (
    <>
      <Paper
        component="form"
        sx={{ ml: 70, p: '2px 2px', display: 'inline-flex', alignItems: 'center', width: 200 }}
        color='action'
        onSubmit={getSongByArrtist}
      >

        <InputBase
          sx={{ ml: 1, flex: 1, input: { color: 'blue' } }}
          placeholder="Enter Artist Name"
          inputProps={{ artist }}
          onChange={(v) => { setArtist(v.target.value) }}
        />
        <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
          <SearchIcon />
        </IconButton>

      </Paper>
      <br />
      <br />
    </>
  )
}
export default SearchSong;