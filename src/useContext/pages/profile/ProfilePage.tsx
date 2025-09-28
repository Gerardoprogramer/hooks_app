import {Button} from '@/components/ui/button'
import { UserContext } from '@/useContext/context/UserContext'
import { use } from 'react'

export const ProfilePage = () => {

  const {user, logOut} = use(UserContext);



  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <h1 className="text-4xl">Perfil del Usuario</h1>

      <pre className="my-4">{JSON.stringify({user}, null, 2)}</pre>

      <Button variant='destructive' onClick={logOut}>Salir</Button>
    </div>
  )
}
