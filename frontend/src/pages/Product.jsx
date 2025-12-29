  import { useContext, useEffect, useState } from 'react';
  import { useParams } from 'react-router-dom';
  import { ShopContext } from '../context/ShopContext.jsx';
  import Title from '../components/Title.jsx';
  import RelatedProducts from './RelatedProducts.jsx';

  const Product = () => {
    const { productId } = useParams();
    const { products, addToCart, cart } = useContext(ShopContext);
    const [productData, setProductData] = useState(null);
    const [selectedSize, setSelectedSize] = useState(null);  // State for selected size

    useEffect(() => {
      const fetchProductData = () => {
        const product = products.find(item => item._id === productId);
        if (product) {
          setProductData(product);
        }
      };

      fetchProductData();
    }, [productId, products]);

    useEffect(() => {
      console.log("Current cart:", cart);
    }, [cart]);

    const handleSizeSelection = (size) => {
      setSelectedSize(size);  // Update selected size
    };

    const handleAddToCart = () => {
      if (productData && selectedSize) {
        addToCart(productData._id, selectedSize);
        console.log("Added to cart:", {
          id: productData._id,
          name: productData.name,
          size: selectedSize,
          price: productData.price  
        });
      }
    };  

    return (
      <div className='mt-10 md:mt-32'>
        {productData ? (
          <>
            <div className='flex flex-col sm:flex-row border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100'>
              <div className='w-full sm:w-2/4 lg:w-1/3 px-5 md:px-2 mb-3'>
                <img src={productData.image} alt={productData.name} className='w-full rounded-xl'/>
              </div>
              <div className='w-full sm:w-2/3 mx-4 sm:ml-12 px-3 pr-12 sm:pr-0 sm:px-0'>
                <h1 className='text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold mb-4'>{productData.name}</h1>
                <p className='text-md font-semibold my-2'>{productData.description}</p>

                <div className='flex flex-wrap hover:text-gray-600'>
                  <p className='text-md font-semibold my-1 mr-2'>Category :- </p>
                  <p className='text-md font-semibold my-1'>{productData.category}</p>
                </div>

                <div className='flex flex-wrap hover:text-gray-600'>
                  <p className='text-3xl font-bold my-2'>${productData.price}</p>
                </div>

                <ul className='flex'>
                  <p className='text-xl font-semibold my-1 mr-2'>Size :- </p>
                  <div className='flex flex-row gap-3 items-center'>
                    {productData.sizes.map((size, index) => (
                      <label key={index}>
                        <input 
                          type="radio" 
                          name="size" 
                          value={size} 
                          checked={selectedSize === size}
                          onChange={() => handleSizeSelection(size)}
                        />
                        {size}
                      </label>
                    ))}
                  </div>
                </ul>

                <div>
                  <button onClick={() => addToCart(productData._id, selectedSize)} className='text-md font-bold my-1 w-36 h-10 cursor-pointer bg-black text-white hover:bg-gray-800'>
                    ADD TO CART
                  </button>
                </div>
                <hr className='my-10' />
                <div>
                  <p className='text-sm text-gray-500 my-2'>100% Original Products</p>
                  <p className='text-sm text-gray-500 my-2'>Cash on delivery available on this product</p>
                  <p className='text-sm text-gray-500 my-2'>Easy return and exchange policy within 7 days</p>
                </div>
              </div>
            </div>
            
            {/* Review section at the bottom */}
            <div className='mt-20'>
              <div className='flex'>
                <b className='text-sm border px-5 py-3'>Description</b>
                <p className='text-sm border px-5 py-3'>Reviews (122)</p>
              </div>
              {/*further review details here */}

              <div className='flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500'>
                  <p>An eCommerce website is an online platform where businesses or individuals can sell products or services to consumers through the internet. The website typically serves as a virtual storefront, allowing users to browse, search, and purchase items from a wide range of categories. Below is a detailed description of key elements and functionality of a standard eCommerce website</p>
                  <p>An eCommerce website streamlines the shopping experience by providing customers with a user-friendly interface for browsing, selecting, and purchasing products. It also enables businesses to manage products, orders, and customer interactions efficiently.</p>
              </div>

              {/* display related products */}
              <div className='mt-10 text-center py-8 text-3xl'>
                  <Title text1={"RELATED"} text2={"PRODUCTS"} />
                  <RelatedProducts category={productData.category} subCategory={productData.subCategory} />
              </div>
              
            </div>
          </>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    );
  };

  export default Product;
