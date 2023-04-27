import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from './pages/Main'
import ErrorPage from './pages/ErrorPage'

const MyCat = React.lazy(()=> import('./pages/MyCat'))
const ArtCat = React.lazy(()=> import('./pages/ArtCat'))
const AdviceCat = React.lazy(()=> import('./pages/AdviceCat'))
const FeelingCat = React.lazy(()=> import('./pages/FeelingCat'))
const JokeCat = React.lazy(()=> import('./pages/JokeCat'))

const App = () => {
  return (
    <div className="centered">
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path='*' element={<ErrorPage />}/> 
          <Route path="/" element={<Main />} />
          <Route path="/my-cat" element={<MyCat />} />
          <Route path="/art-cat" element={<ArtCat />} />
          <Route path="/advice-cat" element={<AdviceCat />} />
          <Route path="/feeling-cat" element={<FeelingCat />} />
          <Route path="/joke-cat" element={<JokeCat />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
