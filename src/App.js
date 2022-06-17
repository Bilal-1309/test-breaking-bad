import LoadEpisodes from "./components/LoadingEpisodes";
import {useDispatch, useSelector} from "react-redux";
import EpisodesList from "./components/EpisodesList";
import Button from "./components/Button";
import {sortAdvanceCharacters, sortEbbingCharacters} from "./redux/features/episodes";

function App() {

    const dispatch = useDispatch();
    const episodes = useSelector((state) => state.episodes)

    const handleSortEbbing = () => {
        dispatch(sortEbbingCharacters())
    };

    const handleSortAdvance = () => {
        dispatch(sortAdvanceCharacters())
    }

    const arrDescButton = ['По убыванию количества персонажей','По возрастанию количества персонажей'];

  return (
    <div className="App">
      <div className='h'>
        <h1>Список эпизодов Breaking Bad</h1>
      </div>
        {episodes.length === 0 ? (
            <LoadEpisodes/>
        ) : (
            <div className='content'>
                <div className='buttonsSort'>
                    {arrDescButton.map((item,index) => (
                        <Button key={index} i={index} sortEbbing={handleSortEbbing} sortAdvance={handleSortAdvance}>{item}</Button>
                    ))}
                </div>
                <EpisodesList/>
            </div>
        )}
    </div>
  );
}

export default App;
