import { Avatar, Button, CircularProgress, Grid } from "@mui/material";
import { useFormik } from "formik";
import PageContainer from "../components/stylesComponents/PageContainer";
import TextInput from "../components/stylesComponents/TextInput";
import * as Yup from 'yup';
import useAuth from "../hooks/useAuth";
import useAddNewEmployee from "../features/employee/api/addNewEmployee";

export interface NewEmployeeFormInterface {
    firstName: string,
    lastName: string,
    aadharNumber: string,
    panNumber: string,
    mobileNumber: string,
    address: string
}

const MOBILE_REG_EXP = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/

const AADHAR_REG_EXP = /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/

const PAN_REG_EXP = /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/

export default function NewEmployee() {

    const { auth } = useAuth()
    const { companyId } = auth

    const { mutateAsync: createNewEmployee } = useAddNewEmployee()

    const initialValues: NewEmployeeFormInterface = { firstName: "", lastName: "", aadharNumber: "", panNumber: "", mobileNumber: "", address: "" }
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
        }),
        onSubmit: values => {
            console.log(auth)
            console.log(values)
            createNewEmployee({ ...values, companyId }, {
                onSuccess: (data) => {
                    console.log(data);
                },
                onError(error, variables, context) {
                    console.log(error)
                },
            })
            // loginUser({ userId: values.userId, password: values.password }, {
            //     onSuccess: (data) => {
            //         setSnackMessage("Login Successful");
            //         setSnackType("success")
            //         setAuth({ userId: values.userId, password: values.password, accessToken: data.accessToken, roles: data.roles });
            //         navigate(from, { replace: true })
            //     },
            //     onError: (error: any) => {
            //         console.log(error)
            //         setSnackMessage("Login Failed. Check user id and password and try again.");
            //         setSnackType("warning")
            //     },
            // })
        }
    })


    return (
        <PageContainer>
            <form onSubmit={formik.handleSubmit}>
                <Grid
                    container
                    spacing={1}
                    justifyContent="center"
                    sx={{ px: 2 }}
                >
                    <Grid container spacing={1} item xs={6}>
                        <Grid item xs={6}>
                            <TextInput
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
                            <TextInput
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
                            <TextInput
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
                            <TextInput
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
                            <TextInput
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
                            <TextInput
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
                    </Grid>
                    <Grid container item xs={6}>
                        <Grid item xs={12} sx={{ justifyContent: "flex-end", display: "flex" }}>
                            <Avatar sx={{ width: "15rem", height: "15rem" }} />
                        </Grid>
                    </Grid>
                    <Button
                        type="submit"
                        variant="contained"
                        size="large" >
                        {false ? <CircularProgress sx={{ color: 'white' }} size={30} /> : "Add New Employee"}
                    </Button>
                </Grid>
            </form>
        </PageContainer >
    )
}