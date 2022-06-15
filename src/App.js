import Episode from "./components/Episode";
import LoadEpisodes from "./components/LoadingEpisodes";

function App() {
  return (
    <div className="App">
      <div className='h'>
        <h1>Список эпизодов Breaking Bad</h1>
      </div>
        <LoadEpisodes/>
    </div>
  );
}

export default App;
