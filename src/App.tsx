import { Typography, Box, Tabs, Tab, Grid, styled, Paper } from "@mui/material";
import { HeaderStyled, ImgContainer, ImgEuStyled, SectionStyled } from "./components/Styled";
import { useState, useRef } from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import InstagramIcon from "@mui/icons-material/Instagram";
import eu from "../src/images/eu.png";
const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: "#161616",
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: "center",
  color: "white",
}));

function App() {
  const [value, setValue] = useState(0);
  const inicioRef = useRef<HTMLDivElement>(null);
  const quemSouRef = useRef<HTMLDivElement>(null);
  const experienciasRef = useRef<HTMLDivElement>(null);

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleChange = (_event: any, newValue: number) => {
    setValue(newValue);
    if (newValue === 0 && inicioRef.current) {
      inicioRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === 1 && quemSouRef.current) {
      quemSouRef.current.scrollIntoView({ behavior: "smooth" });
    } else if (newValue === 2 && experienciasRef.current) {
      experienciasRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div>
      <HeaderStyled ref={inicioRef}>
        <SectionStyled>
          <Typography variant="h2" component="h1">
            Misael Soares
          </Typography>

          <Box>
            <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" TabIndicatorProps={{ sx: { backgroundColor: "#549E71" } }}>
                <Tab label="Início" sx={{ fontSize: "2rem", color: "white", "&.Mui-selected": { color: "#549E71" } }} />
                <Tab label="Quem sou" sx={{ fontSize: "2rem", color: "white", "&.Mui-selected": { color: "#549E71" } }} />
                <Tab label="Projetos" sx={{ fontSize: "2rem", color: "white", "&.Mui-selected": { color: "#549E71" } }} />
              </Tabs>
            </Box>
          </Box>
        </SectionStyled>

        <div style={{ display: "flex", justifyContent: "space-around", alignItems: "center", marginTop: "10%" }}>
          <Typography
            sx={{ margin: "10% 0% 10% 0%", width: "50%", WebkitTextStroke: "2px #cae6d5", textShadow: "1px 1px 30px #549E71", animation: "textStrokeAnimation 3s infinite" }}
            variant="h1"
            component="h2"
          >
            Desenvolvedor Web Full Stack
          </Typography>
          <ImgContainer>
            <ImgEuStyled src={eu} alt="Foto de Misael Soares" />
          </ImgContainer>
        </div>
        <section style={{ display: "flex", justifyContent: "center" }}>
          <div>
            <a href="https://github.com/misasoares" target="_blank" rel="noopener noreferrer">
              <GitHubIcon sx={{ fontSize: "60px", marginRight: "10px" }} />
            </a>
          </div>
          <div>
            <a href="https://www.linkedin.com/in/misaelsoares/" target="_blank" rel="noopener noreferrer">
              <LinkedInIcon sx={{ fontSize: "60px", marginRight: "10px" }} />
            </a>
          </div>
          <div>
            <a href="https://w.app/uvLHQn" target="_blank" rel="noopener noreferrer">
              <WhatsAppIcon sx={{ fontSize: "60px", marginRight: "10px" }} />
            </a>
          </div>
          <div>
            <a href="https://www.instagram.com/misaeltsoares/?hl=pt" target="_blank" rel="noopener noreferrer">
              <InstagramIcon sx={{ fontSize: "60px", marginRight: "10px" }} />
            </a>
          </div>
        </section>
      </HeaderStyled>

      <section ref={quemSouRef}>
        <Box sx={{ flexGrow: 1, paddingLeft: 3, paddingRight: 3 }}>
          <Typography color="#549e71" padding={2} textAlign="center" variant="h4" component="h3">
            Quem sou
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <Item>
                <Typography textAlign="left">
                  Me chamo Misael Tainã Soares, tenho 22 anos e estou no caminho de me tornar um desenvolvedor web full stack proficiente. Estou fazendo um curso intensivo de desenvolvimento web full
                  stack, onde fui nomeado como aluno destaque no bloco intermediário. Este programa de 12 meses, com aulas assíncronas diárias à noite, me permitiu desenvolver habilidades essenciais e
                  uma profunda compreensão do desenvolvimento web. Minhas habilidades técnicas abrangem uma variedade de ferramentas e tecnologias modernas, incluindo{" "}
                  <strong>React, Node.js, Express, CSS e PostgreSQL</strong>. Essas habilidades me permitem criar aplicações web eficientes e responsivas, focando sempre em soluções práticas e
                  funcionais. Fora do mundo do desenvolvimento web, sou um apaixonado músico e guitarrista, um hobby que enriquece minha criatividade e me oferece um equilíbrio perfeito entre
                  tecnologia e arte. A música também me ensinou a importância da <strong>prática constante e da inovação</strong>, habilidades que aplico em minha jornada profissional. Sou uma pessoa
                  naturalmente curiosa, sempre em busca de novos conhecimentos e desafios. Minha sede de aprender e a capacidade de abordar problemas de maneira prática são características que me
                  destacam como profissional. Estou animado para trazer essa mistura de competências técnicas, criatividade e paixão para resolver desafios no mundo do desenvolvimento web. Se você
                  está procurando um desenvolvedor dedicado e inovador, estou ansioso para a oportunidade de colaborar em projetos desafiadores e impactantes.
                </Typography>
              </Item>
            </Grid>
          </Grid>
        </Box>
      </section>

      <div ref={experienciasRef}>
        <Box sx={{ flexGrow: 1, paddingLeft: 3, paddingRight: 3 }}>
          <Typography color="#549e71" padding={2} textAlign="center" variant="h4" component="h3">
            Projetos
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={6}></Grid>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h6" component="h4" textAlign="left">
                  Clone do Flappy Bird - Javascript
                </Typography>
                <Typography textAlign="left">
                  <a href="https://github.com/misasoares/2Flappy-Bird" target="_blank" rel="noopener noreferrer">
                    Repositório no github
                  </a>{" "}
                  -{" "}
                  <a href="https://2-flappy-bird.vercel.app" target="_blank" rel="noopener noreferrer">
                    Aplicação rodando no vercel.
                  </a>
                  <br />
                  Desenvolvi um clone do famoso jogo Flappy Bird como um dos meus primeiros projetos em JavaScript. Este projeto foi uma oportunidade valiosa para praticar habilidades essenciais de
                  programação e design de jogos, em javascript.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}>
              <Item>
                <Typography variant="h6" component="h4" textAlign="left">
                  App de Tarefas - React Typescript
                </Typography>

                <Typography textAlign="left">
                  <a href="https://github.com/misasoares/app-de-tarefas" target="_blank" rel="noopener noreferrer">
                    Repositório no github
                  </a>{" "}
                  -{" "}
                  <a href="https://app-de-tarefas-dusky.vercel.app" target="_blank" rel="noopener noreferrer">
                    Aplicação rodando no vercel.
                  </a>{" "}
                  <br />
                  Desenvolvi um aplicativo de gerenciamento de tarefas utilizando Redux e Redux Persist para oferecer uma experiência de usuário eficiente e intuitiva. Este projeto reflete minha
                  habilidade em criar aplicações interativas e de alto desempenho. <br />
                  Os usuários podem adicionar e deletar tarefas de forma simples, podem marcar tarefas como concluídas ou pendentes, podem utilizar a ferramenta de pesquisa para encontrar tarefas
                  específicas. <br />
                  Utilizado Redux para gerenciamento de estado global, e Redux Persist para persistência de dados, assegurando que as tarefas do usuário sejam salvas. <br />
                  Este aplicativo de tarefas não só demonstra minha competência técnica em Redux e gerenciamento de estado, mas também meu foco em criar interfaces de usuário amigáveis e funcionais.
                </Typography>
              </Item>
            </Grid>
            <Grid item xs={6}></Grid>
          </Grid>
        </Box>
      </div>
    </div>
  );
}

export default App;
