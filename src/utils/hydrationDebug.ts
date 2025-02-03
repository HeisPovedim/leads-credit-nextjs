export function setupHydrationDebug() {
	if (typeof window !== 'undefined') {
		const originalError = console.error;
		console.error = (...args) => {
			if (/hydration/i.test(args[0])) {
				console.log('Подробная информация об ошибке гидратации:', args);
			}
			originalError.apply(console, args);
		};
	}
}
