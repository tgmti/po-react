export interface PoPopoverProps extends React.ComponentProps<'div'> {
    arrowDirection?: 'right'|'right-top'|'right-bottom'|'top'|'top-left'|'top-right'
    isHidden?: boolean
}

export const defaultProps: PoPopoverProps = {
    isHidden: true
}