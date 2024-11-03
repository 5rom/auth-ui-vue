import { AuthProps, AuthViewType } from '../types';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AuthProps>, {
    view: string;
    socialLayout: string;
    onlyThirdPartyProviders: boolean;
    magicLink: boolean;
    showLinks: boolean;
    dark: boolean;
    theme: string;
    otpType: string;
    anonymouslyCredentials: undefined;
    options: undefined;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {
    "auth:submit": (...args: any[]) => void;
    "auth:error": (...args: any[]) => void;
    "update:view": (...args: any[]) => void;
}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AuthProps>, {
    view: string;
    socialLayout: string;
    onlyThirdPartyProviders: boolean;
    magicLink: boolean;
    showLinks: boolean;
    dark: boolean;
    theme: string;
    otpType: string;
    anonymouslyCredentials: undefined;
    options: undefined;
}>>> & Readonly<{
    "onAuth:submit"?: ((...args: any[]) => any) | undefined;
    "onAuth:error"?: ((...args: any[]) => any) | undefined;
    "onUpdate:view"?: ((...args: any[]) => any) | undefined;
}>, {
    dark: boolean;
    view: AuthViewType;
    anonymouslyCredentials: import('@supabase/supabase-js').SignInAnonymouslyCredentials;
    theme: string;
    magicLink: boolean;
    showLinks: boolean;
    options: {
        [key: string]: any;
    };
    socialLayout: "horizontal" | "vertical";
    onlyThirdPartyProviders: boolean;
    otpType: import('@supabase/auth-ui-shared').OtpType;
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
