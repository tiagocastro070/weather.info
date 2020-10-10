import style from 'styled-components';
import { NavLink } from 'react-router-dom';

const CitiesContainer = style.ul`
  padding: 0 20px 0 0;
  margin: 0;
  list-style: none;
`;

const CityItem = style(NavLink)`
  display: block;
  padding: 5px 35px 5px 10px;
  position: relative;
  margin-bottom: 10px;
  border-radius: 7px;
  opacity: 0.5;
  overflow: hidden;
  background-color: ${props => props.active ? 'rgba(0, 0, 0, 0.2)' : 'transparent'};
  color: var(--color-default);
  cursor: pointer;
  white-space: nowrap;
  text-decoration: none;
  text-overflow: ellipsis;

  &:hover {
    background-color: rgba(0, 0, 0, 0.1);

    button {
      display: block;
      color: white;
    }
  }

  &.active {
    opacity: 1;
    background-color: var(--color-primary) !important;
    color: white;
  }
`;

const CityItemRemover = style.button`
  display: none;
  width: 30px;
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  opacity: 0.25;
  border: none;
  background-color: transparent;

  &:hover {
    opacity: 1;
  }
`;

export {
  CitiesContainer,
  CityItem,
  CityItemRemover
}