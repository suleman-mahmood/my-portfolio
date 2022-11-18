export default function Navbar() {
	return (
		<div className='navbar bg-base-100'>
			<div className='flex-1'>
				<a className='btn btn-ghost normal-case text-xl'>
					Suleman Mahmood
				</a>
			</div>
			<div className='flex-none'>
				<ul className='menu menu-horizontal p-0'>
					<li>
						<a>Work</a>
					</li>
					<li>
						<a>About</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
