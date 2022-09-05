import '../../styles/components/layout/Header.css';

const Header = (props) => {
    return (
        <header>
            <div className='holder'>
                <img src="Images/logo.png" width={100} alt='logo'/>
                <h1>Transportes X</h1>
            </div>
        </header>    
    );
}

export default Header;