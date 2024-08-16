import React from 'react';
import ilustracaoBanner from 'assets/ilustracao-banner.svg';
import estilos from './Inicio.module.css';
import presente from 'assets/presente.svg';
import saque from 'assets/saque.svg';
import estrela from 'assets/estrela.svg';
import dispositivo from 'assets/dispositivo.svg';

export default function Inicio() {
  return (
    <>
      <div className={estilos.container} data-test='div1'>
        <div className={estilos.conteudo} data-test='div2'>
          <div className={estilos.banner} data-test='div3'>
            <h1 data-test="titulo-principal">
              Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!
            </h1>
            <img data-test='imagemTitulo'
              src={ilustracaoBanner}
              alt="Gráficos e uma pessoa com dinheiro na mão"
            />
          </div>
          <div className={estilos.vantagens} data-test='div4'>
            <h2 data-test="vantagens">Vantagens do nosso banco:</h2>
            <div className={estilos.vantagens__itens} data-test='div5'>
              <div className={estilos.vantagens__item} data-test='div6'>
                <img src={presente} alt="ícone de um presente" data-test='imagem1'/>
                <h3 data-test="titulo-vantagem01">Conta e cartão gratuitos</h3>
                <p data-test="vantagem01">
                  Isso mesmo, nossa conta é digital, sem custo fixo e mais que
                  isso: sem tarifa de manutenção.
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test='div7'>
                <img src={saque} alt="ícone de uma mão segurando um dinheiro" data-test='imagem2' />
                <h3 data-test="titulo-vantagem02">Saques sem custo</h3>
                <p data-test="vantagem02">
                  Você pode sacar gratuitamente 4x por mês de qualquer Banco
                  24h.
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test='div8'>
                <img src={estrela} alt="ícone de uma estrela" data-test='imagem3' />
                <h3 data-test="titulo-vantagem03">Programa de pontos</h3>
                <p data-test="vantagem03"> 
                  Você pode acumular pontos com suas compras no crédito sem
                  pagar mensalidade!
                </p>
              </div>
              <div className={estilos.vantagens__item} data-test='div9'>
                <img data-test='imagem4'
                  src={dispositivo}
                  alt="ícone de um dispositivo como notebook"
                />
                <h3 data-test="titulo-vantagem04">Seguro Dispositivos</h3>
                <p data-test="vantagem04">
                  Seus dispositivos móveis (computador e laptop) protegidos por
                  uma mensalidade simbólica.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
