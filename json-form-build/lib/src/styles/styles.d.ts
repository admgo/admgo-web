import { UISchemaElement } from '@jsonforms/core';
export interface Styles {
    control: {
        root?: string;
        wrapper?: string;
        label?: string;
        description?: string;
        error?: string;
        input?: string;
        textarea?: string;
        select?: string;
        option?: string;
    };
    dialog: {
        root?: string;
        title?: string;
        body?: string;
        actions?: string;
        buttonPrimary?: string;
        buttonSecondary?: string;
    };
    verticalLayout: {
        root?: string;
        item?: string;
    };
    horizontalLayout: {
        root?: string;
        item?: string;
    };
    group: {
        root?: string;
        label?: string;
        item?: string;
    };
    arrayList: {
        root?: string;
        legend?: string;
        addButton?: string;
        label?: string;
        itemWrapper?: string;
        noData?: string;
        item?: string;
        itemToolbar?: string;
        itemLabel?: string;
        itemContent?: string;
        itemExpanded?: string;
        itemMoveUp?: string;
        itemMoveDown?: string;
        itemDelete?: string;
    };
    label: {
        root?: string;
    };
}
export declare const useStyles: (element?: UISchemaElement) => Styles;
