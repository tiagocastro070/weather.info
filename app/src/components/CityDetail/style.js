import style from 'styled-components';
import { Link } from 'react-router-dom';

const BackBtn = style(Link)`
  display: inline-flex;
  align-items: center;
  opacity: 0.2;
  color: var(--color-default);
  text-decoration: none;

  &:hover {
    opacity: 1;
  }
`;

const CityMain = style.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  justify-content: center;
  margin: 50px 0;
  
  @media (min-width: 600px) {
    flex-direction: row;
        
    span {
      margin-right: 20px;
    }
  }
  
  span {
    font-size: 90px;
    font-weight: 300;

    &:after {
      content: 'º';
      font-size: 0.4em;
      vertical-align: super;
    }
  }

  img {
    margin-right: 15px;
  }

  a {
    display: inline-flex;
    align-items: center;
    padding: 5px 10px;
    border-radius: 7px;
    background-color: #eee;
    color: var(--color-default);
    font-size: 12px;
    text-decoration: none;
    text-transform: uppercase;

    svg {
      display: inline-block;
      margin-right: 10px;
      font-size: 1.2em;
    }
  }

  div {
    text-align: center;

    @media (min-width: 600px) {
      text-align: left;
    }
  }
`;

const CityTitle = style.h1`
  margin: 0 0 5px 0;
  font-size: 30px;
  font-weight: 300;
`;

const ChartToggle = style.button`
  display: flex;
  align-items: center;
  width: 40px;
  height: 40px;
  border-radius: 7px;
  border: none;
  outline: none;
  background-color: transparent;
  opacity: 0.3;
  font-size: 2em;
  cursor: pointer;

  &:hover {
    opacity: 1;
    background-color: #eee;
  }
`;

const ChartBarTitle = style.h3`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 20px;
  color: rgba(0, 0, 0, 0.1);
  font-size: 50px;
  font-weight: 100;
  text-transform: uppercase;
`;

const ChartBar = style.div`
  display: flex;
  align-items: stretch;
  flex-direction: column;
  font-weight: bold;

  p, img {
    flex-shrink: 0;
  }

  p {
    width: 50px;
  }

  img {
    max-width: 40px;
    margin: 0 20px;
  }
`;

const ChartBarItem = style.div`
  display: flex;
  align-items: center;
`;

const ChartBarColumn = style.div`
  display: flex;
  align-items: center;
  width: 100%;

  span {
    display: block;
    min-width: 20px;
    height: 4px;
    border-radius: 4px;
    background: linear-gradient(90deg, rgb(255, 193, 7, 1) 0%, rgb(255, 193, 7, 0) 100%);
  }
`;

export {
  BackBtn,
  CityMain,
  CityTitle,
  ChartToggle,
  ChartBarTitle,
  ChartBar,
  ChartBarItem,
  ChartBarColumn
}