import Image from 'next/image'
import front from "../public/tshirt.jpg"
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import 'bootstrap/dist/css/bootstrap.min.css';
import Mens from '@/components/Mens';
import Womens from '@/components/Womens';
import Kids from '@/components/Kids';
import Watch from '@/components/Watches';

export default function Home() {
  return (

    <main>

      <div>
        <Image
          className='h-auto max-w-full'
          src={front}
          alt={"t shirts"}
        />
      </div>
      <h1 id='Mens' className="text-4xl mt-5 text-center font-sans font-bold">Mens</h1>
    <Mens/>
      <h1 id='Womens' className="text-4xl mt-5 text-center font-sans font-bold">Womens</h1>
      <Womens/>
      <h1 id='kids' className="text-4xl mt-5 text-center font-sans font-bold">Kids</h1>
      <Kids/>
      <h1 id='Watches' className="text-4xl mt-5 text-center font-sans font-bold">Watches</h1>
      <Watch/>
      
    </main>
  );
}
