import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { ComponentPropsWithoutRef, FC } from "react";
import { FormControl } from "shared/ui/";
import { loginSchema } from "shared/utils/validators";
import { Button } from "shared/ui/";
import styles from './LoginForm.module.scss';
import { LoginRequest } from "shared/models";
import { login } from "entities/accounts";


export interface LoginFormProps extends ComponentPropsWithoutRef<'form'> { }


const Login: FC<LoginFormProps> = ({ className }) => {
    const { handleSubmit, register, reset, formState: { errors, isValid } } = useForm<LoginRequest>({
        mode: "onChange",
        resolver: yupResolver(loginSchema),
        defaultValues: {
            email: "",
            password: "",
        },
    });

    const submit: SubmitHandler<LoginRequest> = async (data) => {
        reset();
        try {
            await login(data);
            alert("success");
        } catch (error) {
            alert("error !")
        }

    }

    return (
        <form
            className={clsx(className, styles.root)}
            onSubmit={handleSubmit(submit)}
        >
            <FormControl
                error={errors.email?.message}
                message={"Введіть email"}
                inp={{
                    ...register("email"),
                    type:"email",
                    placeholder: "email",
                }}
            />
            <FormControl
                error={errors.password?.message}
                message={"Введіть password"}
                inp={{
                    ...register("password"),
                    type:"password",
                    placeholder: "password",
                }}
            />
            <Button
                disabled={!isValid}
                variant="success"
            >
                send
            </Button>
        </form>
    );
}


export default Login;