import React, { useEffect, useRef, useState } from 'react';
import data from './ProductMap';
import '../Products/Product.css';
import '../Products/Product-Responsive.css'
import ProductPopup from './ProducPopup';
import { usePopup } from './CentralProvide';
import Popup1 from './Popup1';
import Popup2 from './Popup2';
import Popup3 from './Popup3';
import Popup4 from './Popu4';


const Products = () => {
    const elementRef = useRef(null);
    const { openPopup, openPopup1, openPopup2, openPopup3, openPopup4 } = usePopup();

    const [selectedProduct, setSelectedProduct] = useState(null);

    const handleProductClick = (item) => {
        setSelectedProduct(item);
        openPopup();
    };


    const [selectedProduct1, setSelectedProduct1] = useState(null);

    const handleProductClick1 = (item) => {
        setSelectedProduct1(item);
        openPopup1();
    };


    const [selectedProduct2, setSelectedProduct2] = useState(null);

    const handleProductClick2 = (item) => {
        setSelectedProduct2(item);
        openPopup2();
    };


    const [selectedProduct3, setSelectedProduct3] = useState(null);

    const handleProductClick3 = (item) => {
        setSelectedProduct3(item);
        openPopup3();
    };


    const [selectedProduct4, setSelectedProduct4] = useState(null);

    const handleProductClick4 = (item) => {
        setSelectedProduct4(item);
        openPopup4();
    };

    useEffect(() => {
        if (elementRef.current) {
            elementRef.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }, []);
    const Medicine = data.slice(0, 20);
    const Doctor = data.slice(20, 40);
    const Adoption = data.slice(40, 60);
    const Food = data.slice(60, 80);
    const Accessories = data.slice(80, 100);
    return (
        <div ref={elementRef} className='Productmain'>
            <div className='Product-main-body-part'>

                {/* Medicine */}
                <div className="Product-store-container-sec">
                    <div className="Product-title-container-sec">
                        <h1 id="Product-title">Medical Service</h1>
                    </div>
                    <div className='Product-categories-section'>
                        {Medicine.map((item) => (
                            <div key={item.id} className='Product-item-container' onClick={() => handleProductClick(item)}>
                                <img id='Product-Card-Img' src={item.img} alt='pic' />
                                <p id='Product-item-name'>{item.name}</p>
                                <p id='Product-item-price'>Price: {item.price}</p>
                            </div>
                        ))}

                        {/* Render ProductPopup outside the loop and pass the selected product */}
                        {selectedProduct && (
                            <ProductPopup
                                img={selectedProduct.img}
                                name={selectedProduct.name}
                                price={selectedProduct.price}
                                delievery={selectedProduct.delievery}
                                save={selectedProduct.save}
                            />
                        )}
                    </div>
                </div>

                {/* Doctor */}
                <div className="Product-store-container-sec">
                    <div className="Product-title-container-sec">
                        <h1 id="Product-title">Doctors Service</h1>
                    </div>
                    <div className='Product-categories-section'>
                        {Doctor.map((item) => (
                            <div key={item.id} className='Product-item-container' onClick={() => handleProductClick1(item)}>
                                <img id='Product-Card-Img' src={item.img} alt='pic' />
                                <p id='Product-item-name'>{item.name}</p>
                                <p id='Product-item-price'>Price: {item.price}</p>
                            </div>
                        ))}

                        {/* Render ProductPopup outside the loop and pass the selected product */}
                        {selectedProduct1 && (
                            <Popup1
                                img={selectedProduct1.img}
                                name={selectedProduct1.name}
                                price={selectedProduct1.price}
                                delievery={selectedProduct1.delievery}
                                save={selectedProduct1.save}
                            />
                        )}
                    </div>
                </div>

                {/* Adoption */}
                <div className="Product-store-container-sec">
                    <div className="Product-title-container-sec">
                        <h1 id="Product-title">Animal Adoption</h1>
                    </div>
                    <div className='Product-categories-section'>
                        {Adoption.map((item) => (
                            <div key={item.id} className='Product-item-container' onClick={() => handleProductClick2(item)}>
                                <img id='Product-Card-Img' src={item.img} alt='pic' />
                                <p id='Product-item-name'>{item.name}</p>
                                <p id='Product-item-price'>Price: {item.price}</p>
                            </div>
                        ))}

                        {/* Render ProductPopup outside the loop and pass the selected product */}
                        {selectedProduct2 && (
                            <Popup2
                                img={selectedProduct2.img}
                                name={selectedProduct2.name}
                                price={selectedProduct2.price}
                                delievery={selectedProduct2.delievery}
                                save={selectedProduct2.save}
                            />
                        )}
                    </div>
                </div>

                {/* Food */}
                <div className="Product-store-container-sec">
                    <div className="Product-title-container-sec">
                        <h1 id="Product-title">Animal Foods</h1>
                    </div>
                    <div className='Product-categories-section'>
                        {Food.map((item) => (
                            <div key={item.id} className='Product-item-container' onClick={() => handleProductClick3(item)}>
                                <img id='Product-Card-Img' src={item.img} alt='pic' />
                                <p id='Product-item-name'>{item.name}</p>
                                <p id='Product-item-price'>Price: {item.price}</p>
                            </div>
                        ))}

                        {/* Render ProductPopup outside the loop and pass the selected product */}
                        {selectedProduct3 && (
                            <Popup3
                                img={selectedProduct3.img}
                                name={selectedProduct3.name}
                                price={selectedProduct3.price}
                                delievery={selectedProduct3.delievery}
                                save={selectedProduct3.save}
                            />
                        )}
                    </div>
                </div>

                {/* Accessories */}
                <div className="Product-store-container-sec">
                    <div className="order-main-title-container-sec">
                        <h1 id="Product-title">Animal Accessories</h1>
                    </div>
                    <div className='Product-categories-section'>
                        {Accessories.map((item) => (
                            <div key={item.id} className='Product-item-container' onClick={() => handleProductClick4(item)}>
                                <img id='Product-Card-Img' src={item.img} alt='pic' />
                                <p id='Product-item-name'>{item.name}</p>
                                <p id='Product-item-price'>Price: {item.price}</p>
                            </div>
                        ))}

                        {/* Render ProductPopup outside the loop and pass the selected product */}
                        {selectedProduct4 && (
                            <Popup4
                                img={selectedProduct4.img}
                                name={selectedProduct4.name}
                                price={selectedProduct4.price}
                                delievery={selectedProduct4.delievery}
                                save={selectedProduct4.save}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Products;
