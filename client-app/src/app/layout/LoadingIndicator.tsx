import { Dimmer, Loader } from "semantic-ui-react";

interface Props {
    message?: string;
    inverted?: boolean;
}

export default function LoadingIndicator({ message = "Loading...", inverted = true }: Props) {
    return (
        <Dimmer active={true} inverted={inverted}>
            <Loader content={message}/>
        </Dimmer>
    )
}