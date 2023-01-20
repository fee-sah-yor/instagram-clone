import InstagramLogo from '../assets/Instagram Logo.png';

const Nav = () => {
    return (
        <nav>
            <button>
                <img src={InstagramLogo} alt='instagram logo' />
            </button>
            <input className='search' type='text' placeholder='search' />
            <span className='nav-links'>
                <button>
                   <i className=' fas fa-home' />
                </button>
                <button>
                   <i className='fas fa-comment' />
                </button>
                <button>
                   <i className='fas fa-compass '/>
                </button>
                <button>
                   <i className=' fas fa-heart' />
                </button>
            </span>
        </nav>
    )
}

export default Nav;