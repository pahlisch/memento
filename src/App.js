import React from 'react';
import './App.css';
import shuffle from './utilities/shuffle'

function App() {
  const [cards, setCards] = useState([shuffle]);
  return (
    <>
    <div className='grid'>
      {cards.map((card) => {
        const { image, id, matched } = card;
        return (
          <Card/>
        );
      })}
    </div>
    </>
  );
}

export default App;
