import React from "react";
import "./Prices.css";

const Prices = () => {
  return (
    <div className="Prices">
      <h2>Nossos Valores</h2>
      <div className="line1"></div> 
      <div class="container group">
        <div class="grid-1-5">
          <h2>Básico</h2>
          <h3>
          <sup>R$</sup>136<span class="small">,00/mês</span>
          </h3>
          <p>Social Media</p>
          <ul>
            <li>Posts com <strong>100%</strong> de Garantia</li>
            <li>Com Limite de <strong>1 Postagem</strong> por Semana</li>
            <li>Ao seu <strong>gosto</strong>, só sendo postado após sua aprovação</li>
          </ul>
          <a href="" class="button">
            Vamos?
          </a>
        </div>
        <div class="grid-1-5">
          <h2>Intermediário</h2>
          <h3>
          <sup>R$</sup>290<span class="small">,00/mês</span>
          </h3>
          <p>Social Media</p>
          <ul>
          <li>Posts com <strong>100%</strong> de Garantia</li>
            <li>Com Limite de <strong>3 Postagem</strong> por Semana</li>
            <li>Ao seu <strong>gosto</strong>, só sendo postado após sua aprovação</li>
          </ul>
          <a href="" class="button">
            Vamos?
          </a>
        </div>
        <div class="grid-1-5">
          <h2>Avançado</h2>
          <h3>
            <sup>R$</sup>560<span class="small">,00/mês</span>
          </h3>
          <p>75,000 monthly visits</p>
          <ul>
          <li>Posts com <strong>100%</strong> de Garantia</li>
            <li>Com Limite de <strong>5 Postagem</strong> por Semana</li>
            <li>Ao seu <strong>gosto</strong>, só sendo postado após sua aprovação</li>
          </ul>
          <a href="" class="button">
            Vamos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prices;
