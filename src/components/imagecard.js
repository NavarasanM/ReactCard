import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';

function ImageCard({image}) {
  const imageurl = image.urls.raw;
  // console.log(imageurl);
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageurl}/>
      <Card.Body>
        <Card.Title>{image.user.username}</Card.Title>
        <Card.Title>{image.user.location}</Card.Title>
        <Card.Text>
        {image.alt_description}
        </Card.Text>

        <Button as={Link} to={`${image.links.download}`} variant="primary">view</Button>
      </Card.Body>
    </Card>
  );
}

export default ImageCard;