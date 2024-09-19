import './App.css'
import { DarkModeComponent } from './Components/DarkModeComponent'
import { DarkModeProvider } from './Context/DarkMode'

function App() {

  return (
    <>
    <DarkModeProvider>
      <DarkModeComponent />
    </DarkModeProvider>
    </>
  )
}

export default App
