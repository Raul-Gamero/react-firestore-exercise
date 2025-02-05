import AddSongForm from "./components/AddSongForm";
import SongList from "./components/SongList";
import "./styles/App.css";

const App = () => {
  return (
    <div>
      <h1>Lista de Canciones</h1>
      <AddSongForm />
      <SongList />
    </div>
  );
};

export default App;