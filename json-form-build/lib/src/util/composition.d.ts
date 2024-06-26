/**
 * Adds styles, isFocused, appliedOptions and onChange
 */
export declare const useVanillaControl: <I extends {
    control: any;
    handleChange: any;
}>(input: I, adaptTarget?: (target: any) => any) => I & {
    styles: import("../styles").Styles;
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
};
/**
 * Adds styles and appliedOptions
 */
export declare const useVanillaLayout: <I extends {
    layout: any;
}>(input: I) => I & {
    styles: import("../styles").Styles;
    appliedOptions: import("vue").ComputedRef<any>;
};
/**
 * Adds styles and appliedOptions
 */
export declare const useVanillaLabel: <I extends {
    label: any;
}>(input: I) => I & {
    styles: import("../styles").Styles;
    appliedOptions: import("vue").ComputedRef<any>;
};
/**
 * Adds styles, appliedOptions and childUiSchema
 */
export declare const useVanillaArrayControl: <I extends {
    control: any;
}>(input: I) => I & {
    styles: import("../styles").Styles;
    appliedOptions: import("vue").ComputedRef<any>;
    childUiSchema: import("vue").ComputedRef<import("@jsonforms/core").UISchemaElement>;
    childLabelForIndex: (index: number) => string;
};
