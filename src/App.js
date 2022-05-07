import Navbar from "./components_app/Navbar";
import Corpo from "./components_app/Corpo";
import FundoMobile from "./components_app/FundoMobile";

export default function App(){
    return(
        <div class="root">
            <Navbar />
            <Corpo />
            <FundoMobile />
        </div>
    );
}