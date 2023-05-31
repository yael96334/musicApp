package songs.components;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class SongsServiceImpl implements SongsService {

    @Autowired
    private SongsRepo songsRepo;

    @Override
    public List<SongModel> allSongs() {
        return songsRepo.findAll();
    }

    @Override
    public SongModel addsong(SongModel song) {

        try {

            songsRepo.save(song);
            return song;
        } catch (Exception e) {

            return null;
        }

    }

    @Override
    public SongModel updateSong(String id, SongModel song) {
        return songsRepo.save(song);
       

    }

    @Override
    public List<SongModel> GetSongsByArtist(String name) {

        return songsRepo.findByArtist(name);
    }

    @Override
    public SongModel GetSongById(String id) {
        try {
            return songsRepo.findById(id).get();

        } catch (Exception e) {
            return null;
        }
      
    }

    @Override
    public boolean deletSongById(String id) {
        try {
            songsRepo.deleteById(id);
            return true;
        } catch (Exception e) {
            return false;
        }
    }

}