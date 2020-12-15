import { IconButtonProps as MuiIconButtonProps } from "@material-ui/core/IconButton";
declare type IconButtonProps = MuiIconButtonProps & {
    icon: string;
};
declare const IconButton: (props: IconButtonProps) => JSX.Element;
export default IconButton;
