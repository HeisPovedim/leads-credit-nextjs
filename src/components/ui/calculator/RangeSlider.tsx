import styles from './RangeSlider.module.scss';

interface RangeSliderProps {
	value: number;
	min: number;
	max: number;
	step?: number;
	onChange: (value: number) => void;
}

export default function RangeSlider({ value, min, max, step = 1, onChange }: RangeSliderProps) {
	const percentage = ((value - min) * 100) / (max - min);

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		const newValue = Number(e.target.value);
		if (newValue !== value) {
			requestAnimationFrame(() => {
				onChange(newValue);
			});
		}
	};

	return (
		<div className={styles.range__slider}>
			<input type='range' min={min} max={max} step={step} value={value} onChange={handleChange} style={{ backgroundSize: `${percentage}% 100%` }} />
		</div>
	);
}
