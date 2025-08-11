import React, { useEffect, useState } from "react";
import axios from "axios";
import '../Style/CryptoCard.css';
import c1 from '../Asset/c1.webp';

const cryptos =[
    {name: "Bitcoin (BTC)", ticker:"BTC", img:c1, color:"#ff8c00"},
    {name: "Toncoin (TON)", ticker:"TON", img:c1, color:"#1e90ff"},
    {name: "Ethereum (ETH)", ticker:"ETH", img: c1, color:"#40e0d0"}
];

export const CryptoCards =()=>{
    const[prices, setPrices]= useState({});
    // when the page rendere, show the price ogf each Coin
    useEffect(()=>{
        axios.get("https://pro-api.coingecko.com/api/v3/coins?ids=bitcoin,ethereum,the-open-network&vs_currencies=usd")
        .then((res)=>{
            setPrices({
                BTC: res.data.bitcoin.usd,
                EHT: res.data.ethereum.usd,
                TON: res["the-open-network&vs"]
            })
        })
        .catch((err)=>{
            console.error("Error fetching api is:", err)
        })
    },[])
    return(
     <div className="cards-wrapper">
        {cryptos.map((c)=>{
            <div key={c.ticker} className="card-3d">
                <div className="card-border"></div>
                <div className="card-content">
                    <img src={c.img} className="crypto-img"/>
                    <h2 className="crypto-title">{c.name}</h2>
                    <p className="crypto-price">
                         {prices[c.ticker]?`$${process[c.ticker].toFixed(2)}`: "Loading..."}
                     </p>
                </div>



            </div>

        })}
     </div>

    )
};