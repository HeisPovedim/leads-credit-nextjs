import { Control, Controller, FieldErrors, FieldPath, FieldValues } from 'react-hook-form';

// HELPERS && UTILS
import { getErrorMessage } from '@/utils/get-error-message';

// SRC
import style from './InputEmail.module.scss';

export interface IFormInputEmail<T extends FieldValues> {
	id?: string;
	name?: string;
	customClassName?: {
		container?: string;
		error?: string;
	};
	placeholder: string;
	controller: {
		control: Control<T>;
		name: FieldPath<T>;
		error: FieldErrors;
	};
}

export default function InputEmail<T extends FieldValues>(props: IFormInputEmail<T>) {
	const errorMessage = getErrorMessage(props.controller.error, props.controller.name);
	const regExpEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

	return (
		<Controller
			control={props.controller.control}
			name={props.controller.name}
			rules={{
				required: '*Необходимо заполнить поле',
				pattern: {
					value: regExpEmail,
					message: '*Неправильный формат',
				},
			}}
			render={({ field: { onChange, value, ...field } }) => (
				<div className={style['container']}>
					<input
						{...field}
						value={value || ''}
						onChange={e => onChange(e.target.value)}
						id={props.id}
						name={props.name}
						type='email'
						className='custom-input'
						placeholder={props.placeholder}
					/>
					<p className={`${style['error']} ${props.customClassName?.error}`}>{errorMessage && <span>{errorMessage}</span>}</p>
				</div>
			)}
		/>
	);
}
