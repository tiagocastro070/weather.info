import style, { keyframes } from 'styled-components';
import { FiSearch } from "react-icons/fi";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const SearchContainer = style.div`
  width: 100%;
  position: relative;
  margin: 0 auto;
  z-index: 10;
`;

const SearchInput = style.input`
  display: block;
  width: 100%;
  height: 40px;
  padding: 0 50px 0 10px;
  border-radius: 7px;
  border: none;
  background-color: rgba(0, 0, 0, 0.1);

  &:focus {
    outline: none;
    background-color: rgba(0, 0, 0, 0.15);
  }
`;

const SearchIcon = style(FiSearch)`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  right: 15px;
`;

const rotate = keyframes`
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
`;

const SearchSpinner = style(AiOutlineLoading3Quarters)`
  display: ${props => props.show ? 'block' : 'none'};
  position: absolute;
  right: 15px;
  opacity: 0.4;
  animation: ${rotate} 0.5s linear infinite;
`

const SearchAutocomplete = style.ul`
  display: ${props => props.results && props.show ? 'block' : 'none'};
  width: 100%;
  padding: 10px 0;
  position: absolute;
  top: calc(50% + 25px);
  left: 0;
  margin: 0;
  border-radius: 7px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  background-color: white;
  list-style: none;
`;

const SearchResult = style.li`
  padding: 5px 15px;
  font-size: 14px;
  text-transform: uppercase;
  cursor: pointer;

  &:hover {
    background-color: var(--color-primary);
    color: white;
  }

  small {
    display: block;
  }
`;

export {
  SearchContainer,
  SearchInput,
  SearchIcon,
  SearchSpinner,
  SearchAutocomplete,
  SearchResult
}