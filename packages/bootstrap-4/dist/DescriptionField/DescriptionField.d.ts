import { FieldProps } from "@rjsf/core";
export interface DescriptionFieldProps extends Partial<FieldProps> {
    description?: string;
}
declare const DescriptionField: ({ description }: Partial<FieldProps<any>>) => JSX.Element | null;
export default DescriptionField;
