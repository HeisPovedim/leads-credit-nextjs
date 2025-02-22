'use client';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

// INPUTS
import InputEmail from '@/components/inputs/input-email/InputEmail';
import InputNumberPhone from '@/components/inputs/input-phone/InputPhone';
import InputText from '@/components/inputs/input-text/InputText';

// UI
import Button from '@/components/ui/button/Button';

// STYLES
import style from './Application.module.scss';

interface IFormInputs {
	fio: string;
	phone: string;
	email: string;
	description: string;
	agreement: boolean;
}

export default function Application() {
	const [isSubmitted, setIsSubmitted] = useState(false);

	const {
		reset,
		control,
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IFormInputs>({
		defaultValues: {
			fio: '',
			phone: '',
			email: '',
			description: '',
			agreement: true,
		},
	});

	const onSubmit = async (data: IFormInputs) => {
		try {
			const requestData = {
				fio: data.fio,
				phone_number: data.phone.replace(/\D/g, ''),
				email: data.email,
				description: data.description,
				consent: data.agreement,
			};

			console.log(requestData);

			const response = await fetch('http://localhost:8000/form/add', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(requestData),
			});

			if (response.ok) {
				reset();
				setIsSubmitted(true);
			} else {
				setIsSubmitted(false);
			}
		} catch (error) {
			console.error('Error:', error);
			alert(error);
		}
	};

	return (
		<section id='application' className={`${style['application']}`}>
			<div className='container'>
				<div className={`${style['application__wrapper']}`}>
					<h2 className={`${style['application__title']} flex flex-col items-center`}>Оставить заявку</h2>
					{isSubmitted ? (
						<div className={style['application__success']}>
							<h3 className={style['application__success-title']}>Спасибо за вашу заявку!</h3>
							<p className={style['application__success-text']}>Мы свяжемся с вами в ближайшее время.</p>
						</div>
					) : (
						<form onSubmit={handleSubmit(onSubmit)} className={`${style['application__form']} flex flex-col items-center`}>
							<InputText<IFormInputs>
								type='text'
								customClassName={{
									error: style['application-modal__error'],
								}}
								placeholder='ФИО'
								controller={{
									control: control,
									name: 'fio',
									error: errors,
								}}
								handlers={{
									onChange: () => {},
								}}
							/>
							<InputNumberPhone<IFormInputs>
								customClassName={{
									error: style['application-modal__error'],
								}}
								placeholder='Номер телефона'
								value=''
								controller={{
									control: control,
									name: 'phone',
									error: errors,
								}}
								handlers={{
									onChange: () => {},
								}}
							/>
							<InputEmail<IFormInputs>
								id='email'
								placeholder='Электронная почта'
								customClassName={{
									error: style['application-modal__error'],
								}}
								controller={{
									control: control,
									name: 'email',
									error: errors,
								}}
							/>
							<InputText<IFormInputs>
								type='description'
								customClassName={{
									error: style['application-modal__error'],
								}}
								placeholder='Опишите задачу'
								controller={{
									control: control,
									name: 'description',
									error: errors,
								}}
								handlers={{
									onChange: () => {},
								}}
							/>
							<div className={`${style['application__form-resume']} flex items-center justify-between gap-[34px]`}>
								<div className={`${style['application__submit-wrapper']}`}>
									<Button type='submit' variant='green-oval' className={style['application__submit']}>
										Отправить заявку
									</Button>
									{errors.agreement && <p className={style['application__submit-error']}>{errors.agreement.message}</p>}
								</div>
								<div className={style['application__checkbox-wrapper']}>
									<input
										type='checkbox'
										id='agreement'
										className={style['application__checkbox']}
										defaultChecked={true}
										{...register('agreement', { required: '*Необходимо согласие' })}
									/>
									<label htmlFor='agreement' className={style['application__checkbox-label']}>
										Я согласен на обработку <br className='hidden' /> персональных данных
									</label>
								</div>
							</div>
						</form>
					)}
				</div>
			</div>
		</section>
	);
}
