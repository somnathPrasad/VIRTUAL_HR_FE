import { Card } from '@mui/material';
import { styled } from '@mui/material/styles';

const LoginCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(6),
    backgroundImage: "linear-gradient(to bottom right,rgb(254 249 195), rgb(202 138 4))",
    width: 400,
    boxShadow: `${theme.palette.primary.main} 30px 0px 1000px 3px`,
    [theme.breakpoints.down('md')]: {
        width:300,
        padding: theme.spacing(3)
    },
}))

export default LoginCard