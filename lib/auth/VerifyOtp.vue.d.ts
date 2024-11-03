import { SupabaseClient } from '@supabase/supabase-js';
import { OtpType } from '@supabase/auth-ui-shared';
import { Appearance, AuthI18nVariables } from '../types';

export interface VerifyOtpProps {
    appearance?: Appearance;
    supabaseClient: SupabaseClient;
    otpType?: OtpType;
    showLinks?: boolean;
    i18n?: AuthI18nVariables;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VerifyOtpProps>, {
    otpType: string;
    showLinks: boolean;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<VerifyOtpProps>, {
    otpType: string;
    showLinks: boolean;
}>>> & Readonly<{}>, {
    showLinks: boolean;
    otpType: OtpType;
}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
type __VLS_NonUndefinedable<T> = T extends undefined ? never : T;
type __VLS_TypePropsToRuntimeProps<T> = {
    [K in keyof T]-?: {} extends Pick<T, K> ? {
        type: import('vue').PropType<__VLS_NonUndefinedable<T[K]>>;
    } : {
        type: import('vue').PropType<T[K]>;
        required: true;
    };
};
type __VLS_WithDefaults<P, D> = {
    [K in keyof Pick<P, keyof P>]: K extends keyof D ? __VLS_Prettify<P[K] & {
        default: D[K];
    }> : P[K];
};
type __VLS_Prettify<T> = {
    [K in keyof T]: T[K];
} & {};
