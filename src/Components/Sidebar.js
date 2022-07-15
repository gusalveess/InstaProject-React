function User(props) {
  return (
    <div class="usuario">
    <img src={props.imgUser} />
    <div class="texto">
      <strong>{props.nicknameUser}</strong>
      {props.nameUser}
    </div>
  </div>
  )
}

function MenuSugg(props) {
  return (
    <div class="sugestao">
              <div class="usuario">
                <img src={props.img} />
                <div class="texto">
                  <div class="nome">{props.nome}</div>
                  <div class="razao">{props.stats}</div>
                </div>
              </div>

              <div class="seguir">Seguir</div>
            </div>

  )
}

export default function Sidebar() {
    return(
        <div class="sidebar">
          <User imgUser="assets/img/catanacomics.svg" nicknameUser="catanacomics" nameUser="Catana"/>

          <div class="sugestoes">
            <div class="titulo">
              Sugestões para você
              <div>Ver tudo</div>
            </div>

           <MenuSugg img="assets/img/bad.vibes.memes.svg" nome="bad.vibes.memes" stats="Segue você"/>
           <MenuSugg img="assets/img/chibirdart.svg" nome="chibirdart" stats="Segue você"/>
           <MenuSugg img="assets/img/razoesparaacreditar.svg" nome="razoesparaacreditar" stats="Novo no Instagram"/>
           <MenuSugg img="assets/img/adorable_animals.svg" nome="adorable_animals" stats="Segue você"/>
           <MenuSugg img="assets/img/smallcutecats.svg" nome="smallcutecats" stats="Segue você"/>
           </div>

          <div class="links">
            Sobre • Ajuda • Imprensa • API • Carreiras • Privacidade • Termos • Localizações • Contas mais relevantes • Hashtags • Idioma
          </div>

          <div class="copyright">
            © 2021 INSTAGRAM DO FACEBOOK
          </div>
        </div>
      
    )
}