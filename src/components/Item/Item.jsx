import './Item.css'
import { Link } from 'react-router-dom'
const Item = ({id, nombre, precio, img}) => {


  return (

    <div className='cardProducto'>
        <img className='imgProducto' src={img} alt={nombre} />
        <p className='infoItem'>ID: {id} </p>
        <p className='infoItem itemName' > {nombre} </p>
        <p className='infoItem priceItem' >Precio: {precio} </p>


        <Link to={`/Tienda/item/${id}`}> Ver Detalles </Link>
    </div>
  )
}

export default Item