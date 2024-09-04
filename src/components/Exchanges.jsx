import React from 'react';
import millify from 'millify';
import { Collapse, Row, Col, Typography, Statistic  } from 'antd';
import {  useGetCryptosQuery } from '../services/cryptoApi';
import Loader from  './Loader' ;

const { Title } = Typography;

const Exchanges = () => {
  const { data, isFetching} = useGetCryptosQuery(10);
  const styleObj = {
      fontSize: 20,
      color: "black",
      textAlign: "center",
      paddingTop: "10px",
  }

  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
    <Title level={2} className="heading">Exchanges Of Global Crypto Statistics in US Dollars</Title>
      <Row >
          <Col span={12} ><Statistic title="Total Cryptocurrencies" value={globalStats.total} /></Col>
          <Col span={12}><Statistic title="Total Exchange" value={millify(globalStats.totalExchanges)}/></Col>
          <Col span={12}><Statistic title="Total Market Cap" value={millify(globalStats.totalMarketCap)}/></Col>
          <Col span={12}><Statistic title="Total 24h Volume" value={millify(globalStats.total24hVolume)}/></Col>
          <Col span={12}><Statistic title="Total Markets" value={millify(globalStats.totalMarkets)}/></Col>
      </Row>
      <br />
      <Title level={2} className="heading">About Kryptoverse</Title>
        <div>
        <p style={styleObj}>
          Kryptocurrency/Cryptocurrency, sometimes referred to as crypto-currency or the shorter much simpler crypto, is any form
          of currency/monies that exists digitally or virtually and uses cryptography to secure transactions.Cryptocurrencies 
          don't have a central issuing or regulating authority like the govenment or central reserve banks, instead using a 
          decentralized system to record transactions and issue new units. This is also the reason why many countries are
          hesitant to embrace crypto because they want to have control and crypto is the opposite.
          <br />
          <br />
          Kryptoverse is Cryptocurrencies universe whereby its all about bringing you close to the elusive world 
          of Cryptocurrencies. Here we not only list up to date data on all mainstream cryptos like Bitcoin but we
          give you all the top Cryptocurrencies so that you can make a not only sound but also informed decision 
          as to which coins to go for. This application is for all who want to get into the crypto frenzy as it
          it evident that the idea of what money/currency is.
          <br />
          <br />
          We give you a list of coins. We order them by their rank, as they are ordered on marketcap.
          We also provide detailed current statistics on each coin/crypto, all this is based on each 
          coins volume in the last 24 hours. Cryptocurrencies like the traditional currencies we use 
          are volatile and prone to fluctuate based on market appetite and other external factors, so
          we also provide you with the current latest news from reputable news sources about cryptos.
          You wiil get news on how cryptos are performing and sentiments around cryptocurrencies.   
        </p>
      </div>
   
    </>
  );
};

export default Exchanges;
