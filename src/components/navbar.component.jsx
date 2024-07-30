import { Link } from 'react-router-dom';

const Navbar = () => {
    //Storing differnt nav links in an array for making it scalable for futute add-on's
    const links = [
        { id: 1, path: '/', name: 'All Events' },
        { id: 2, path: '/selected-events', name: 'Selected Events' },
    ];

    return (
        <nav className='max-w-7xl mx-auto border border-white flex my-4 py-2'>
            <div className='w-full flex items-center justify-start gap-6 text-lg font-semibold h-[20px] m-2 text-nowrap'>
                {links.map((link) => {
                    const { id, path, name } = link;

                    return (
                        <Link
                            key={id}
                            to={path}
                            className='hover:text-amber-500 w-20 px-2'
                        >
                            {name}
                        </Link>
                    );
                })}
            </div>
        </nav>
    );
};

export default Navbar;
