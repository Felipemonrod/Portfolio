import { TYPESCRIPT_TYPES } from "@babel/types";
import { Box,Paper, Button, Container, AppBar, elevation, Typography, Icon,} from "@mui/material";
import Grid from '@mui/material/Grid'; // Grid version 1
import Grid2 from '@mui/material/Unstable_Grid2'; // Grid version 2
import { purple } from "@mui/material/colors";

export default function App(){
  return <Box>
    <AppBar sx={{bgcolor: "purple", height:"9vh", elevation:0}}>
      <Box sx={{
        gap: 2,
        display: "flex",
        flexDirection: "row",
        justifyContent: "flex-end",
        px: 16
      }}>
        <Button variant="text" sx={{marginTop:1.4, fontSize: 14, fontWeight:"bold"}}> Sobre mim </Button>
        <Button variant="text" sx={{marginTop:1.4, fontSize: 14, fontWeight:"bold"}}> Meu Butão </Button>
        <Button variant="text" sx={{marginTop:1.4, fontSize: 14, fontWeight:"bold"}}> Meu Butão </Button>
      </Box>
    </AppBar>
    <Box sx={{
      bgcolor: "purple",
      height: "100vh",
      isplay: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      }}>
          <Box sx={{padding:15,}}>
          <Typography variant="h1" sx={{width:
          {xs:1, md:650},}}> Olá me chamo Felipe</Typography>
          <Typography variant="h2" sx={{width:
          {xs:1, md:650}}}> Bem vindo ao Meu Portifolio</Typography>
          </Box>
          <Box>
          <img src="src\Imgs\Futura Logo.png" alt="Projeto Futura" style={{ width: "100%", maxWidth: 800 }} /> {/* Responsive image with maximum width */}
          </Box>
    </Box>
      <Typography variant="h2"sx={{justifyContent:"start", textAlign:"justify", padding:2, paddingLeft:15,}}>Sobre mim </Typography>
      <Box sx={{
        display: "flex",
        flexDirection:{xs: "column", md:"row"},
        justifyContent:"center",
        gap:"4"
        }}> 
          <Paper elevation={3} sx={{width:
          {xs:1, md:1108}}}>
            <Box sx={{m:3}}>
              <Typography>Sou um desenvolvedor web, empenhado no aprimoramento constante e na busca por novos conhecimentos. Iniciei minha jornada profissional recentemente e, ao longo de um ano de experiência após a conclusão da formação, acumulei experiências significativas no desenvolvimento de projetos e sites solicitados. Estou comprometido em aplicar e expandir o conhecimento adquirido para ser um bom profissional na área de desenvolvimento web.
              </Typography>
              <Button variant="contained" href="http://www.linkedin.com/in/felipe-montalvão-rodrigues">butao</Button>
              <Button variant="contained" href="https://github.com/Felipemonrod">butao</Button>
            </Box>
          </Paper>
      </Box>
    <Container sx={{
      display:"flex",
      flexDirection: "row",
      justifyContent: "center",
      textAlign:"center",
      }}
    >  
      <Box sx={{m:3, width:"30%"}}> 
            <Typography variant="h3">Projetos </Typography>
        </Box>  
    </Container>
      <Box sx={{
        display: "flex",
        justifyContent:"center",
        flexDirection:{xs: "column",},
        alignItems:"center"
        }}
      > 
          <Paper elevation={4} sx={{ width: { xs: 1, md: 800 }, marginBottom: 5 }}>
          <Box sx={{m:3, width:"90%", textAlign:"justify",}}>
              <Typography variant="h4">1 projeto</Typography>
              <Typography>como ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funciona</Typography>
              <Button variant="contained">butao</Button>
          </Box>
          </Paper>
          <Paper elevation={4} sx={{width:
            {xs:1, md:800}}}>
            <Box sx={{m:3, width:"90%", textAlign:"justify",}}>
              <Typography variant="h4">1 projeto</Typography>
              <Typography>como ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funcionacomo ess bagaça funciona</Typography>
              <Button variant="contained">butao</Button>
            </Box>
          </Paper>
      </Box>
  </Box>
}
