import reactLogo from "./assets/react.svg"

export default function Header(){
    return(
        <header className="header">
            <img src={reactLogo} alt="React Logo" />
            <h2>ReactFacts</h2>
            <h4>React Course - Project 1</h4>
        </header>
    )
}