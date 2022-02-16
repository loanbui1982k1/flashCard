import React from 'react';
import './App.css';
import Header from './header/Header'
import LeftContainer from './container/leftContainer/LeftContainer'
import RightContainer from './container/rightContainer/RightContainer'
import {Provider} from './context/ProgressContext'

interface card {
  question: string,
  answer: string
}


// const listCards.list = [{question : 'The ______________ releases acids and enzymes that digest food. They pyloric sphincter allows food to travel from the ______________ to the large intestine.',
//             answer: 'stomach'}, {question: 'The __________ is the beginning of the digestive system.', answer: 'mouth'}]

const App: React.FC = () => {
  const listCards: card[] = [
    {
      question: 'The ______________ releases acids and enzymes that digest food. They pyloric sphincter allows food to travel from the ______________ to the large intestine.',
      answer: 'stomach'
    },
    { question: 'The __________ is the beginning of the digestive system.', answer: 'mouth' },
    {
      question: 'The ____________ is the last straight section of the large intestine before the anus. This is where the digestive system comes to an end.',
      answer: 'rectum'
    },
    {
      question: 'The ________________ releases juices into the bloodstream. Enzymes-digestive juices-are released from the ________________ to the small intestine. Once there, it break down foods.',
      answer: 'pancreas'
    },
    {
      question: 'The ____________________________ is between your stomach and large intestine. This is where most of the absorption takes place.',
      answer: 'small intestine'
    }
  ]
  return (
    <Provider>
    <div className="App">
      <header>
        <Header />
      </header>
      <div className='container'>
        <LeftContainer totalCards={listCards.length} />
        <RightContainer cards={listCards} />
      </div>
      {/* <Card/> */}
    </div>
    </Provider>
  );
}

export default App;
