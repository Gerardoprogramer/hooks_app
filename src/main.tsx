import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* import { HooksApp } from './HooksApp' */
// import { TrafficLight } from './UseState/TrafficLight'
// import { TrafficLightWithEffect } from './UseEffect/TrafficLightWithEffect'
// import { PokemonPage } from './Pokemon/PokemonPage'

import './index.css'
import { FocusScreen } from './useRef/FocusScreen'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
   {/* <PokemonPage /> */}
   <FocusScreen />
  </StrictMode>,
)
