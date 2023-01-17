import ReactDOM from "react-dom/client";

export default function RecipeFilter() {

        function working() {
            console.log('on Click for button is working')
        }


    return (
        <main>
            <div>
                <input className="form--input" type="text" 
                    placeholder="Enter Recipe name"
                    />
                
                <button onClick={working} className="form--button">Get Recipe</button>
            </div>
        </main>
    )


} 