import Image from 'next/image'
import kid1 from "../public/kid1.jpg"
import kid2 from "../public/kid2.jpg"
import kid3 from "../public/kid3.jpg"
import kid4 from "../public/kid4.jpg"
import kid5 from "../public/kid5.jpg"
import kid6 from "../public/kid6.jpg"
import kid7 from "../public/kid7.jpg"
import kid8 from "../public/kid8.jpg"
import kid9 from "../public/kid9.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Kids() {
  return (
    <>
      <div className='container-fluid'>
        <div className='flex flex-wrap justify-around'>
          <div style={{ "height": "100%", "width": 300 }} className='mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover'
                width={300}
                src={kid1}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Fruity t-shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful Fruity t-shirts</p>
              <h5 className='blue-400'>$500</h5>
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-wrap justify-around'>
              <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
              </div>
              <div>
                <button type="button" class="text-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
              </div>
            </div>
          </div>
          <div style={{ "height": "100%", "width": 300 }} className='mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover'
                width={300}
                src={kid2}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Brown t-shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful brown t-shirts</p>
              <h5 className='blue-400'>$500</h5>
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-wrap justify-around'>
              <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
              </div>
              <div>
                <button type="button" class="text-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
              </div>
            </div>
          </div>
          <div style={{ "height": "100%", "width": 300 }} className='mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover'
                width={300}
                src={kid3}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Orange t-shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful orange t-shirts</p>
              <h5 className='blue-400'>$500</h5>
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-wrap justify-around'>
              <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
              </div>
              <div>
                <button type="button" class="text-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
              </div>
            </div>
          </div>
          <div style={{ "height": "100%", "width": 300 }} className='mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover'
                width={300}
                src={kid4}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Black kameez</h4>
              <p className='text-sm font-sans'>This is a beautiful black kameez</p>
              <h5 className='blue-400'>$500</h5>
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-wrap justify-around'>
              <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
              </div>
              <div>
                <button type="button" class="text-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
              </div>
            </div>
          </div>
          <div style={{ "height": "100%", "width": 300 }} className='mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover'
                width={300}
                src={kid5}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Gray t-shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful gray t-shirts</p>
              <h5 className='blue-400'>$500</h5>
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-wrap justify-around'>
              <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
              </div>
              <div>
                <button type="button" class="text-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
              </div>
            </div>
          </div>
          <div style={{ "height": "100%", "width": 300 }} className='mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover'
                width={300}
                src={kid6}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>White t-shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful white t-shirts</p>
              <h5 className='blue-400'>$500</h5>
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-wrap justify-around'>
              <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
              </div>
              <div>
                <button type="button" class="text-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
              </div>
            </div>
          </div>
          <div style={{ "height": "100%", "width": 300 }} className='mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover'
                width={300}
                src={kid7}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Black & Blue</h4>
              <p className='text-sm font-sans'>This is a beautiful black & blue t-shirts</p>
              <h5 className='blue-400'>$500</h5>
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-wrap justify-around'>
              <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
              </div>
              <div>
                <button type="button" class="text-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
              </div>
            </div>
          </div>
          <div style={{ "height": "100%", "width": 300 }} className='mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover'
                width={300}
                src={kid8}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>White t-shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful white t-shirts</p>
              <h5 className='blue-400'>$500</h5>
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-wrap justify-around'>
              <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
              </div>
              <div>
                <button type="button" class="text-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
              </div>
            </div>
          </div>
          <div style={{ "height": "100%", "width": 300 }} className='mt-2 shadow p-3 mb-5 bg-body-tertiary rounded'>
            <div className='flex flex-wrap justify-around'>

              <Image
                style={{ "height": "250px" }}
                className='rounded object-cover'
                width={300}
                src={kid9}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Blue t-shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful blue t-shirts</p>
              <h5 className='blue-400'>$500</h5>
            </div>
            <div>
              <hr />
            </div>
            <div className='flex flex-wrap justify-around'>
              <div>
                <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Buy now</button>
              </div>
              <div>
                <button type="button" class="text-blue-800 hover:bg-blue-700 focus:ring-4 focus:ring-white-300 font-medium rounded-lg text-sm px-3 py-2.5 me-2 mb-2 dark:bg-white-600 dark:hover:bg-white-700 focus:outline-none dark:focus:ring-white-800 hover:text-white font-bold">Add to cart</button>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </>
  )
}