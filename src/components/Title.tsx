import { ReactNode } from "react";

interface TitleProps {
    children: ReactNode;
    id: string;
}

function Title({ children, id}: TitleProps) {
    return (
       <h1
        id={id && id}
        className="text-xl font-bold underline
        underline-offset-8 decoration-4 mt-5 mb-5
        text-stone-900 text-center"
       >
        {children}
       </h1>
    )
}

export default Title;