import { createContext, useState, Dispatch, SetStateAction, ReactNode} from 'react'

/*
defining our User state type
*/
export type User = {
  name: string,
  email: string,
  loggedIn: boolean
}

/*
defining our interface for UserContext (what will be passed by the context provider)
*/
export interface UserContextInterface {
  user: User,
  setUser: Dispatch<SetStateAction<User>>
} 

/*
defining what will actually be passed when the app is first run
*/

const defaultContext = {
  user: {
    name: 'test',
    email: 'test',
    loggedIn: false
  },
  setUser: (user: User) => {}
} as UserContextInterface

/*
create context for our provider to wrap the entire app
*/

export const UserContext = createContext(defaultContext)


type UserProvideProps = {
  children: ReactNode
}

export default function UserProvider({children}: UserProvideProps) {

  const [user, setUser] = useState<User>({
    name: '',
    email: '',
    loggedIn: false
  })

  return (
    <UserContext.Provider value = {{ user, setUser }
}>
    {children}
    </UserContext.Provider>
  )

}