export default function Esquerda() {
    return (
        <div class="esquerda">
            <div class="stories">
                {stories}
                <div class="setinha">
                    <ion-icon name="chevron-forward-circle"></ion-icon>
                </div>
            </div>

            <div class="posts">
                {posts}
            </div>
        </div>
    );
}

const obj_posts = [
    {
        user_img: "assets/img/meowed.svg",
        user_name: "meowed",
        content: "assets/img/gato-telefone.svg",
        follower: "respondeai",
        likes: "101.523"
    },
    {
        user_img: "assets/img/barked.svg",
        uder_name: "barked",
        content: "assets/img/dog.svg",
        follower: "adorable_animals",
        likes: "99.159"
    }

];

const posts = obj_posts.map(post => {
    return (
        <div class="post">
            <div class="topo">
                <div class="usuario">
                    <img src={post.user_img} />
                    {post.user_name}
                </div>
                <div class="acoes">
                    <ion-icon name="ellipsis-horizontal"></ion-icon>
                </div>
            </div>

            <div class="conteudo">
                <img src={post.content} />
            </div>

            <div class="fundo">
                <div class="acoes">
                    <div>
                        <ion-icon name="heart-outline"></ion-icon>
                        <ion-icon name="chatbubble-outline"></ion-icon>
                        <ion-icon name="paper-plane-outline"></ion-icon>
                    </div>
                    <div>
                        <ion-icon name="bookmark-outline"></ion-icon>
                    </div>
                </div>

                <div class="curtidas">
                    <img src="assets/img/respondeai.svg" />
                    <div class="texto">
                        Curtido por <strong>{post.follower}</strong> e <strong>outras {post.likes} pessoas</strong>
                    </div>
                </div>
            </div>
        </div>
    );
});

const obj_stories = [
    {
        image: "assets/img/9gag.svg",
        user: "9gag"
    },
    {
        image: "assets/img/meowed.svg",
        user: "meowed"
    },
    {
        image: "assets/img/barked.svg",
        user: "barked"
    },
    {
        image: "assets/img/nathanwpylestrangeplanet.svg",
        user: "nathanwpylestrangeplanet"
    },
    {
        image: "assets/img/wawawicomics.svg",
        user: "wawawicomics"
    },
    {
        image: "assets/img/respondeai.svg",
        user: "respondeai"
    },
    {
        image: "assets/img/filomoderna.svg",
        user: "filomoderna"
    },
    {
        image: "assets/img/memeriagourmet.svg",
        user: "memeriagourmet"
    }
];

const stories = obj_stories.map(story => {
    return (
        <div class="story">
            <div class="imagem">
                <img src={story.image} />
            </div>
            <div class="usuario">
                {story.user}
            </div>
        </div>
    );
});
