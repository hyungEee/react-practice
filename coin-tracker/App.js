import { useState, useEffect } from "react";

function App() {
  const [loading,setLoading]=useState(true);
  const [coins,setCoins]=useState([]);
  const [money,setMoney]=useState(0);
  const [price,setPrice]=useState(0);
  const [unit,setUnit]=useState("");
  const [selected,setSelected]=useState(false);
  const onSubmit=(event)=>{
    event.preventDefault();
  }
  const onChange=(event)=>{
    setMoney(event.target.value);
  }
  const onChangeOption=(event)=>{
    if(event.target.value==="first-opt"){
      setSelected(false);
      return;
    }
    setSelected(true);
    const coinInfo=event.target.value;
    setPrice(parseFloat(coinInfo.split('$',2)[1]));
    setUnit(coinInfo.split('(',2)[1].split(')',2)[0]);
  }
  useEffect(()=>{
    fetch("https://api.coinpaprika.com/v1/tickers")
    .then((response)=>response.json())
    .then(
      (json)=>{
        setCoins(json);
        setLoading(false);
      });
  },[]);

  return (
    <div>
      <h1>The Coins! {loading?null:`(${coins.length})`}</h1>
      <form onSubmit={onSubmit}>
        <input 
          value={money}
          onChange={onChange}
          type="number"
          placeholder="Write your money(USD)"
        />
        <button>submit</button>
      </form>
      {loading?(
        <strong>Loading...</strong>
      ):(
        <select onChange={onChangeOption}>
          <option value="first-opt">select coin</option>
          {coins.map((coin)=>(
            <option>
              {coin.name} ({coin.symbol}):${coin.quotes.USD.price}
            </option>
        ))}
      </select>
      )}
      <br></br>
      {price>0&&selected===true?<strong>You can buy {money/price} {unit}!</strong>:""}
    </div>
  );
}

export default App;
