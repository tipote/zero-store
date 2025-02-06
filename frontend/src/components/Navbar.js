import Link from 'next/link';
import { FaShoppingCart, FaUser} from 'react-icons/fa';

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center p-4 bg-blue-600 text-white'>
            <Link href="/">
                <h1 className='text-2xl font-bold'>Zero Store</h1>
            </Link>
            <div className='flex gap-4'>
            <Link href="/cart">
                <FaShoppingCart className='text-xl cursor-pointer'/>
            </Link>
            <Link href="/cart">
                <FaUser className='text-xl cursor-pointer'/>
            </Link>
            </div>
        </nav>
    );
};

export default Navbar;