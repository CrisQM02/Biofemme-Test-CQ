import { useParams } from 'react-router-dom';


const ProductPage = () => {
    const {identifier} = useParams();

    return (
        <div className="product-page">
            <h1>PRODUCTS HERE</h1>
            <h2>{identifier}</h2>
        </div>
    )
}

export default ProductPage;