import Esquerda from "./components_corpo/Esquerda";
import Sidebar from "./components_corpo/Sidebar";

export default function Corpo(){
    return(
    <div class="corpo">
        <Esquerda />
        <Sidebar />        
    </div>
    );
}