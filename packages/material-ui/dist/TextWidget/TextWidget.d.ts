import { StandardTextFieldProps as TextFieldProps } from "@material-ui/core/TextField";
import { WidgetProps } from "@rjsf/core";
export declare type TextWidgetProps = WidgetProps & TextFieldProps;
declare const TextWidget: ({ id, required, readonly, disabled, type, label, value, onChange, onBlur, onFocus, autofocus, options, schema, uiSchema, rawErrors, formContext, ...textFieldProps }: TextWidgetProps) => JSX.Element;
export default TextWidget;
