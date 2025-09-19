import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* import { HooksApp } from './HooksApp' */
// import { TrafficLight } from './UseState/TrafficLight'
import { TrafficLightWithEffect } from './UseEffect/TrafficLightWithEffect'

import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <TrafficLight /> */}
    <TrafficLightWithEffect />
  </StrictMode>,
)
