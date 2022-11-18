import Image from 'next/image';
import Footer from '../components/footer';
import Navbar from '../components/navbar';

import mypic from '../assets/my-pic.jpeg';

export default function Home() {
	return (
		<div>
			<Navbar />

			<div className='hero min-h-screen bg-base-200'>
				<div className='hero-content flex-col lg:flex-row'>
					<Image
						className='max-w-sm rounded-lg shadow-2xl'
						alt=''
						src={mypic}
					/>
					<div>
						<h1 className='text-3xl font-bold'>
							Hello, it&apos;s me
						</h1>
						<h1 className='text-5xl font-bold'>Suleman</h1>
						<p className='py-6'>
							A passionate smart contract developer who absolutely
							loves the concept of Web3 and decentralization. I am
							very ambitious about how various companies and
							Blockchains are achieving the goal of transition to
							Web3 by using Blockchain technology. I have worked
							as a smart contract developer in various blockchain
							technologies like Stacks and Solana. Made a
							full-stack DAPP (decentralized application) on the
							NFT minting candy machine. Contributed to an
							open-source DAO (decentralized autonomous
							organization) project to help DAOs create and manage
							proposals on this platform.
						</p>
						<button className='btn btn-primary'>Cool!</button>
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
