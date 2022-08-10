import { useFormik } from "formik";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as Yup from 'yup';
import useLoginUser from "../features/login/api/useLoginUser";
import useAuth from "../hooks/useAuth"

interface LoginFormValues {
    userId: string,
    password: string
}

interface locationInterface {
    from: { pathname: string }
}

export default function Login() {
    const { setAuth } = useAuth()
    const navigate = useNavigate();
    const location: any = useLocation();
    const from = location.state?.from?.pathname || "/";
    const initialValues: LoginFormValues = { userId: "", password: "" }

    const { mutateAsync: loginUser } = useLoginUser();
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
                    setAuth({ userId: values.userId, password: values.password, accessToken: data.accessToken, roles: data.roles });
                    navigate(from, { replace: true })
                    if (data.status) {
                        toast.success(data.message)
                    }
                    if (!data.status) {
                        toast.error(data.message)
                    }
                },
                onError: (error: any, variables, context) => {
                    toast.error(error.message)
                },
            })
        }
    })

    return (
        <div>
            <form onSubmit={formik.handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-gradient-to-r from-yellow-100 to-yellow-600">
                <div className="mb-4">
                    <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">User Id</label>
                    <input
                        className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                        id="userId"
                        name="userId"
                        type="text"
                        onChange={formik.handleChange}
                        value={formik.values.userId}
                        placeholder="User ID"
                        onBlur={formik.handleBlur}
                    />
                    <p className="text-red-500 text-xs italic">{formik.errors.userId ? formik.errors.userId : ""}</p>
                </div>
                <div className="mb-6">
                    <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                        Password
                    </label>
                    <input className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`} id="password" type="password" placeholder="******************" name="password" onChange={formik.handleChange} value={formik.values.password} onBlur={formik.handleBlur} />

                    <p className="text-red-500 text-xs italic">{formik.errors.password ? formik.errors.password : ""}</p>
                </div>
                <div className="flex items-center justify-between">
                    <button className={`bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline`} type="submit">
                        Login
                    </button>
                    <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800">
                        Forgot Password?
                    </p>
                </div>
            </form>
        </div>
    )
}