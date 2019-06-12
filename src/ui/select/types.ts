import { IDropdownPublicProps } from './../dropdown/types';
import { IInputPublicProps } from './../input/types';

export interface ISelectActiveProps {
    index?: number;
    value?: string;
    text?: string;
}

export interface ISelectActiveInheritedProps extends
    React.SyntheticEvent<HTMLElement>
{
    item: ISelectActiveProps;
}

export type ISelectOptionsObject = {[key: string]: string}
export type ISelectOptionsArray = Array<{
    value: number | string;
    text?: string;
}>

export interface ISelectStateProps {
    active?: number;
    options?: ISelectOptionsObject | ISelectOptionsArray;
}

export interface ISelectDispatchProps {
    onChange: (event: ISelectActiveInheritedProps) => void;
    onEnter?: (event: React.KeyboardEvent<HTMLElement>) => void;
    onOpen?: () => void;
}

export interface ISelectProps extends
    ISelectStateProps,
    ISelectDispatchProps,
    IDropdownPublicProps,
    IInputPublicProps
{
    editable?: boolean;
    ref?: any;
}

export type IConflictFreeHTMLAttributes<E> =
    Pick<React.InputHTMLAttributes<E>, Exclude<keyof React.InputHTMLAttributes<E>,
        'color'
        | 'onChange'
    >>;

export interface ISelectInheritedProps extends
    ISelectProps,
    IConflictFreeHTMLAttributes<HTMLInputElement>
{}
