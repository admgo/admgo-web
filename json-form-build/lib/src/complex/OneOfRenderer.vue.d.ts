import { CombinatorSubSchemaRenderInfo, ControlElement, JsonFormsRendererRegistryEntry } from '@jsonforms/core';
declare const controlRenderer: import("vue").DefineComponent<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<ControlElement>;
    };
    path: {
        required: true;
        type: StringConstructor;
    };
    enabled: {
        required: false;
        type: BooleanConstructor;
        default: undefined;
    };
    renderers: {
        required: boolean;
        type: import("vue").PropType<JsonFormsRendererRegistryEntry[]>;
        default: undefined;
    };
    cells: {
        required: boolean;
        type: import("vue").PropType<import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[]>;
        default: undefined;
    };
    config: {
        required: boolean;
        type: ObjectConstructor;
        default: undefined;
    };
}, {
    selectedIndex: import("vue").Ref<number>;
    selectIndex: import("vue").Ref<number>;
    newSelectedIndex: import("vue").Ref<number>;
    dialog: import("vue").Ref<HTMLDialogElement | undefined>;
    confirm: import("vue").Ref<HTMLElement | undefined>;
    control: import("vue").ComputedRef<{
        rootSchema: NonNullable<import("@jsonforms/core").JsonSchema>;
        path: string;
        id: string;
        indexOfFittingSchema: number;
        uischemas: import("@jsonforms/core").JsonFormsUISchemaRegistryEntry[];
        data: any;
        translations: import("@jsonforms/core").CombinatorTranslations;
        cells: {
            tester: import("@jsonforms/core").RankedTester;
            cell: any;
        }[];
        label: string;
        description: string;
        required: NonNullable<boolean | undefined>;
        i18nKeyPrefix: string;
        uischema: ControlElement;
        errors: string;
        config: any;
        schema: NonNullable<import("@jsonforms/core").JsonSchema>;
        enabled: boolean;
        visible: boolean;
        renderers: JsonFormsRendererRegistryEntry[];
    }>;
    handleChange(path: string, value: any): void;
    styles: import("..").Styles;
    isFocused: import("vue").Ref<boolean>;
    appliedOptions: import("vue").ComputedRef<any>;
    controlWrapper: import("vue").ComputedRef<{
        id: any;
        description: any;
        errors: any;
        label: any;
        visible: any;
        required: any;
    }>;
    onChange: (event: Event) => void;
}, unknown, {
    indexedOneOfRenderInfos(): (CombinatorSubSchemaRenderInfo & {
        index: number;
    })[];
}, {
    handleSelectChange(event: Event): void;
    showDialog(): void;
    closeDialog(): void;
    onConfirm(): void;
    onCancel(): void;
    newSelection(): void;
}, import("vue").ComponentOptionsMixin, import("vue").ComponentOptionsMixin, {}, string, import("vue").VNodeProps & import("vue").AllowedComponentProps & import("vue").ComponentCustomProps, Readonly<import("vue").ExtractPropTypes<{
    schema: {
        required: true;
        type: import("vue").PropType<import("@jsonforms/core").JsonSchema>;
    };
    uischema: {
        required: true;
        type: import("vue").PropType<ControlElement>;
    };
    path: {
        required: true;
        type: StringConstructor;
    };
    enabled: {
        required: false;
        type: BooleanConstructor;
        default: undefined;
    };
    renderers: {
        required: boolean;
        type: import("vue").PropType<JsonFormsRendererRegistryEntry[]>;
        default: undefined;
    };
    cells: {
        required: boolean;
        type: import("vue").PropType<import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[]>;
        default: undefined;
    };
    config: {
        required: boolean;
        type: ObjectConstructor;
        default: undefined;
    };
}>>, {
    enabled: boolean;
    renderers: JsonFormsRendererRegistryEntry[];
    cells: import("@jsonforms/core").JsonFormsCellRendererRegistryEntry[];
    config: Record<string, any>;
}, {}>;
export default controlRenderer;
export declare const entry: JsonFormsRendererRegistryEntry;
