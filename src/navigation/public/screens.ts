import { publicRoute } from './routes'

import { Example } from 'flows/Example'
import { Example2 } from 'flows/Example2'

export const publicScreens = new Map()
publicScreens.set(publicRoute.example, Example)
publicScreens.set(publicRoute.example2, Example2)
