import styled from "styled-components"
import Titulo from "../Titulo"
import Tags from "./Tags"
import Populares from "./Populares"
import Imagem from "./Imagem"

const GaleriaContainer = styled.div`
  display: flex;
`

const ImagemContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 24px;
`

const SecaoFluida = styled.section`
  flex-grow: 1;
`

const Galeria = ({ fotos = [], setTag, aoFotoSelecionada, aoAlternarFavorito }) => {
  return (
    <>
      <Tags setTag={setTag} />
      <GaleriaContainer>
        <SecaoFluida>
          <Titulo>Navegue pela galeria</Titulo>
            <ImagemContainer>
              {fotos.map(foto => <Imagem 
                aoZoomSolicitado={aoFotoSelecionada}
                aoAlternarFavorito = {aoAlternarFavorito}
                key={foto.id} 
                foto={foto} 
              />)}
            </ImagemContainer>
        </SecaoFluida>
        <Populares />
      </GaleriaContainer>
    </> 
  )
}

export default Galeria