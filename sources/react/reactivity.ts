import { useEffect, useState } from "react";

export const makeReactiveModel = (model: any, val: number, updater: (val: number) => void) => () => {
    model["__triggerUpdate"] = () => {
        updater(val + 1);
    }
    return () => {
        delete model["__triggerUpdate"];
    }
};

export function makeReactive(model: any) {
    const [update, updater] = useState<number>(0);
    useEffect(makeReactiveModel(model, update, updater));
};