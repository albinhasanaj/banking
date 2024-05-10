import React from 'react'

import { FormField, FormLabel, FormControl, FormMessage } from './ui/form'
import { Input } from "@/components/ui/input"
import { Control, FieldPath } from 'react-hook-form';
import { z } from 'zod';
import { AuthFormSchema } from '@/lib/utils';

const formSchema = AuthFormSchema("sign-up");

interface CustomInputProps {
    name: FieldPath<z.infer<typeof formSchema>>;
    placeholder: string;
    label: string;
    control: Control<z.infer<typeof formSchema>>;
};

const CustomInput = ({ name, placeholder, control, label }: CustomInputProps) => {
    return (
        <FormField
            control={control}
            name={name}
            render={({ field }) => (
                <div className="form-item">
                    <FormLabel className="form-label">
                        {label}
                    </FormLabel>
                    <div className="flex w-full flex-col">
                        <FormControl>
                            <Input placeholder={placeholder}
                                className="input-class"
                                type={name === "password" ? "password" : "text"}
                                {...field}
                            />
                        </FormControl>
                        <FormMessage className="form-message mt-2" />
                    </div>
                </div>
            )}
        />
    )
}

export default CustomInput