import { TYPESCRIPT_TYPES } from "@babel/types";
import {
  Box,
  Paper,
  Button,
  Container,
  AppBar,
  elevation,
  Typography,
  Icon,
  colors,
  Link,
} from "@mui/material";
import Grid from "@mui/material/Grid"; // Grid version 1
import Grid2 from "@mui/material/Unstable_Grid2"; // Grid version 2
import { blue, purple } from "@mui/material/colors";
import React from "react";
import foto from "./Imgs/Futura Logo.png";
import fotominha from "./Imgs/ImgCurriculo.jpg";
import Divider from "@mui/material/Divider";
import GitHubIcon from "@mui/icons-material/GitHub";
import { GitHub, AccessAlarm, ThreeDRotation } from "@mui/icons-material";

export default function App() {
  return (
    <Box>
      <Box
        sx={{
          bgcolor: "#2C2C54",
          height: "80vh",
          display: "flex",
          justifyContent: "start",
          alignItems: "center",
        }}
      >
        <Box>
          <Typography
            variant="h1"
            sx={{ paddingLeft: 15, width: { xs: 1, md: 650 } }}
          >
            Olá me chamo Felipe
          </Typography>
          <Typography
            variant="h2"
            sx={{ paddingLeft: 15, width: { xs: 1, md: 650 } }}
          >
            Bem vindo ao Meu Portifolio
          </Typography>
        </Box>
        <Box>
          <img className="FotoM" src={fotominha} alt="Logo" />
        </Box>
      </Box>
      <Typography
        variant="h3"
        sx={{
          justifyContent: "start",
          textAlign: "justify",
          padding: 2,
          paddingLeft: 15,
        }}
      >
        Sobre mim
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
        }}
      >
        <Paper elevation={3} sx={{ width: { xs: 1, md: 1020 } }}>
          <Box sx={{ m: 3 }}>
            <Typography sx={{ paddingBottom: 3 }}>
              Sou um desenvolvedor web, empenhado no aprimoramento constante e
              na busca por novos conhecimentos. Iniciei minha jornada
              profissional recentemente e, ao longo de um ano de experiência
              após a conclusão da formação, acumulei experiências significativas
              no desenvolvimento de projetos e sites solicitados. Estou
              comprometido em aplicar e expandir o conhecimento adquirido para
              ser um bom profissional na área de desenvolvimento web. Tenho
              experiência com HTML, CSS, PHP, SQL e estou estudando recentemente
              React e Material UI.
            </Typography>
            <Button
              sx={{ marginRight: 3 }}
              variant="contained"
              href="http://www.linkedin.com/in/felipe-montalvão-rodrigues"
            >
              linkedin
            </Button>
            <Button variant="contained" href="https://github.com/Felipemonrod">
              Github
            </Button>
          </Box>
        </Paper>
      </Box>
      <Container
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "star",
          textAlign: "center",
        }}
      >
        <Box sx={{ m: 3, paddingLeft: 5 }}>
          <Typography variant="h3">Projetos </Typography>
        </Box>
      </Container>
      <Container>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            direction: "row",
            gap: 3,
            paddingBottom: 5,
          }}
        >
          <Paper
            elevation={4}
            sx={{ width: { xs: 1, md: 500 }, height: "38vh" }} //Define o tamanho do paper
          >
            <Box
              sx={{
                direction: "column",
                justifyContent: "flex-end",
                alignItems: "center",
                padding: 3,
              }}
            >
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  direction: "row",
                  gap: 5,
                  paddingBottom: 3,
                }} //define o titulo e a foto
              >
                <Typography variant="h4">Colegio Futura</Typography>
                <img className="LogoF" src={foto} alt="Logo" />
              </Box>
              <Typography
                className="Text"
                sx={{ width: "100%", paddingBottom: 3 }}
              >
                Trabalhei em um Colégio Particular, onde desempenhei um papel
                crucial no departamento de Desenvolvimento Web. Minhas
                responsabilidades incluiram gerenciar todo o processo, desde o
                design inicial do site até o lançamento final, além de realizar
                atualizações contínuas de informações e notícias.
              </Typography>
              <Button
                variant="contained"
                href="https://www.colegiofuturacn.com/"
              >
                Saiba mais
              </Button>
            </Box>
          </Paper>
          <Paper
            elevation={4}
            sx={{ width: { xs: 1, md: 500 }, height: "38vh" }}
          >
            <Box
              sx={{
                direction: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: 3,
              }}
            >
              <Typography variant="h4" sx={{ paddingBottom: 4 }}>
                TC IF Morrinhos
              </Typography>
              <Typography className="Text" sx={{ paddingBottom: 6 }}>
                Meu projeto de conclusão do ensino médio técnico me proporcionou
                a oportunidade de desenvolver um site completo, do banco de
                dados ao design. Através desta experiência, pude aprimorar
                minhas habilidades em diversas áreas
              </Typography>
              <Button
                variant="contained"
                href="https://github.com/Felipemonrod/TC-IF-Morrinhos-Ensino-Medio"
              >
                Saiba mais
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
      <footer>
        <Box
          sx={{
            bgcolor: "#2C2C54",
          }}
        >
          <Box
            sx={{
              direction: "column",
              justifyContent: "center",
              alignItems: "flex-start",
            }}
          >
            <Typography
              className="ContatosT"
              variant="h3"
              sx={{ m: 3, paddingLeft: 12, paddingTop: 3 }}
            >
              Contatos
            </Typography>
            <Typography className="UL-LI-CT" sx={{ paddingLeft: 11 }}>
              <ul>
                <li>E-mail:</li>
                <Link href="felipe.mon.rod@gmail.com">
                  felipe.mon.rod@gmail.com
                </Link>
              </ul>
              <ul>
                <li>Whatsapp:</li>
                <li>64 99971-7738</li>
              </ul>
            </Typography>
          </Box>
        </Box>
      </footer>
    </Box>
  );
}
