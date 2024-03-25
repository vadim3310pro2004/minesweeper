import { SubmitHandler, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import clsx from "clsx";
import { ComponentPropsWithoutRef, FC } from "react";
import { FormControl } from "shared/ui/";
import {  registrationSchema } from "shared/utils/validators";
import { Button } from "shared/ui/";
import styles from './RegistrationForm.module.scss';
import { RegistrationRequest } from "entities/accounts/api/accounts.models";
import { registrate } from "entities/accounts";


export interface LoginFormProps extends ComponentPropsWithoutRef<'form'> { }


const Login: FC<LoginFormProps> = ({ className }) => {
    const { handleSubmit, register, reset, formState: { errors, isValid } } 
        = useForm<RegistrationRequest>({
            mode: "onChange",
            resolver: yupResolver(registrationSchema),
            defaultValues: {
                email: "",
                password: "",
                confirmPassword: "",
                name: "",
            },
        });

    const submit: SubmitHandler<RegistrationRequest> = async (data) => {
        reset();
        try {
            await registrate(data);
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
                error={errors.name?.message}
                message={"Введіть ім'я"}
                inp={{
                    ...register("name"),
                    type:"text",
                    placeholder: "name",
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
            <FormControl
                error={errors.confirmPassword?.message}
                message={"Підтвердіть password"}
                inp={{
                    ...register("confirmPassword"),
                    type:"password",
                    placeholder: "confirm password",
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