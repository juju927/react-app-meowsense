import React, { useState } from "react";
import Message from "./components/Message";
import MyCat from "./pages/MyCat";

const App = () => {
  const [errCat, setErrCat] = useState('');
  const [goodCat, setGoodCat] = useState([]);

  const getCat = async(tag='cute') => {
    const res = await fetch('https://api.thecatapi.com/v1/images/search', {
          method: 'GET',
          headers: {
            'Content-Type': "application/json",
            'x-api-key': import.meta.env.THECATAPI_API_KEY,
            'category-ids': 14
          },
        });
      
    const data = await res.json();
    console.log(data)
    
    if (res.status === 200) {
      setGoodCat(data)
    } else {
      const link = 'https://http.cat/' + res.status + '.jpg';
      setErrCat(link)
    }
  }

  return (
    <div className="centered">
      <button onClick={getCat}>CAT!!</button>
      { errCat && <img src={errCat}></img>}
      {goodCat.map((item, idx) => {
        return (
        <Message key={item.id} id={item.id} sender='cat' content={item.url}/>
        )
      })}
      <MyCat />


    </div>
  );
}

export default App;
