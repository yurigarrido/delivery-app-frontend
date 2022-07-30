import React, { useContext} from 'react'
import { useEffect } from 'react';
import Header from '../../components/header/header'
import { useLocalStorage } from '../../hooks/useLocalStorage';
import './home.css';
import { useSelector } from 'react-redux';
import { AuthContext } from '../../context/AuthContext';

const products =  [
  {
    id: 1,
    name: 'Skol Lata 250ml',
    price: 2.20,
    url_image: 'http://localhost:3001/images/skol_lata_350ml.jpg',
  },
  {
    id: 2,
    name: 'Heineken 600ml',
    price: 7.50,
    url_image: 'http://localhost:3001/images/heineken_600ml.jpg',
  },
  {
    id: 3,
    name: 'Antarctica Pilsen 300ml',
    price: 2.49,
    url_image: 'http://localhost:3001/images/antarctica_pilsen_300ml.jpg',
  },
  {
    id: 4,
    name: 'Brahma 600ml',
    price: 7.50,
    url_image: 'http://localhost:3001/images/brahma_600ml.jpg',
  },
  {
    id: 5,
    name: 'Skol 269ml',
    price: 2.19,
    url_image: 'http://localhost:3001/images/skol_269ml.jpg',
  },
  {
    id: 6,
    name: 'Skol Beats Senses 313ml',
    price: 4.49,
    url_image: 'http://localhost:3001/images/skol_beats_senses_313ml.jpg',
  },
  {
    id: 7,
    name: 'Becks 330ml',
    price: 4.99,
    url_image: 'http://localhost:3001/images/becks_330ml.jpg',
  },
  {
    id: 8,
    name: 'Brahma Duplo Malte 350ml',
    price: 2.79,
    url_image: 'http://localhost:3001/images/brahma_duplo_malte_350ml.jpg',
  },
  {
    id: 9,
    name: 'Becks 600ml',
    price: 8.89,
    url_image: 'http://localhost:3001/images/becks_600ml.jpg',
  },
  {
    id: 10,
    name: 'Skol Beats Senses 269ml',
    price: 3.57,
    url_image: 'http://localhost:3001/images/skol_beats_senses_269ml.jpg',
  },
  {
    id: 11,
    name: 'Stella Artois 275ml',
    price: 3.49,
    url_image: 'http://localhost:3001/images/stella_artois_275ml.jpg',
  },
]

const Home = () => {
  const { user } = useContext(AuthContext)
  const [userLocalStorage, setUserLocalStorage] = useLocalStorage("userData", '');
  
  useEffect(() => {
    if(user) {
      console.log(user)
      setUserLocalStorage(user)
    }
  }, [user])

  return (
    <>
      <Header />
      <div className="container-products">
        {products.map((product) => {
          return (
              <section key={product.id} className='card-product'> 
              <img className='product-image' src='https://courier-images-prod.imgix.net/produc_variant/00010266_a34c108d-a237-4098-9c47-287127f376af.jpg?auto=compress,format&fit=max&w=undefined&h=undefined&dpr=2' alt={product.name} />
              <hr />
              <div className='product-title'>{product.name}</div>

              <div className='product-promo'>R${(product
                .price * 0.9)
                .toLocaleString('pt-BR',
                    { 
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
              </div>
              <div className='product-price'>R${product
                .price
                .toLocaleString('pt-BR',
                    { 
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2
                    })}
              </div>
              <button>+</button>
            </section>
          )
        })
      }
      </div>
    </>
  )
}

export default Home