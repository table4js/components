export interface IAction {
    name: string;
    action: () => void;
    title?: string;
    visible?: boolean;
    enabled?: boolean;
    active?: boolean;
    icon?: string;
    svg?: string;
    container?: string;
    cssClasses?: string;
    cssImage?: string;
    cssLabel?: string;
}
