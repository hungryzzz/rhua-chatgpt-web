export type TagColor = 'amber' | 'blue' | 'cyan' | 'green' | 'grey' | 'indigo' | 'light-blue' | 'light-green' | 'lime' | 'orange' | 'pink' | 'purple' | 'red' | 'teal' | 'violet' | 'yellow' | 'white';
export type TagType = 'ghost' | 'solid' | 'light';
export type TagSize = 'default' | 'small' | 'large';
export type AvatarShape = 'circle' | 'square';
export type TagShape = 'circle' | 'square';

export interface AdditionProps {
    children?:any;
    uploadFile?: any;
    tagKey?: string | number;
    size?: TagSize;
    color?: TagColor;
    type?: TagType;
    closable?: boolean;
    visible?: boolean;
    onClose?: (tagChildren: React.ReactNode, event: React.MouseEvent<HTMLElement>, tagKey: string | number) => void;
    onClick?: React.MouseEventHandler<HTMLDivElement>;
    prefixIcon?: React.ReactNode;
    suffixIcon?: React.ReactNode;
    style?: React.CSSProperties;
    className?: string;
    avatarSrc?: string;
    avatarShape?: AvatarShape;
    shape?: TagShape;
    onKeyDown?: React.KeyboardEventHandler<HTMLDivElement>;
    'aria-label'?: React.AriaAttributes['aria-label'];
    tabIndex?: number;
    onMouseEnter?: () => void;
}