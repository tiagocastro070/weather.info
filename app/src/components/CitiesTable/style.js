import style from 'styled-components';

const TableContainer = style.table`
  width: 100%;
  padding: 10px 15px;
  box-shadow: 0 3px 5px rgba(0, 0, 0, 0.1);
  border-radius: 7px;
  border-spacing: 0;
  background-color: white;
  font-size: 13px;

  @media (min-width: 600px) {
    font-size: 15px;
  }
`;

const TableHeader = style.thead`
  opacity: 0.4;
  font-size: 0.8em;
  text-transform: uppercase;

  td {
    cursor: pointer;
  }
`;

const TableLine = style.tr`
  overflow: hidden;
  border-radius: 7px;

  &:hover {
    td {
      background-color: rgba(0, 0, 0, 0.1);
    }
  }

  td {
    &:first-child {
      border-radius: 7px 0 0 7px;
    }

    &:last-child {
      border-radius: 0 7px 7px 0;
    }
  }
`;

const TableCell = style.td`
  padding: 10px;

  a {
    display: block;
    color: inherit;
    text-decoration: none;
  }
`;

export {
  TableContainer,
  TableHeader,
  TableLine,
  TableCell
}