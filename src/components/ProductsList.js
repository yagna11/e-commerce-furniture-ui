import React from 'react'
import productData from '../data/products.json'

const ProductsList = () => {
    return (
        <div>
        {productData.products.map(category => (
            <div key={category.category}>
                <h2>{category.category}</h2>
                <div>
                    {category.items.map(item => (
                        <div key={item.name}>
                            <img src={item.imagePath} alt={item.name} />
                            <strong>{item.name}</strong> <br />
                            Price: ${item.price} <br />
                            Wood Type: {item.woodType} <br />
                            Customizable: {item.customizable ? 'Yes' : 'No'} <br />
                            Financing Available: {item.financingOption ? 'Yes' : 'No'} <br />
                            {item.discount && (<span>Discount: {item.discount} <br /></span>)}
                        </div>
                    ))}
                </div>
            </div>
        ))}
    </div>
    )
}

export default ProductsList