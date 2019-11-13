import React from 'react';
import Accordion from './accordion';
import HelloWorld from './state-drills/hello-world/helloWorld';
import Bomb from './state-drills/bomb/bomb';
import RouletteGun from './state-drills/roulette-gun/rouletteGun';

const sections = [
  {
    title: 'Section 1',
    content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
  }, {
    title: 'Section 2',
    content: 'Cupiditate tenetur aliquam necessitatibus id distinctio quas nihil ipsam nisi modi!'
  }, {
    title: 'Section 3',
    content: 'Animi amet cumque sint cupiditate officia ab voluptatibus libero optio et?'
  }
]
// e.g. <Accordion sections={sections} />

// <Accordion sections={sections}/>
// <HelloWorld/>

function App() {
  return ( <main className='App'>
    <RouletteGun bulletInChamber={8}/>
  </main> );
}

export default App;
