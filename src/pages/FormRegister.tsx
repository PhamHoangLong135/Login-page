import { Button, Container, Typography } from "@mui/material";
import * as Yup from "yup";
import { useForm } from "react-hook-form";
import { FormInputText } from "../form-components/FormInputText";
import { FormInputMultiCheckbox } from "../form-components/FormInputMultiCheckbox";
import { FormInputDropdown } from "../form-components/FormInputDropdown";
import { FormInputRadio } from "../form-components/FormInputRadio";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormPassword } from "../form-components/FormPassword";
import { useNavigate } from "react-router-dom";
interface IFormInput {
  firstName: string;
  lastName: string;
  gender: string;
  hobby: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
  showPassword: boolean;
  family: string[];
}
export const FormRegister = () => {
  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Firstname is required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Lastname is required"),
    hobby: Yup.string().required("Hobby is required"),
    gender: Yup.string().required("Gender is required"),
    email: Yup.string().required("Email is required").email("Email is invalid"),
    phone: Yup.string()
      .required("Phone number is required")
      .matches(/^\+?[0-9]{3}-?[0-9]{6,12}$/g, "Phone number is invalid"),
    password: Yup.string()
      .min(6, "Password must be at least 6 characters")
      .required("Password is required"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "Passwords must match")
      .required("Confirm Password is required"),
  });
  const formOptions = {
    resolver: yupResolver(validationSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: "",
      hobby: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
      showPassword: false,
      family: [],
    },
  };
  const methods = useForm<IFormInput>(formOptions);
  const {
    handleSubmit,
    reset,
    control,
    setValue,
    register,
    formState: { errors },
  } = methods;
  console.log(errors);

  let navigate = useNavigate();
  const onSubmit = (data: IFormInput) => {
    navigate("/");
    console.log(data);
  };
  // localStorage.setItem(IFormInput.key, IFormInput.value)
  // useEffect(() => {
  //   localStorage.setItem(IFormInput.key, JSON.stringify(IFormInput.value));
  // }, [setValue]);

  return (
    <Container sx={{ mt: 3 }} maxWidth="sm" className="login-form">
      <Typography variant="h6"> Register </Typography>

      <FormInputText
        control={control}
        label="First name"
        {...register("firstName")}
      />

      <FormInputText
        control={control}
        label="Last name"
        {...register("lastName")}
      />

      <FormInputDropdown
        control={control}
        label="Hobby"
        {...register("hobby")}
      />
      <FormInputRadio
        control={control}
        label="Gender"
        {...register("gender")}
      />
      <FormInputText control={control} label="Email" {...register("email")} />
      <FormInputText control={control} label="Phone" {...register("phone")} />
      <FormPassword
        control={control}
        label="Password"
        {...register("password")}
      />
      <FormPassword
        control={control}
        label="Confirm Password"
        {...register("confirmPassword")}
      />
      <FormInputMultiCheckbox
        control={control}
        setValue={setValue}
        name="family"
        label="Family"
      />
      <div className="button">
        <Button onClick={handleSubmit(onSubmit)} variant="contained" fullWidth>
          {" "}
          Register{" "}
        </Button>
        <Button
          onClick={() => reset()}
          variant="outlined"
          sx={{ mt: 2 }}
          fullWidth
        >
          {" "}
          Reset{" "}
        </Button>
      </div>
    </Container>
  );
};
