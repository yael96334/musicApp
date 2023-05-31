package songs.components;

import org.springframework.data.mongodb.repository.MongoRepository;

import java.util.List;

public interface SongsRepo 
    extends MongoRepository<SongModel, String> {
    public List<SongModel> findByArtist(String artist);
}

