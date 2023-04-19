import './ItemDetail.css'

const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedorItem'>
        <img src= {img} alt= {nombre} />
        <h2>{nombre}</h2>
        <h3>Precio: {precio} </h3>
        <h3> ID: {id} </h3>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam iste reiciendis tempora unde! Quam commodi esse dicta odit nobis, enim, accusamus corrupti veritatis, excepturi aliquam laudantium? Veritatis ex sapiente deserunt.</p>

      
    </div>
  )
}

export default ItemDetail
