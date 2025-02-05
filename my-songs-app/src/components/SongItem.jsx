const SongItem = ({ song, deleteSong }) => {
    return (
      <li>
        {song.title} - {song.artist} ({song.year})
        <button onClick={() => deleteSong(song.id)}>Eliminar</button>
      </li>
    );
  };
  
  export default SongItem;