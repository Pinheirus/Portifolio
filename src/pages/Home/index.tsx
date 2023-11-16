import Spline from "@splinetool/react-spline";
import { CanvasContainer, GridContent } from "./styles";
import { AnimeTextContainer } from "./anime-text/anime-text-container";

export function Home() {
  return (
    <GridContent>
      <div>
        <h1 className="hero">
          Ola! <br /> Sou Lucas Pinheiro
        </h1>
        <AnimeTextContainer />
        <h3 className="hero-text">
          Desenvolvedor Front-end e Designer UX/UI apaixonado por unir código e
          estética. Transformo conceitos em experiências digitais envolventes,
          combinando funcionalidade e design inovador para criar interfaces
          memoráveis e impactantes.
        </h3>
        <div className="hero-work">
         <h4>Open to Work 🐲</h4>
        </div>
      </div>
      <CanvasContainer>
        <Spline
          className="cubo"
          scene="https://prod.spline.design/mLaTrswnFRRh2rwq/scene.splinecode"
        />
      </CanvasContainer>
    </GridContent>
  );
}
