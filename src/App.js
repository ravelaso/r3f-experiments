import React, {Suspense } from 'react'

import Matcaps from './components/Matcaps';
import Rombo from './components/Rombo';
import Torus from './components/Torus';
import Video from './components/Video';
import Home from './components/Home';
import AtomReact from './components/AtomReact';


function App() {
  return (
    <div className="h-screen bg-black text-center overflow-x-hidden scrollbar scrollbar-thumb-purple-400 scrollbar-track-gray-600">
      <div className='h-screen bg-gray-900 '>
        <Home />
      </div>
      <div className='h-screen bg-slate-600 bg-blend-hard-light'>
      <h1 className='text-2xl text-white '>This was made with React :D</h1>
        <AtomReact />
      </div>
      <div className='h-screen bg-orange-400'>
      <h1 className='text-2xl '>This is a ...?</h1>
        <Torus />
      </div>
      <div className='h-screen bg-green-400'>
      <h1 className='text-2xl '>This is a ... Nevermind, just drag it!</h1>
        <Suspense fallback={null}>
          <Matcaps />
        </Suspense>
      </div>
      <div className='h-screen flex flex-col items-center'>
        <h1 className='text-2xl text-white pt-5'>This is a render from Blender!</h1>
          <div className='p-10 justify-center'>
            <Suspense fallback={<h1>Loading</h1>}>
              <Video />
            </Suspense>
          </div>
      </div>
    </div>
  );
}
export default App;
