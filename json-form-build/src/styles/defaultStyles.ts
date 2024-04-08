import { Styles } from './styles'

export const defaultStyles: Styles = {
  control: {
    root: 'control',
    wrapper: 'wrapper',
    label: 'text-black-100',
    description: 'text-sm text-muted-foreground',
    input:
      'flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
    error: 'text-sm text-destructive',
    textarea:
      'flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-sm shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50',
    select: 'select',
    option: 'option',
  },
  verticalLayout: {
    root: 'vertical-layout',
    item: 'vertical-layout-item',
  },
  horizontalLayout: {
    root: 'horizontal-layout',
    item: 'horizontal-layout-item',
  },
  group: {
    root: 'group',
    label: 'group-label',
    item: 'group-item',
  },
  arrayList: {
    root: 'array-list',
    legend: 'array-list-legend',
    addButton: 'array-list-add',
    label: 'array-list-label',
    itemWrapper: 'array-list-item-wrapper',
    noData: 'array-list-no-data',
    item: 'array-list-item',
    itemToolbar: 'array-list-item-toolbar',
    itemLabel: 'array-list-item-label',
    itemContent: 'array-list-item-content',
    itemExpanded: 'expanded',
    itemMoveUp: 'array-list-item-move-up',
    itemMoveDown: 'array-list-item-move-down',
    itemDelete: 'array-list-item-delete',
  },
  label: {
    root: 'label-element',
  },
  dialog: {
    root: 'dialog-root',
    title: 'dialog-title',
    body: 'dialog-body',
    actions: 'dialog-actions',
    buttonPrimary: 'dialog-button-primary',
    buttonSecondary: 'dialog-button-secondary',
  },
}
