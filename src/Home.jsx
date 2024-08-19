import StarIcon from '@mui/icons-material/Star';
import StarHalfIcon from '@mui/icons-material/StarHalf';
import { useState } from 'react';
import { products } from './assets/products';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from './store/cart';


export default function Home() {
  const carts = useSelector(store => store.cart.items);
  const [isShown, setIsShown] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const dispatch = useDispatch();
  

  function handleClick(product) {
    setIsShown(true);
    setSelectedProduct(product);
  }

  function handleClose() {
    setIsShown(false);
    setSelectedProduct(null);
  }

  function handleAddToCart(id){
    dispatch(addToCart({
      productId: id,
      quantity: 1
    }));
  };

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>

        <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
            <div key={product.id}>
              <a onClick={() => handleClick(product)} className="group cursor-pointer">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    alt={product.imageAlt}
                    src={product.imageSrc}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">${product.price}</p>
              </a>

              {/* Modal for displaying product details */}
              {isShown && selectedProduct?.id === product.id && (
                <div className="fixed inset-0 z-50 flex items-center justify-center">
                  <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
                  <div className="relative w-2/3 bg-indigo-700 min-h-96 m-auto flex flex-col sm:flex-row justify-around items-center z-50">
                    <button className="absolute top-2 right-2 text-white" onClick={handleClose}>X</button>
                    <img className="w-1/2 h-3/4 my-5" src={product.imageSrc} alt="" />
                    <div className="h-3/4 text-white">
                    <p className="text-3xl mb-10">{product.name}</p>
                    <p className="text-2xl">${product.price}</p>
                    <p className='my-10 text-lg'>Rating: <br />
                    <StarIcon className='text-orange-300'/>
                    <StarIcon className='text-orange-300'/>
                    <StarIcon className='text-orange-300'/>
                    <StarIcon className='text-orange-300'/>
                    <StarHalfIcon className='text-orange-300'/>
                    </p>
                    <button
                      type="button"
                      className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-slate-100 px-8 py-3 text-base font-medium text-indigo-600 hover:bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                      onClick={() => {
                        handleAddToCart(product.id);
                        handleClose();
                      }}
                    >
                      Add to bag
                    </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}