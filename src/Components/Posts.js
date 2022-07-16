import React, { useState } from "react";

function MenuPosts(props) {
  const state = { curtidos: false }

  const [liked, setLiked] = useState(false);
  const [icon, setIcon] = useState(<ion-icon name="heart-outline"></ion-icon>);

  function like() {
      liked == true
        ? setIcon(<ion-icon name="heart-outline"></ion-icon>)
        : setIcon(<ion-icon color="danger" name="heart"></ion-icon>);
      liked == true ? setLiked(false) : setLiked(true);
  }

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
        <img onClick={() => like()} src={props.img2} />
      </div>

      <div class="fundo">
        <div class="acoes">
          <div>
            <span onClick={() => like()}>
              {icon}
            </span>
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
  const Itens = [
    { img1: "assets/img/meowed.svg", user1: "meowed", img2: "assets/img/gato-telefone.svg", img3: "assets/img/respondeai.svg", user2: "respondeaí" },
    { img1: "assets/img/barked.svg", user1: "barked", img2: "assets/img/dog.svg", img3: "assets/img/adorable_animals.svg", user2: "adorable_animals" },
  ]

  return (
    <div class="posts">
      {Itens.map((item) => <MenuPosts img1={item.img1} user1={item.user1} img2={item.img2} img3={item.img3} user2={item.user2} />)
      }
    </div>
  )
}