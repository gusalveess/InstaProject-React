function Menustories(props) {
 return (
    <div class="story">
   <div class="imagem">
      <img src={props.img}/>
    </div>
    <div class="usuario">
     {props.nick}
    </div>
  </div>
  );
}

export default function Stories() {
    return (
          <div class="stories">
            <Menustories img="assets/img/9gag.svg" nick= "9gag"/>
            <Menustories img="assets/img/meowed.svg" nick= "meowed"/>
            <Menustories img="assets/img/barked.svg" nick= "barked"/>
            <Menustories img="assets/img/nathanwpylestrangeplanet.svg" nick= "nathanwpylestrangeplanet"/>
            <Menustories img="assets/img/wawawicomics.svg" nick= "wawawicomics"/>
            <Menustories img="assets/img/respondeai.svg" nick= "respondeai"/>
            <Menustories img="assets/img/filomoderna.svg" nick= "filomoderna"/>
            <Menustories img="assets/img/memeriagourmet.svg" nick= "memeriagourmet"/>
          
            <div class="setinha">
              <ion-icon name="chevron-forward-circle"></ion-icon>
            </div>
          </div>
    )
}