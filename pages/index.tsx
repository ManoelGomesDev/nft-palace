import Image from "next/image";
import imgPalace from "@/public/palace.jpeg";
import Card from "@/components/Card";
import nft1 from "@/public/images/1.jpeg";

export default function Home() {
  return (
    <div className="container">
   
      <div className="header">
      <div className="years">
        <p className="text_years">A HUNDRED</p>
        <p className="text_years">YEARS</p>
      </div>
     
       
     
          <p className="title">COPACABANA PALACE</p>
          <p className="subtitle">A BELMONT HOTEL</p>
          <p className="location">RIO DE JANEIRO</p>
    
      </div>

      <div className="main">
        <h1>Digital Collectibles</h1>

        <p className="text">
          Collect Immortalized Exclusive one of a kind historic Moments
        </p>
      </div>
      <div className="wrapper">

      
      <div className="container_cards">
        <div className="container_card1">
          <p className="title_card">Briggite Bardot - 1964</p>
          <p className="text_card">collection 04</p>
        </div>
        <div className="container_card2">
          <p className="title_card">Cristal Salon - 2012</p>
          <p className="text_card">collection 09</p>
        </div>

        <div className="container_card3">
          <p className="title_card">Bono and the edge - 2000</p>
          <p className="text_card">collection 08</p>
        </div>
      </div>

      <div className="container_cards">
        <div className="container_card4">
          <p className="title_card">Rei Charles III - 1931</p>
          <p className="text_card">collection 02</p>
        </div>

        <div className="container_card5">
          <p className="title_card">Great front - 2020</p>
          <p className="text_card">collection 10</p>
        </div>

        <div className="container_card6">
          <p className="title_card">Great Opening- 1923</p>
          <p className="text_card">collection 01</p>
        </div>
      </div>
      </div>
    </div>
  );
}
