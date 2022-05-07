import User from "./User";

export default function Sidebar() {
    return (
        <div class="sidebar">
            <User image="assets/img/catanacomics.svg" user="catanacomics" name="Catana"/>
            <div class="sugestoes">
                <div class="titulo">
                    Sugestões para você
                    <div>Ver tudo</div>
                </div>
                {sugestoes}
            </div>

            <div class="links">
                Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
            </div>

            <div class="copyright">
                © 2021 INSTAGRAM DO FACEBOOK
            </div>
        </div>
    );
}

const obj_sugestoes = [
    {
        image: "assets/img/bad.vibes.memes.svg",
        user: "bad.vibes.memes",
        reason: "Segue você"
    },
    {
        image: "assets/img/chibirdart.svg",
        user: "chibirdart",
        reason: "Segue você"
    },
    {
        image: "assets/img/razoesparaacreditar.svg",
        user: "razoesparaacreditar",
        reason: "Novo no Instagram"
    },
    {
        image: "assets/img/adorable_animals.svg",
        user: "adorable_animals",
        reason: "Segue você"
    },
    {
        image: "assets/img/smallcutecats.svg",
        user: "smallcutecats",
        reason: "Segue você"
    }
];

const sugestoes = obj_sugestoes.map(sugestao => {
    return (
        <div class="sugestao">
            <div class="usuario">
                <img src={sugestao.image} />
                <div class="texto">
                    <div class="nome">{sugestao.user}</div>
                    <div class="razao">{sugestao.reason}</div>
                </div>
            </div>

            <div class="seguir">Seguir</div>
        </div>
    );
});