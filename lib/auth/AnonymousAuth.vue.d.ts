import { SignInAnonymouslyCredentials, SupabaseClient } from '@supabase/supabase-js';
import { RedirectTo } from '@supabase/auth-ui-shared';
import { Appearance, AuthI18nVariables } from '../types';

export interface AnonymousSignInProps {
    appearance?: Appearance;
    supabaseClient: SupabaseClient;
    redirectTo?: RedirectTo;
    i18n?: AuthI18nVariables;
    anonymouslyCredentials?: SignInAnonymouslyCredentials;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AnonymousSignInProps>, {}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<AnonymousSignInProps>, {}>>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
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
