import { Card } from 'react-bootstrap'
const Score = (props) => {
  return ( 
    <Card>
      Score: {props.card.score} / Date: {props.card.date}
    </Card>

  );
}

export default Score;