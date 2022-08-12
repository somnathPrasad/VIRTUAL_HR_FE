import { Button, Grid, Typography } from "@mui/material";
import { useTheme } from "@mui/system";
import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import * as Yup from 'yup';
import LoginCard from "../components/stylesComponents/LoginCard";
import TextInput from "../components/stylesComponents/TextInput";
import useLoginUser from "../features/login/api/useLoginUser";
import useAuth from "../hooks/useAuth"
import CircularProgress from '@mui/material/CircularProgress';
import useSnackbar from "../hooks/useSnackbar";
import PageContainer from "../components/stylesComponents/PageContainer";

interface LoginFormValues {
    userId: string,
    password: string
}

export default function Login() {
    const { setAuth } = useAuth()
    const navigate = useNavigate();
    const location: any = useLocation();
    const from = location.state?.from?.pathname || "/";
    const initialValues: LoginFormValues = { userId: "", password: "" }
    const { setSnackMessage, setSnackType } = useSnackbar()

    const { mutateAsync: loginUser, isLoading } = useLoginUser();
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            userId: Yup.string()
                .max(10, 'Must be 10 characters')
                .min(10, 'Must be 10 characters')
                .required('Required'),
            password: Yup.string()
                .required('Required'),
        }),
        onSubmit: values => {
            loginUser({ userId: values.userId, password: values.password }, {
                onSuccess: (data) => {
                    setSnackMessage("Login Successful");
                    setSnackType("success")
                    setAuth({ userId: values.userId, accessToken: data.accessToken, roles: data.roles, firstName: data?.firstName, lastName: data?.lastName, companyId: data?.companyId });
                    navigate(from, { replace: true })
                },
                onError: (error: any) => {
                    console.log(error)
                    setSnackMessage("Login Failed. Check user id and password and try again.");
                    setSnackType("warning")
                },
            })
        }
    })
    const theme = useTheme()
    return (
        <PageContainer sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <LoginCard>
                <Typography variant="h5" color="initial" align="center" sx={{ pb: 3, fontWeight: 600, color: theme.palette.primary.dark }}>Welcome</Typography>
                <form onSubmit={formik.handleSubmit}>
                    <Grid container direction={"column"} spacing={2} >
                        <Grid item>
                            <TextInput
                                id="userId"
                                label="User Id"
                                variant="filled"
                                name="userId"
                                placeholder="Enter your 10 digit PAN number"
                                fullWidth
                                value={formik.values.userId}
                                onChange={formik.handleChange}
                                error={formik.touched.userId && Boolean(formik.errors.userId)}
                                helperText={formik.touched.userId && formik.errors.userId}
                            />
                        </Grid>
                        <Grid item>
                            <TextInput
                                fullWidth
                                id="password"
                                name="password"
                                label="Password"
                                type="password"
                                variant="filled"
                                placeholder="******************"
                                value={formik.values.password}
                                onChange={formik.handleChange}
                                error={formik.touched.password && Boolean(formik.errors.password)}
                                helperText={formik.touched.password && formik.errors.password}
                            />
                        </Grid>
                        <Grid item>
                            <Button
                                type="submit"
                                sx={{ backgroundColor: "#3b82f6" }}
                                variant="contained"
                                fullWidth
                                size="large" >
                                {isLoading ? <CircularProgress sx={{ color: 'white' }} size={30} /> : "Login"}
                            </Button>
                        </Grid>
                        <Grid item>
                            <Typography color={theme.palette.primary.dark} align="center">Forgot Password?</Typography>
                        </Grid>
                    </Grid>
                </form>
            </LoginCard>
        </PageContainer>
    )
}