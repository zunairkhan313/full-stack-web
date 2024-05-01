import Image from 'next/image'
import watche1 from "../public/watche1.jpg"
import watche2 from "../public/watche2.jpg"
import watche3 from "../public/watche3.jpg"
import watche4 from "../public/watche4.jpg"
import watche5 from "../public/watche5.jpg"
import watche6 from "../public/watche6.jpg"
import watche7 from "../public/watche7.jpg"
import watche8 from "../public/watche8.jpg"
import watche9 from "../public/watche9.jpg"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Watch() {
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
                src={watche1}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Black Watch</h4>
              <p className='text-sm font-sans'>This is a beautiful black watch</p>
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
                src={watche2}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Orange Watch</h4>
              <p className='text-sm font-sans'>This is a beautiful orange watch</p>
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
                src={watche3}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Black & White Watch</h4>
              <p className='text-sm font-sans'>This is a beautiful black & white watch</p>
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
                src={watche4}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Blue Watch</h4>
              <p className='text-sm font-sans'>This is a beautiful blue watch</p>
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
                src={watche5}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Brown Watch</h4>
              <p className='text-sm font-sans'>This is a beautiful brown watch</p>
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
                src={watche6}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Brown Watch</h4>
              <p className='text-sm font-sans'>This is a beautiful brown watch</p>
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
                src={watche7}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Black Watch</h4>
              <p className='text-sm font-sans'>This is a beautiful black watch</p>
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
                src={watche8}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>White Watch</h4>
              <p className='text-sm font-sans'>This is a beautiful white watch</p>
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
                src={watche9}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Black Watch</h4>
              <p className='text-sm font-sans'>This is a beautiful black watch</p>
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