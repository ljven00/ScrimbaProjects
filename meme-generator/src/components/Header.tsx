import reactLogo from '../assets/react.svg'

export default function Header(){
    return(
        <header className='header'>
            <img src={reactLogo} alt="nene generator logo" />
            <h1>Meme Generator</h1>
        </header>
    )
}