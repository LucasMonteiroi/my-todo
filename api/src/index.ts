import '../env'
import setupServer from './server'

setupServer().catch((error) => console.error(`Server Error: ${error}`))
