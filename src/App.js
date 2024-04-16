import './App.css';
import MediaPlayer from './components/MediaPlayer';
import VideoHero from './components/VideoHero'
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <VideoHero />
      </header>
      <MediaPlayer/>
      <Footer/>
    </div>
  );
}

export default App;
