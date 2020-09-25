import React from 'react';

import Header from './components/Header';
import Carousel from './components/Carousel';
import HorizontalList from './components/HorizontalList';
import SectionCards from './components/SectionCards';

import './style.css';

function App() {
  const slides = [
    {
      id: 1,
      lightTitle: "Faça seu teste",
      boldTitle: "De frontend",
      subtitle: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum.",
      backgroundColor: "#F3BE00"
    },
    {
      id: 2,
      lightTitle: "Faça seu teste",
      boldTitle: "Outro Banner",
      subtitle: "Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical.",
      backgroundColor: "#00A8D2"
    }
  ]

  return (
    <>
      <Header />
      <Carousel slides={slides} />
      <HorizontalList />
      <SectionCards />
    </>
  );
}

export default App;
