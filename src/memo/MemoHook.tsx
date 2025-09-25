import { useCallback, useMemo, useState } from 'react'

import { MyTitle } from './ui/MyTitle'
import { MySubTitle } from './ui/MySubTitle'

export const MemoHook = () => {

  const [title, setTitle] = useState('Hola')
  const [subTitle, setSubTitle] = useState('Subtitulo')

  const callMyApi = useCallback(() => {
    console.log('Llamando a mi API ', subTitle)
  }, [subTitle])

  return (
    <div className='bg-gradient flex flex-col gap-4'>

      <MyTitle title={title} />
      <MySubTitle subTitle={subTitle} callMyApi={callMyApi} />

      <button 
      className='" bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
      onClick={() => setTitle( 'Mundo, '+ new Date().getTime() )}>
        Cambiar titulo
      </button>
      <button 
      className='bg-blue-500 text-white px-4 py-2 rounded-md cursor-pointer'
      onClick={() => setSubTitle( 'Nuevo Subtitulo' )}>
        Cambiar subtitulo
      </button>
    </div>
  )
}
