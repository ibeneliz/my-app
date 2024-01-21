import logo from './logo.svg';
import './App.css';
import Gallery from './gallery.js';
import PackingList from './packingList';
import List from './scientists';

function App() {
  return (
    <div className="App">
      <Gallery />
      <PackingList />
      <List />
    </div>
  );
}

export default App;
