import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Toaster } from 'sonner'

import { Suspense } from 'react'

/* import { HooksApp } from './HooksApp' */
// import { TrafficLight } from './UseState/TrafficLight'
// import { TrafficLightWithEffect } from './UseEffect/TrafficLightWithEffect'
// import { PokemonPage } from './Pokemon/PokemonPage'
// import { FocusScreen } from './useRef/FocusScreen'
// import { TasksApp } from '@/useReducer/TasksApp'
// import { ScrambleWords } from './useReducer/ScrambleWords '
// import { MemoHook } from './memo/MemoHook'
// import { MemoCounter } from './memo/MemoCounter'
// import { InstagromApp } from './useOptimistic/InstragromApp'
import { ClientInformation } from './use-suspense/ClientInformation'
import {getUserAction } from './use-suspense/api/get-user.action'

import './index.css'


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Toaster />
    {/* <TrafficLight /> */}
    {/* <TrafficLightWithEffect /> */}
   {/* <PokemonPage /> */}
   {/* <FocusScreen /> */}
   {/* <TasksApp /> */}
   {/* <ScrambleWords /> */}
    {/* <MemoHook /> */}
    {/* <MemoCounter /> */}
    {/* <InstagromApp /> */}
    <Suspense fallback={
      <div className='bg-gradient flex flex-col gap-4'>
        <h1 className='text-5xl text-white'>Loading...</h1>
      </div>
    }>
      <ClientInformation getUser={getUserAction(100)}/>
    </Suspense>
  </StrictMode>,
)
