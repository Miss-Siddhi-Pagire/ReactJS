import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
function Greeting(){
    return (
        <div>
            <h1>hello sakshi {Math.random()}</h1>
        </div>

    );   
}
root.render
(   <>
        <h1>Hello</h1>
        <h2>hello wordld {Math.random()}</h2>
        <Greeting/>
    </>
)