const components: Array<{[index: string]: (props: any) => JSX.Element}> = []

export function registerComponent(componentName: string, componentCreator: (props: any) => JSX.Element) {
    components[componentName] = componentCreator;
}

export function unregisterComponent(componentName: string) {
    delete components[componentName];
}

export interface IAbrisComponentProps {
    componentName: string;
    componentProps: any;
}

export function AbrisComponent({ componentName, componentProps }: IAbrisComponentProps) {
    const componentCreator = components[componentName];
    if(!componentCreator) {
        console.error("The '" + componentName + "' component hasn't found.");
        return null;
    }
    return componentCreator(componentProps);
}