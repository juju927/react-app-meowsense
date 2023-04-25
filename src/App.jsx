import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from './pages/Main'

const MyCat = React.lazy(()=> import('./pages/MyCat'))
const ArtCat = React.lazy(()=> import('./pages/ArtCat'))

const App = () => {
  return (
    <div className="centered">
      <Suspense fallback={<p>loading...</p>}>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/my-cat" element={<MyCat />} />
          <Route path="/art-cat" element={<ArtCat />} />
        </Routes>
      </Suspense>
    </div>
  );
}

export default App;
