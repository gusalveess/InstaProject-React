function Menustories(props) {
  return (
    <div class="story">
      <div class="imagem">
        <img src={props.img} />
      </div>
      <div class="usuario">
        {props.nick}
      </div>
    </div>
  );
}

export default function Stories() {
  const Itens = [
    { img: "assets/img/9gag.svg", nick: "9gag" },
    { img: "assets/img/meowed.svg", nick: "meowed" },
    { img: "assets/img/barked.svg", nick: "barked" },
    { img: "assets/img/nathanwpylestrangeplanet.svg", nick:"nathanwpylestrangeplanet"  },
    { img: "assets/img/wawawicomics.svg", nick: "wawawicomics" },
    { img: "assets/img/respondeai.svg", nick: "respondeai" },
    { img: "assets/img/filomoderna.svg", nick: "filomoderna" },
    { img: "assets/img/memeriagourmet.svg", nick: "memeriagourmet" },
  ];

  return (
    <div class="stories">
      {Itens.map((item) => <Menustories img={item.img} nick={item.nick} />)}

      <div class="setinha">
        <ion-icon name="chevron-forward-circle"></ion-icon>
      </div>
    </div>
  )
}