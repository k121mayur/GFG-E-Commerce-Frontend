import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
// import { propTypes } from 'react-props';

function ProductCard({id, title, price, description, category, image, rating, addItem, buttonStatus=true}) {
  return (
    <div className="m-3">
      <Card style={{ width: '18rem' }} className='shadow'>
        <Card.Img variant="middle" src={image} alt={title} style={{ height: '200px', width: '200px' }} className='p-2 m-auto' />
        <Card.Body className='d-flex flex-column'>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {category}
          </Card.Text>

          { buttonStatus && <Button variant="primary" onClick={() => addItem(id)}>Add to Cart</Button>}
        </Card.Body>
      </Card>
    </div>
  );
}

// ProductCard.propTypes = {
//   id : propTypes.number,
//   title : propTypes.string,
//   price : propTypes.number,
//   description : propTypes.string,
//   category : propTypes.string,
//   image : propTypes.string,
//   rating : propTypes.object
// };

export default ProductCard;