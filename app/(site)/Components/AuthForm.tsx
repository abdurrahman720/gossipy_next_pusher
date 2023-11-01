"use client";

import Button from "@/app/Components/Button";
import Input from "@/app/Components/Input/Input";
import { useCallback, useState } from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

type Variant = "LOGIN" | "REGISTER";

const AuthForm = () => {
  const [variant, setVariant] = useState<Variant>("LOGIN");
    const [isLoading, setIsLoading] = useState(false);
    
    const toggleVariant = useCallback(() => {
        if (variant === "LOGIN") {
            setVariant('REGISTER');
        } else {
            setVariant('LOGIN');
        }
    }, [variant])
    
    const { register, handleSubmit, formState: {
        errors
    } } = useForm<FieldValues>({
        defaultValues: {
            name: '',
            email: '',
            password: '',
        },

    })

    const onSubmit: SubmitHandler<FieldValues> = (data) => {
        setIsLoading(true);
        
        if (variant === 'REGISTER') {
            // axios register
        }

        if (variant === 'LOGIN') {
            //axios login
        }
    }

    const socialAction = (action: string) => {
        setIsLoading(true);

        //netAuth social sign in
    }

    return <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
        <div className="bg-white px-4 py-8 shadow sm:rounded-lg sm:px-10">
            <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                {variant === 'REGISTER' && (
                    <Input label="Name" register={register} id="name" type="text" errors={errors} />
                    
                )}
              
                <Input label="Email" register={register} id="email" type="email" errors={errors} />
               
                <Input label="Password" register={register} id="password" type="password" errors={errors} />
                <Button>Login</Button>
            </form>
      </div>
        
  </div>;
};

export default AuthForm;
