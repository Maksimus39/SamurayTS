import React, { ComponentType, Suspense } from "react";
import { Preloader } from "../common/preloader/Preloader";

export function withSuspense<T>(Component: ComponentType<T>) {
    return (props: T) => {
        return (
            <Suspense fallback={<Preloader />}>
                <Component {...props} />
            </Suspense>
        );
    };
}
