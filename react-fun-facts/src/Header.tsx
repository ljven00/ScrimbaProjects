import reactLogo from "./assets/react.svg"

export default function Header(){
    return(
        <header>
            <img src={reactLogo} alt="React Logo" />
            <h3>ReactFacts</h3>
            <p>React Course - Project 1</p>
        </header>
    )
}