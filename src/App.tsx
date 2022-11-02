import { Suspense } from 'react'
import { Route, Routes } from 'react-router-dom'

import { AboutPageLazy } from './pages/AboutPage/AboutPage.lazy'
import { MainPageLazy } from './pages/MainPage/MainPage.lazy'

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Routes>
        <Route path='/' element={<MainPageLazy />} />
        <Route path='/help-me-pls' element={<AboutPageLazy />} />
      </Routes>
    </Suspense>
  )
}

export default App
