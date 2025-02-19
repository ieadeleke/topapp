
interface PropsInterface {
    styling?: string;
    clickAction?: () => void;
    isLoading?: boolean;
    type?: "submit" | "button";
    text: string
}
const Button = (props: PropsInterface) => {
    return <button className={props.styling} type={props.type} onClick={props.clickAction} disabled={props?.isLoading}>{
        !props.isLoading ? props.text : "Sending Request. Please Wait...."}</button>
}

export default Button;