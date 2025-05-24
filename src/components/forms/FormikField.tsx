import React from 'react';
import { useField } from 'formik';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { cn } from '@/lib/utils';

interface FormikFieldProps {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  className?: string;
  disabled?: boolean;
}

export const FormikField: React.FC<FormikFieldProps> = ({
  label,
  name,
  type = 'text',
  placeholder,
  className,
  disabled = false,
  ...props
}) => {
  const [field, meta] = useField(name);
  const hasError = meta.touched && meta.error;

  return (
    <div className="mb-4">
      <Label 
        htmlFor={name} 
        className={cn(hasError && 'text-destructive')}
      >
        {label}
      </Label>
      <Input
        id={name}
        type={type}
        placeholder={placeholder}
        disabled={disabled}
        className={cn(
          hasError && 'border-destructive',
          className
        )}
        {...field}
        {...props}
      />
      {hasError && (
        <p className="text-destructive text-sm mt-1">{meta.error}</p>
      )}
    </div>
  );
};

export default FormikField;