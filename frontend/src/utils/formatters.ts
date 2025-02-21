export const formatMoney = (value: number): string => {
	return value.toLocaleString('ru-RU', { maximumFractionDigits: 2 }) + ' ₽';
};
