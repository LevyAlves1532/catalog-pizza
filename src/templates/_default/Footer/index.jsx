const FooterDefault = props => {
  return (
    <div className={`Footer ${props.mode}`}>
      <div className="Footer__container">
        <p>Layout feito por Lêvy Alves - <a href="https://levy-portfolio.vercel.app/" target="_blank">Acesse o Portfolio</a></p>
      </div>
    </div>
  );
}

export default FooterDefault;