import { Control, Controller, FieldErrors, FieldPath, FieldValues, useForm } from 'react-hook-form';

// MASKITO
import { MaskitoOptions } from '@maskito/core';
import { useMaskito } from '@maskito/react';

// UTILITIES
import { getErrorMessage } from '@/utils/get-error-message';

// STYLES
import style from './InputPhone.module.scss';

// NOTE: Интерфейс для компонента InputNumberFormat
export interface IInputNumberFormat<T extends FieldValues> {
	id?: string;
	name?: string;
	customClassName?: {
		container?: string;
		error?: string;
	};
	value: T[keyof T];
	placeholder?: string;

	controller: {
		control: Control<T>;
		name: FieldPath<T>;
		error: FieldErrors<T>;
	};
	handlers: {
		onChange: (value: string) => void;
	};
}

export default function InputNumberPhone<T extends FieldValues>(props: IInputNumberFormat<T>) {
	const {} = useForm({ mode: 'all', shouldUnregister: true });
	const errorMessage = getErrorMessage(props.controller.error, props.controller.name);

	const phoneMaskOptions: MaskitoOptions = {
		mask: ['+', '7', ' ', '(', /\d/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
		overwriteMode: 'replace',
	};
	const maskitoRef = useMaskito({ options: phoneMaskOptions });

	return (
		<Controller
			control={props.controller.control}
			name={props.controller.name}
			defaultValue={props.value}
			rules={{
				required: '*Необходимо заполнить поле',
				minLength: {
					value: 18,
					message: '*Заполните номер телефона полностью',
				},
			}}
			render={({ field }) => (
				<div className={style['input-phone']}>
					<input
						{...field}
						ref={maskitoRef}
						id={props.id}
						name={props.name}
						className={`custom-input ${props.customClassName}`}
						type='tel'
						placeholder={props.placeholder}
						onInput={val => {
							const value = val.currentTarget.value;
							field.onChange(value);
							props.handlers.onChange(value);
						}}
					/>
					<p className={`${style['error']} ${props.customClassName?.error}`}>{errorMessage && <span>{errorMessage}</span>}</p>
				</div>
			)}
		/>
	);
}
