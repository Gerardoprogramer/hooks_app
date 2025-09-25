import React from "react";

interface Props {
    title: string;
}

export const MyTitle = React.memo(({ title }: Props) => {

    console.log('Renderizando MyTitle'); 

  return (
    <h1 className='text-3xl font-thin text-white'>{title}</h1>
  )
})
