import { FieldErrors } from 'react-hook-form';

export const getErrorMessage = (errors: FieldErrors, type: string): string => errors[type]?.message as string;
