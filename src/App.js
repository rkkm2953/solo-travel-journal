
import './App.css';
import Navbar from './components/navbar.js'
import Entry  from './components/entry.js'
import logs from "./data/data.js"

function App() {

const entries = logs.map(item => {
  return (
      <Entry 
        title={item.title}
        location={item.location}
        googleMapsUrl={item.googleMapsUrl}
        startDate={item.startDate}
        endDate={item.endDate}
        description={item.description}
        imageUrl={item.imageUrl}
      />
  )
})

  return (
    <div className="App">
      <Navbar />
      {entries}
    </div>
  );
}

export default App;