import React, {FC} from "react";

interface IHeadingProps {
    recipient?: string;
}

const Heading: FC<IHeadingProps> = ({recipient = 'React'}) => <h1>Hello {recipient}</h1>;

export default Heading;
