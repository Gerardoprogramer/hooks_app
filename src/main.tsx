import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* import { HooksApp } from './HooksApp' */
// import { TrafficLight } from './UseState/TrafficLight'
// import { TrafficLightWithEffect } from './UseEffect/TrafficLightWithEffect'
// import { PokemonPage } from './Pokemon/PokemonPage'
// import { FocusScreen } from './useRef/FocusScreen'
// import { TasksApp } from '@/useReducer/TasksApp'
// import { ScrambleWords } from './useReducer/ScrambleWords '
// import { MemoHook } from './memo/MemoHook'
import { MemoCounter } from './memo/MemoCounter'

import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
   {/* <PokemonPage /> */}
   {/* <FocusScreen /> */}
   {/* <TasksApp /> */}
   {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    <MemoCounter />
  </StrictMode>,
)
