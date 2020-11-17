export interface PoPopoverProps extends React.ComponentProps<'div'> {
    arrowDirection?:
        'right'|'right-top'|'right-bottom'|
        'top'|'top-left'|'top-right'|
        'left'|'left-top'|'left-bottom'|
        'bottom'|'bottom-left'|'bottom-right'
    isHidden?: boolean
    content?: string
    hideArrow?: boolean
    title?: string
    trigger?: 'click'|'hover'
}

export const defaultProps: PoPopoverProps = {
    isHidden: true,
    hideArrow: false,
    arrowDirection: 'left-top',
    trigger: 'click'
}