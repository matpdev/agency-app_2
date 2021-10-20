import React from "react";
import "./Prices.css";
import './Prices.scss';

const Prices = () => {
  return (
    <div className="Prices">
      <h2>Nossos Valores</h2>
      <div className="line1"></div>
      {/* <div className="prices">
        <div className="prices-box">
          <h1>Plano Básico</h1>
          <h3>
            Criação de Site <br />
            Institucional
          </h3>
          <h2>R$ 2.500,00</h2>
          <h4>
            <strong>+</strong> Garantias
          </h4>
          <h4>
            <strong>+</strong> Manutenção Mensal
          </h4>
          <h4>Mussum Ipsum</h4>
          <h4>Mussum Ipsum</h4>
          <h4>Mussum Ipsum</h4>
          <h4>Mussum Ipsum</h4>
          <h4>Mussum Ipsum</h4>
        </div>
        <div className="prices-box">
          <h1>Plano Avançado</h1>
        </div>
        <div className="prices-box">
          <h1>Plano Pro</h1>
        </div>
      </div> */}
      <div class="container group">
        <div class="grid-1-5">
          <h2>Basic</h2>
          <h3>
            <span class="uppercase">Free</span>
          </h3>
          <p>10,000 monthly visits</p>
          <ul>
            <li>Limited Email Support</li>
            <li>Unlimited Data Transfer</li>
            <li>10GB Local Storage</li>
          </ul>
          <a href="" class="button">
            Sign Up
          </a>
        </div>
        <div class="grid-1-5">
          <h2>Startup</h2>
          <h3>
            <sup>$</sup>79<span class="small">/mo</span>
          </h3>
          <p>25,000 monthly visits</p>
          <ul>
            <li>Limited Email Support</li>
            <li>Unlimited Data Transfer</li>
            <li>20GB Local Storage</li>
          </ul>
          <a href="" class="button">
            Sign Up
          </a>
        </div>
        <div class="grid-1-5">
          <h2>Growth</h2>
          <h3>
            <sup>$</sup>179<span class="small">/mo</span>
          </h3>
          <p>75,000 monthly visits</p>
          <ul>
            <li>Email Support</li>
            <li>Unlimited Data Transfer</li>
            <li>30GB Local Storage</li>
          </ul>
          <a href="" class="button">
            Sign Up
          </a>
        </div>
        <div class="grid-1-5">
          <h2>Premium</h2>
          <h3>
            <sup>$</sup>499<span class="small">/mo</span>
          </h3>
          <p>225,000 monthly visits</p>
          <ul>
            <li>Email Support</li>
            <li>Phone Support</li>
            <li>Unlimited Data Transfer</li>
          </ul>
          <a href="" class="button">
            Sign Up
          </a>
        </div>
        <div class="grid-1-5">
          <h2>Enterprise</h2>
          <h3>
            <span class="uppercase">Let's Talk</span>
          </h3>
          <p>1M+ monthly visits</p>
          <ul>
            <li>Email Support</li>
            <li>Phone Support</li>
            <li>Dedicated Environment</li>
            <li>Customized Plan</li>
          </ul>
          <a href="" class="button">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Prices;
