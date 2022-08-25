import { Avatar, Button, Card, CircularProgress, Grid, TextField, Typography } from "@mui/material";
import { useFormik } from "formik";
import PageContainer from "../components/stylesComponents/PageContainer";
import * as Yup from 'yup';
import useAuth from "../hooks/useAuth";
import useAddNewEmployee from "../features/employee/api/addNewEmployee";
import { Helmet } from "react-helmet";

export interface NewEmployeeFormInterface {
    firstName: string,
    lastName: string,
    aadharNumber: string,
    panNumber: string,
    mobileNumber: string,
    address: string,
    email: string,
}

const MOBILE_REG_EXP = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const AADHAR_REG_EXP = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/

const PAN_REG_EXP = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/

export default function NewEmployee() {

    const { auth } = useAuth()
    const { companyId } = auth

    const { mutateAsync: createNewEmployee } = useAddNewEmployee()

    const initialValues: NewEmployeeFormInterface = { firstName: "", lastName: "", aadharNumber: "", panNumber: "", mobileNumber: "", address: "", email: "" }
    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: Yup.object({
            firstName: Yup.string()
                .required("Required"),
            lastName: Yup.string()
                .required("Required"),
            aadharNumber: Yup.string()
                .matches(AADHAR_REG_EXP, "aadhar number is invalid")
                .required("Required"),
            panNumber: Yup.string()
                .matches(PAN_REG_EXP, 'pan number is invalid')
                .required("Required"),
            mobileNumber: Yup.string()
                .matches(MOBILE_REG_EXP, 'mobile number is not valid')
                .required("Required"),
            address: Yup.string()
                .required("Required"),
            email: Yup.string()
                .required("Required")
        }),
        onSubmit: values => {
            createNewEmployee({ ...values, companyId }, {
                onSuccess: (data) => {
                    console.log(data);
                },
                onError(error, variables, context) {
                    console.log(error)
                },
            })
        }
    })


    return (
        <PageContainer>
            <Helmet>
                <title>New Employee</title>
            </Helmet>
            <form onSubmit={formik.handleSubmit}>
                <Grid
                    container
                    spacing={2}
                    justifyContent="center"
                    sx={{ px: 2 }}
                >
                    <Grid container item xs={4}>
                        <Card sx={{ width: "100%", p: 2 }} elevation={1} variant="outlined">
                            <Grid direction="column" item xs={12} sx={{ justifyContent: "center", display: "flex", alignItems: "center", pt: 2 }}>
                                <Typography sx={{ py: 3, pt: 1 }} variant="subtitle1" color="initial">Provide a profile image of the employee</Typography>
                                <Avatar sx={{ width: 100, height: 100, mb: 3 }} >{formik.values.firstName === "" ? null : formik.values.firstName}</Avatar>
                                <Button variant="outlined" component="label" sx={{ mb: 3 }}>Upload a photo <input
                                    type="file"
                                    hidden
                                /></Button>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid container spacing={1} item xs={8}>
                        <Card variant="outlined" sx={{ p: 2, width: "100%" }}>
                            <Grid container item spacing={1}>
                                <Grid item xs={6}>
                                    <TextField
                                        id="firstName"
                                        variant="filled"
                                        label="First Name"
                                        placeholder="Enter First Name"
                                        type="text"
                                        fullWidth
                                        value={formik.values.firstName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                                        helperText={formik.touched.firstName && formik.errors.firstName}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="lastName"
                                        type="text"
                                        variant="filled"
                                        label="Last Name"
                                        placeholder="Enter Last Name"
                                        fullWidth
                                        value={formik.values.lastName}
                                        onChange={formik.handleChange}
                                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                                        helperText={formik.touched.lastName && formik.errors.lastName}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="aadharNumber"
                                        type="text"
                                        variant="filled"
                                        label="Aadhar Number"
                                        placeholder="Enter Aadhar card number"
                                        fullWidth
                                        value={formik.values.aadharNumber}
                                        onChange={formik.handleChange}
                                        error={formik.touched.aadharNumber && Boolean(formik.errors.aadharNumber)}
                                        helperText={formik.touched.aadharNumber && formik.errors.aadharNumber}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="panNumber"
                                        type="text"
                                        variant="filled"
                                        label="PAN Number"
                                        placeholder="Enter Pan card number"
                                        fullWidth
                                        value={formik.values.panNumber}
                                        onChange={formik.handleChange}
                                        error={formik.touched.panNumber && Boolean(formik.errors.panNumber)}
                                        helperText={formik.touched.panNumber && formik.errors.panNumber}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="mobileNumber"
                                        type="tel"
                                        variant="filled"
                                        label="Mobile Number"
                                        placeholder="Enter mobile number"
                                        fullWidth
                                        value={formik.values.mobileNumber}
                                        onChange={formik.handleChange}
                                        error={formik.touched.mobileNumber && Boolean(formik.errors.mobileNumber)}
                                        helperText={formik.touched.mobileNumber && formik.errors.mobileNumber}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="address"
                                        type="text"
                                        variant="filled"
                                        label="Address"
                                        placeholder="Enter Address"
                                        fullWidth
                                        value={formik.values.address}
                                        onChange={formik.handleChange}
                                        error={formik.touched.address && Boolean(formik.errors.address)}
                                        helperText={formik.touched.address && formik.errors.address}
                                    />
                                </Grid>
                                <Grid item xs={6}>
                                    <TextField
                                        id="email"
                                        type="email"
                                        variant="filled"
                                        label="Email Address"
                                        placeholder="Enter Email Address"
                                        fullWidth
                                        value={formik.values.email}
                                        onChange={formik.handleChange}
                                        error={formik.touched.email && Boolean(formik.errors.email)}
                                        helperText={formik.touched.email && formik.errors.email}
                                    />
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        size="medium"
                        sx={{ mt: 3 }}
                    >
                        {false ? <CircularProgress sx={{ color: 'white' }} size={30} /> : "Add New Employee"}
                    </Button>
                </Grid>
            </form>
        </PageContainer >
    )
}