import { FC } from "react";

type Props = {
    name: string;
}

const Trends: FC<Props> = ({name}) => {
    return <div>Name: {name}</div>
}

export default Trends;