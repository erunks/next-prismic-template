import { card } from '../styles/Home.module.scss';

const GridCard = ({ children, href }) => (
  <a href={href} className={card}>
    { children }
  </a>
);

export default GridCard;
