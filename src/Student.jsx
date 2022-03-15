import { Card, ListGroup } from 'react-bootstrap'
import Score from "./Score";
const Student = (props) => {
  return ( 
    <Card style={{ width: '40rem' }}>
      <Card.Body>
        <Card.Header as="h3">
          Name: {props.student.name}
        </Card.Header>
        <Card.Text>
          Bio: {props.student.bio}
        </Card.Text>
        <ListGroup.Item variant="flush">
          {props.student.scores.map(card =>
            <Score key={card} card={card} />
          )}
        </ListGroup.Item>
      </Card.Body>
    </Card>
  );
}
export default Student
