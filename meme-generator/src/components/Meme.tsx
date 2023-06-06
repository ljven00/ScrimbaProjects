import reactLogo from "../assets/react.svg";

export default function Meme(){
    return(
        <main>
            <form action="" className="form">
                <input type="text" name="" id="" 
                    placeholder="Top Text"
                />
                <input type="text" name="" id="" 
                    placeholder="Bottom Text"
                />
                <button type="button" className="btn">
                    Get a new meme image 🥳
                </button>
            </form>
            <div>
                <img src={reactLogo} alt="" />
            </div>
        </main>
    )
}