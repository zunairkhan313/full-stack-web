import Image from 'next/image'
import boy1 from "../public/boy1.jpg"
import boy2 from "../public/boy2.jpg"
import boy3 from "../public/boy3.jpg"
import boy4 from "../public/boy4.jpg"
import boy5 from "../public/boy5.jpg"
import boy6 from "../public/boy6.jpg"
import boy7 from "../public/boy7.jpg"
import boy8 from "../public/boy8.webp"
import boy9 from "../public/boy9.webp"
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Mens() {
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
                src={boy1}
                alt={"t shirts"}
              />
            </div>

            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Gray t-shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful gray t-shirt</p>
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
                src={boy2}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Black & White</h4>
              <p className='text-sm font-sans'>This is a beautiful black & white t-shirt</p>
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
                src={boy3}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Black Hoodie</h4>
              <p className='text-sm font-sans'>This is a beautiful black hoodie</p>
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
                src={boy4}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Purple Coat</h4>
              <p className='text-sm font-sans'>This is a beautiful dark purple coat</p>
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
                src={boy5}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Brown & White</h4>
              <p className='text-sm font-sans'>This is a beautiful brown and white t-shirt</p>
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
                src={boy6}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Blue Shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful blue shirt</p>
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
                src={boy7}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Maroon t-shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful maroon t-shirt</p>
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
                src={boy8}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Gray Kameez & Shalwar</h4>
              <p className='text-sm font-sans'>This is a beautiful Gray Kameez & Shalwar</p>
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
                src={boy9}
                alt={"t shirts"}
              />
            </div>
            <div className='mt-2'>
              <h4 className='font-sans font-bold'>Black & White Shirt</h4>
              <p className='text-sm font-sans'>This is a beautiful Boy and Shirt Haseeen</p>
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