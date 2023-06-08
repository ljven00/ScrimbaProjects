import memesArray from "../memes-data";
import { useState } from "react";

export default function Meme(){
    const memes = memesArray.data.memes;
    const [memeImage, setMemeImage] = useState("");
    const [topText, setTopText] = useState("");
    const [bottomText, setBottomText] = useState("");

    function generateMeme(){
        let randomIndex: number = Math.floor(Math.random() * memes.length);
        setMemeImage(memes[randomIndex].url);
    }

    return(
        <main>
            <form action="" className="form">
                <input type="text" name="topText" id="top-text" 
                    placeholder="Top Text" onInput={function(e) {setTopText("Top Text")}}
                />
                <input type="text" name="bottomText" id="bottom-text"
                    onInput={function(e) {setBottomText("Bottom Text")}} 
                    placeholder="Bottom Text"
                />
                <button type="button" className="btn"
                onClick={generateMeme}
                >
                    Get a new meme image 🥳
                </button>
            </form>
            <div className="img-container">
                {memeImage &&  
                <>
                    <img src={memeImage} alt="memes" className="meme"/>
                    <h2 className="meme-text top">{topText}</h2>
                    <h2 className="meme-text bottom">{bottomText}</h2>
                </>}
            </div>
        </main>
    )
}