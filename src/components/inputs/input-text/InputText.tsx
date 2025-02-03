import { Control, Controller, FieldErrors, FieldPath, FieldValues } from 'react-hook-form';

// UTILS
import { getErrorMessage } from '@/utils/get-error-message';

// STYLES
import style from './InputText.module.scss';

export interface IInputText<T extends FieldValues> {
	id?: string;
	name?: string;
	customClassName?: {
		container?: string;
		error?: string;
	};
	placeholder?: string;
	type?: 'text' | 'description';

	controller: {
		control: Control<T>;
		name: FieldPath<T>;
		error: FieldErrors<T>;
	};
	handlers: {
		onChange: (value: string) => void;
	};
}

export default function InputText<T extends FieldValues>(props: IInputText<T>) {
	const errorMessage = getErrorMessage(props.controller.error, props.controller.name);

	// Определяем правила валидации в зависимости от типа
	const validationRules = {
		text: {
			required: '*Необходимо заполнить поле',
			pattern: {
				value: /^[А-Яа-яЁё\s-]+$/,
				message: '*Используйте только русские буквы',
			},
		},
		description: {
			required: '*Необходимо заполнить поле',
		},
	};

	return (
		<Controller
			control={props.controller.control}
			name={props.controller.name}
			rules={validationRules[props.type || 'text']}
			render={({ field }) => (
				<div className={style['input-text']}>
					{props.type === 'description' ? (
						<textarea
							{...field}
							id={props.id}
							name={props.name}
							className={`custom-input ${style['textarea']} ${props.customClassName}`}
							placeholder={props.placeholder}
							rows={4}
						/>
					) : (
						<input
							{...field}
							id={props.id}
							name={props.name}
							className={`custom-input ${props.customClassName}`}
							type='text'
							placeholder={props.placeholder}
						/>
					)}
					<p className={`${style['error']} ${props.customClassName?.error}`}>{errorMessage && <span>{errorMessage}</span>}</p>
				</div>
			)}
		/>
	);
}
