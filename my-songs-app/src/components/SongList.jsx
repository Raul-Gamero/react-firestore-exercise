import { useEffect, useState } from "react";
import { db } from "../firebaseConfig";
import { collection, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import SongItem from "./SongItem";

const SongList = () => {
  const [songs, setSongs] = useState([]);

  useEffect(() => {
    const unsubscribe = onSnapshot(collection(db, "Songs"), (snapshot) => {
      setSongs(snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
    });
    return () => unsubscribe();
  }, []);

  const deleteSong = async (id) => {
    await deleteDoc(doc(db, "Songs", id));
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