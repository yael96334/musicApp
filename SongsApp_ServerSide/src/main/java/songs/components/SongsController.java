package songs.components;

import java.util.List;
// import java.util.Optional;

// import javax.annotation.Priority;
import javax.websocket.server.PathParam;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
// import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
// import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("songs")
@CrossOrigin(origins="http://localhost:3000")
public class SongsController {

    @Autowired
    private SongsService songsService;

    // Get all songs
    // @Autowired(required=false)
    // private SongsService songsService;

    // private SongsService songsService;
    @GetMapping("/allSongs")
    public List<SongModel> allSongs() {
        return songsService.allSongs();
    }

    @GetMapping("/allSongs2")
    public int allSongs2() {
        return 5;
    }

    @PostMapping("/addSong")
    public SongModel addSong(@RequestBody SongModel song) {
        return songsService.addsong(song);
    }

    @PutMapping("/updateSong")
    public SongModel updateSong(@PathParam("id") String id, @RequestBody SongModel updateSong) {
        return songsService.updateSong(id,updateSong);
    }

    @GetMapping("/GetSongsByArtist")
    public List<SongModel> GetSongsByArtist(@PathParam("byArtist") String name) {
        return songsService.GetSongsByArtist(name);
    }

    @GetMapping("/GetSongById")
    public SongModel GetSongById(@PathParam("byId") String id) {
        return songsService.GetSongById(id);
    }

    @DeleteMapping("/deletSongById")
    public boolean deletSongById(@PathParam("deleteById") String id) {
        return songsService.deletSongById(id);
    }

}
