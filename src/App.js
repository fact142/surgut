import './App.css';
import React, { useEffect, useState } from 'react';
import kazanPhoto from './kazan.jpg'
import weddingPhoto from './wedding.jpg'

function App() {
  const [kazan, setKazan] = useState(new Date('2022-03-20T03:54:00') - Date.now())
  const [wedding, setWedding] = useState(new Date('2040-03-08T00:00:00') - Date.now())
  const fromMsToDate = (ms) => {
    function div(val, by) {
      return (val - val % by) / by;
    }
    const days = div(ms, 1000*60*60*24)
    const hours = div((ms - days * 3600000*24), 1000*60*60)
    const minutes = div(ms - days * 3600000*24 - hours * 3600000, 1000*60)
    const seconds = div((ms - days * 3600000*24 -hours * 3600000 - minutes * 60000) , 1000)
    return `${days} дней ${hours.toFixed(0)} часов ${minutes.toFixed(0)} минут ${seconds.toFixed(0)} секунд`
  }
  useEffect(() => {
    const id = setInterval(() => {
      setKazan(new Date('2022-03-25T03:54:00') - Date.now());
      setWedding(new Date('2040-03-08T00:00:00') - Date.now());
    }, 1000);
    return () => clearInterval(id);
  }, []);
  return (
    <div className="App">
      <h1>Сколько осталось до счастья?</h1>
      <div className="wrapper">
        <div className="card">
          <h3 >До приезда в Казань</h3>
          <p>{fromMsToDate(kazan)}</p>
          <img src={kazanPhoto} className="img"/>
        </div>
        <div className="card">
          <h3>До 40-летия</h3>
          <p>{fromMsToDate(wedding)}</p>
          <img src={weddingPhoto} className="img"/>
        </div>
      </div>
      <div>
        <form action="https://vk.com/im?sel=163065320">
          <h2>А пока время не пришло, его можно всегда скоротать тут</h2>
          <button className="button">Тут</button>
        </form>
      </div>
    </div>
  );
}

export default App;
