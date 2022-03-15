const Score = (props) => {
  return ( 
    <>
      <p>Score: {props.card.score} / Date: {props.card.date}</p>
    </>
  );
}

export default Score;