import { Suspense, lazy, useState } from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
const SignIn = lazy(() => import('./assets/pages/SignIn'));


function App() {
  const BASE_URL = import.meta.env.VITE_REACT_APP_BASE_URL

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading</h1>}>
          <Routes>
            <Route path='/sign' element={ <SignIn/>}></Route>
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  )
}

export default App
