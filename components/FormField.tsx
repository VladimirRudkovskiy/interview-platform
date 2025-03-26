import React from 'react'
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage } from './ui/form'
import { Input } from './ui/input'
import { Control, Controller, FieldValues, Path } from 'react-hook-form'

interface FormFielsProps<T extends FieldValues> {
	control: Control<T>;
	name: Path<T>;
	label: string;
	placeholder?: string;
	type?: 'text' | 'password' | 'email' | 'file';
}

const FormField = ({ control, name, label, placeholder, type="text" }: 	FormFielsProps<T>) => (

	<Controller 
	name={name} 
	control={control} 
	render={({ field }) => (

				<FormItem>
				<FormLabel className='label'>{label}</FormLabel>
				<FormControl>
					<Input 
					className='input' 
					placeholder={placeholder} 
					{...field} 
					type={type}
					/>
				</FormControl>
				<FormDescription>
				</FormDescription>
				<FormMessage />
			</FormItem>
		)}
	/>
);

export default FormField
