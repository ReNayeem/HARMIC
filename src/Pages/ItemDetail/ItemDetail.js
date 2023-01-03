import { Link, useParams } from 'react-router-dom';
import useItemDetail from '../../hooks/useItemDetail';
import './ItemDetail.css'

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useItemDetail(itemId);
    const { _id, name, quantity, supplier, img, description, price } = item;

    const handleDeliver = () => {
        let deliver = 1;
        let quantityNumber = parseInt(item.quantity);
        let quantity = quantityNumber - deliver;

        let newQuantity = {
            _id: item._id,
            name: item.name,
            quantity: quantity,
            supplier: item.supplier,
            img: item.img,
            description: item.description,
            price: item.price
        }
        const url = `https://harmic-server.vercel.app//items/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setItem(newQuantity)
                }
            })
    }
    const newStock = e => {
        e.preventDefault();
        let quantityPrevious = item.quantity;
        let quantityPreviousNum = parseInt(quantityPrevious);
        let taken = parseInt(e.target.number.value);
        let quantity = quantityPreviousNum + taken;

        let newQuantity = {
            _id: item._id,
            name: item.name,
            quantity: quantity,
            supplier: item.supplier,
            img: item.img,
            description: item.description,
            price: item.price
        }
        const url = `https://harmic-server.vercel.app//items/${itemId}`
        fetch(url, {
            method: 'PUT',
            headers: {
                "content-type": 'application/json'
            },
            body: JSON.stringify(newQuantity)
        }).then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setItem(newQuantity)
                    e.target.reset();
                }
            })
    }
    return (
        <div className='container mb-5'>
            <div className='my-5 item-text-header text-center'>
                <h5 className='item-h5'>Item</h5>
                <h1 className='item-h1'>Details</h1>
            </div>
            <hr className='w-50 mx-auto' />
            <div className='item-details-2'>
                <div className='d-flex flex-wrap item-details justify-content-center align-items-center'>
                    <img className='item-detail-image' src={img} alt="" />
                    <div className='w-auto'>
                        <h3 className='item-name'>{name}</h3>
                        <p className='item-detail'>৳ {price} TK</p>
                        <p className='item-detail'>Quantity: {quantity}</p>
                        <p className='item-description'><small>{description}</small></p>
                        <p>Supplier: {supplier}</p>
                    </div>
                </div>
                <div className="d-flex mt-3 flex-column align-items-center justify-content-center flex-wrap">
                    <button onClick={() => { handleDeliver() }}
                        className="deliver-button mb-3">DELIVER</button>
                    <form className='update-item' onSubmit={newStock}>
                        <span className="d-flex">
                            <input placeholder='input here' className='quantity-input text-center' type="number" name="number" required /> <br />
                            <input className="update-stock-button" type="submit" value="UPDATE STOCK" />
                        </span>
                    </form>
                </div>
            </div>
            <div className='d-flex mt-3 justify-content-center justify-content-lg-end'>
                <Link as={Link} to="/manage">
                    <button className="banner-button">
                        <span className="hover-underline-animation"> Manage items </span>
                        <svg id="arrow-horizontal" xmlns="http://www.w3.org/2000/svg" width="30" height="10" viewBox="0 0 46 16">
                            <path id="Path_10" data-name="Path 10" d="M8,0,6.545,1.455l5.506,5.506H-30V9.039H12.052L6.545,14.545,8,16l8-8Z" transform="translate(30)"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default ItemDetail;