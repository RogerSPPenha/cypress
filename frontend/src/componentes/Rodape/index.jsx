import React from 'react';
import estilos from './Rodape.module.css';

import logoBytebank from './logo-bytebank.svg';
import instagram from 'assets/instagram.svg';
import whatsapp from 'assets/whatsapp.svg';
import youtube from 'assets/youtube.svg';

export default function Rodape() {
  return (
    <footer className={estilos.container}>
      <div className={estilos.caixa__rodape}>
        <div className={estilos.coluna__infos}>
          <h3 data-test='servicos'>Serviços</h3>
          <p data-test='servicos1'>Conta corrente</p>
          <p data-test='servicos2'>Conta PJ</p>
          <p data-test='servicos3'>Cartão de crédito</p>
        </div>
        <div className={estilos.coluna__infos}>
          <h3 data-test='contato'>Contato</h3>
          <p data-test='contato1'>0800 004 250 08</p>
          <p data-test='contato2'>meajuda@bytebank.com.br</p>
          <p data-test='contato3'>ouvidoria@bytebank.com.br</p>
        </div>
        <div className={estilos.coluna__infos}>
          <h3 data-test='autor'>Desenvolvido por Alura</h3>
          <img
            className={estilos.logo__bytebank}
            src={logoBytebank}
            alt="Logo do Bytebank"
          />
          <div className={estilos.logos}>
            <img src={instagram} alt="Logo do instagram" />
            <img src={whatsapp} alt="Logo do whatsapp" />
            <img src={youtube} alt="Logo do youtube" />
          </div>
        </div>
      </div>
    </footer>
  );
}
