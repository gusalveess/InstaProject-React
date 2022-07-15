function MenuPosts(props) {
  return (
    <div class="post">
    <div class="topo">
      <div class="usuario">
        <img src={props.img1} />
        {props.user1}
      </div>
      <div class="acoes">
        <ion-icon name="ellipsis-horizontal"></ion-icon>
      </div>
    </div>

    <div class="conteudo">
      <img src={props.img2}/>
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
        <img src={props.img3} />
        <div class="texto">
          Curtido por <strong>{props.user2}</strong> e <strong>outras 101.523 pessoas</strong>
        </div>
      </div>
    </div>
  </div>

  )
}

export default function Posts() {
    return (
        <div class="posts">
        <MenuPosts img1="assets/img/meowed.svg" user1="meowed" img2="assets/img/gato-telefone.svg" img3="assets/img/respondeai.svg" user2="respondeaí"/>
        <MenuPosts img1="assets/img/barked.svg" user1="barked" img2="assets/img/dog.svg" img3="assets/img/adorable_animals.svg" user2="adorable_animals"/>
      </div>
    )
}