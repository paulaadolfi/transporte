import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src="Images/logo.png" width={100} alt='logo'/>
                <h1>Transportes X</h1>
            </div>
            <a href="http://localhost:3000" target="_blank">Login</a>
        </header>    
    );
}

export default Header;