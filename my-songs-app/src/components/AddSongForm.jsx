import { useState } from "react";
import { db } from "../firebaseConfig";
import { collection, addDoc } from "firebase/firestore";
import "../styles/AddSongForm.css";

const AddSongForm = () => {
  const [title, setTitle] = useState("");
  const [artist, setArtist] = useState("");
  const [year, setYear] = useState("");
  const [genre, setGenre] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addDoc(collection(db, "Songs"), {
        title,
        artist,
        year: Number(year),
        genre,
      });
      setTitle("");
      setArtist("");
      setYear("");
      setGenre("");
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" placeholder="Título" value={title} onChange={(e) => setTitle(e.target.value)} required />
      <input type="text" placeholder="Artista" value={artist} onChange={(e) => setArtist(e.target.value)} required />
      <input type="number" placeholder="Año" value={year} onChange={(e) => setYear(e.target.value)} required />
      <input type="text" placeholder="Género" value={genre} onChange={(e) => setGenre(e.target.value)} required />
      <button type="submit">Agregar Cancion</button>
    </form>
  );
};

export default AddSongForm;