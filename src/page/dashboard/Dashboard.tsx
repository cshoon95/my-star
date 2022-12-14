import Chart from './Chart';
import Deposits from './Deposits';
import Board from '../../comp/module/Board';
import InitPage from '../../comp/module/InitPage';
import Copyright from "../../comp/footer/Copyright"

// start -- MUI
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
// end -- MUI

function Dashboard() {
  return (
    <InitPage>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Grid container spacing={3}>
            {/* Chart */}
            <Grid item xs={12} md={8} lg={9}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Chart />
              </Paper>
            </Grid>
            {/* Recent Deposits */}
            <Grid item xs={12} md={4} lg={3}>
              <Paper
                sx={{
                  p: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  height: 240,
                }}
              >
                <Deposits />
              </Paper>
            </Grid>
            {/* Recent Orders */}
            <Grid item xs={15}>
              <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column'}}>
                <Board />
              </Paper>
            </Grid>
          </Grid>
        </Container>
        <Copyright/>
      </InitPage>
  );
}

export default Dashboard;             