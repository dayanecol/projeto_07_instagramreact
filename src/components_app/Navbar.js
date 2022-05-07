export default function Navbar(){
    return (
    <div class="navbar">
        <div class="container">
          <div class="logo">
            <Icon name="logo-instagram" />
            <div class="separador"></div>
            <img src="assets/img/logo.png" />
          </div>

          <div class="logo-mobile">
            <Icon name="logo-instagram" />
          </div>

          <div class="instagram-mobile">
            <img src="assets/img/logo.png" />
          </div>
  
          <div class="pesquisa">
            <input type="text" placeholder="Pesquisar" />
          </div>
  
          <div class="icones">
            <Icon name="paper-plane-outline"/>
            <Icon name="compass-outline"/>
            <Icon name="heart-outline"/>
            <Icon name="person-outline"/>
          </div>

          <div class="icones-mobile">
            <Icon name="paper-plane-outline" />
          </div>
        </div>
    </div>
    );
}

function Icon(props){
    return(
        <ion-icon name={props.name}></ion-icon>
    );
}