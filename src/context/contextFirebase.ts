import {db, auth} from '../firebaseConfig'
import { Firestore} from 'firebase/firestore'
import { Auth } from 'firebase/auth'
import { createContext } from 'react'

interface FirebaseContexProps {
    db: Firestore,
    auth: Auth,
}

export const FirebaseContext = createContext<FirebaseContexProps | undefined>(undefined)