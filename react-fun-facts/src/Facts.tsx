interface Props{
    title: string,
    items: string[]
}

export function Facts({title, items}: Props){
    
    return(
        <main className="main">
            <h1>{title}</h1>
            <ul>
                {items.map((item, index) => <li key={index}>{item}</li>)}
            </ul>
        </main>
    )
}