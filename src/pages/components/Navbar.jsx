import './navbar.css'

function Navbar() {
    return (
        <>
            <div className="navbar">
                <div className='banner-title'>
                    Avahan
                </div>
                <ol className='navigation'>
                    <li>Home</li>
                    <li>Events</li>
                    <li>Team</li>
                </ol>
            </div>
        </>
    );
}

export default Navbar;