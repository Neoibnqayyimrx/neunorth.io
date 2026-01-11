import React from 'react';

import { About, Schedule, Header, Session,Capability, GlobalPresence, Footer } from './container';
import { Navbar } from './components';
import './App.scss';


const App = () => {
  return (
     <div className='app'>
      <Navbar />
      <Header />
      <About />
      <Schedule />
      <GlobalPresence />
      <Session />
      <Capability />
      <Footer />
     </div>
  )
}

export default App