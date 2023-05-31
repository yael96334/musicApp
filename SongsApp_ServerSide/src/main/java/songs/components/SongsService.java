package songs.components;

import java.util.List;
// import java.util.Optional;

public interface SongsService {
    
    public List<SongModel> allSongs();

    public SongModel addsong(SongModel song);

    public SongModel updateSong(String id, SongModel song);

    public List<SongModel> GetSongsByArtist(String name);

    public SongModel GetSongById(String id);

    public boolean deletSongById(String id);
}
