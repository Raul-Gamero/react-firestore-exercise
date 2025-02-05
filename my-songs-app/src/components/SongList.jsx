import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, getDocs, deleteDoc, doc } from "firebase/firestore";
import SongItem from "./SongItem";

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const fetchSongs = async () => {
      const querySnapshot = await getDocs(collection(db, "Songs"));
      setSongs(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    };
    fetchSongs();
  }, []);

  const deleteSong = async (id) => {
    await deleteDoc(doc(db, "Songs", id));
    setSongs(songs.filter(song => song.id !== id));
  };

  return (
    <ul>
      {songs.map(song => (
        <SongItem key={song.id} song={song} deleteSong={deleteSong} />
      ))}
    </ul>
  );
};

export default SongList;