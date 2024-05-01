import 'bootstrap/dist/css/bootstrap.min.css';
import Image from 'next/image'
import front from '../../public/tshirt.jpg'
import DeleteForeverSharpIcon from '@mui/icons-material/DeleteForeverSharp';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import card1 from '../../public/card1.png';
import card2 from '../../public/card2.png';
import card3 from '../../public/card3.png';
import Link from 'next/link';
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { authOptions } from "../api/auth/[...nextauth]/route";




export default async function Cart() {
    const session = await getServerSession(authOptions);

    if (!session) redirect("/login");
    return (
        <>
            <h1 className="text-4xl mt-5 text-center font-sans font-bold">Shopping Cart</h1>

            <Row>
                <Col sm={12} md={7}>

                    <div className="container mt-5">
                        <div className='flex flex-wrap'>
                            {/* toodo list */}
                            <div style={{ "height": "100%", "width": 500 }} className='mt-2 shadow p-3 bg-body-tertiary rounded'>
                                <div className='flex flex-wrap gap-3 justify-around'>


                                    <Image
                                        className='img-fluid rounded'
                                        width={100}
                                        height={100}
                                        src={front}
                                        alt={"t shirts"}
                                    />

                                    <div className='mt-2'>
                                        <h4 className='font-sans font-bold'>Boys</h4>
                                        <p>This is a beautiful tshirt i want</p>
                                    </div>

                                    <div className='flex gap-2'>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className='flex gap-2 '>
                                        <div className='price mt-4'>
                                            <h5 className='font-sans font-bold'>$500</h5>
                                        </div>
                                        <div className='deleteicon mt-3'>
                                            <h3 style={{ "marginTop": "3px" }}>
                                                <DeleteForeverSharpIcon />
                                            </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>


                            <div style={{ "height": "100%", "width": 500 }} className='mt-2 shadow p-3 bg-body-tertiary rounded'>
                                <div className='flex flex-wrap gap-3 justify-around'>


                                    <Image
                                        className='img-fluid rounded'
                                        width={100}
                                        height={100}
                                        src={front}
                                        alt={"t shirts"}
                                    />

                                    <div className='mt-2'>
                                        <h4 className='font-sans font-bold'>Boys</h4>
                                        <p>This is a beautiful tshirt i want</p>
                                    </div>

                                    <div className='flex gap-2'>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <div className='flex gap-2 '>
                                        <div className='price mt-4'>
                                            <h5 className='font-sans font-bold'>$500</h5>
                                        </div>
                                        <div className='deleteicon mt-3'>
                                            <h3 style={{ "marginTop": "3px" }}>
                                                <DeleteForeverSharpIcon />
                                            </h3>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </Col>

                {/* price side */}

                <Col md={5}>

                    <div className="container mt-5">
                        <div className='flex flex-wrap'>
                            {/* toodo list */}
                            <div style={{ "height": "100%", "width": 600 }} className='mt-2 shadow p-3 bg-body-tertiary rounded'>
                                <div>

                                    <h3 className='text-2xl text-center font-sans font-bold'>Card Details</h3>
                                    <hr />
                                    <div className='flex flex-wrap justify-around gap-2'>
                                        <div>
                                            <Image
                                                className='img-fluid mt-3'
                                                width={80}

                                                src={card1}
                                                alt={"card"}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                className='img-fluid'
                                                width={80}

                                                src={card2}
                                                alt={"card"}
                                            />
                                        </div>
                                        <div>
                                            <Image
                                                className='img-fluid mt-2'
                                                width={100}

                                                src={card3}
                                                alt={"card"}
                                            />
                                        </div>
                                    </div>
                                    <hr />
                                    <br />
                                    <h6 className='font-sans font-bold'>Shipping information</h6>
                                    <br />
                                    <p>Email</p>
                                    <input type="text" placeholder='Email' />
                                    <br />
                                    <br />
                                    <p>Shipping Address</p>
                                    <input className='mt-1' type="text" placeholder='Name' />
                                    <input className='mt-1' type="text" placeholder='Country' />
                                    <input className='mt-1' type="text" placeholder='Address' />
                                    <br /><br />
                                    <div className='flex flex-wrap justify-between'>
                                        <div>

                                            <h5 className='font-sans font-bold'>Subtotal</h5>
                                        </div>
                                        <div >
                                            <h6 className='font-sans font-bold'>$4589</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex flex-wrap justify-between'>
                                        <div>

                                            <h5 className='font-sans font-bold'>Delivery Charges</h5>
                                        </div>
                                        <div >
                                            <h6 className='font-sans font-bold'>$4589</h6>
                                        </div>
                                    </div>
                                    <hr />
                                    <div className='flex flex-wrap justify-between'>
                                        <div>

                                            <h5 className='font-sans font-bold'>Total</h5>
                                        </div>
                                        <div >
                                            <h6 className='font-sans font-bold'>$4589</h6>
                                        </div>
                                    </div>
                                    <hr />


                                    <div class="container px-10 mx-0 min-w-full flex flex-col items-center">
                                        <Link href={"./checkout"}>
                                            <button class="mt-2 bg-blue-700 text-white hover:bg-blue-400 font-bold py-2 px-4 rounded">Checkout</button>
                                        </Link>
                                    </div>
                                </div>
                            </div>

                            {/* end */}

                        </div>
                    </div>
                </Col>
            </Row>
        </>

    )
}