import classNames from "classnames";
import React from "react";

import styles from "./styles.module.scss";

type TextProps<C extends React.ElementType> = {
    as?: C;
    children: React.ReactNode;
    className?: string;
} & React.ComponentPropsWithoutRef<C>;

export const Text = <C extends React.ElementType = "p">({
                                                        as,
                                                        children,
                                                        className,
                                                        ...props
                                                    }: TextProps<C>) => {
    const Component = as || "p";

    return (
        <Component className={classNames(styles.text, className)} {...props}>
            {children}
        </Component>
    );
};
