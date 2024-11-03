import { Provider, SupabaseClient } from '@supabase/supabase-js';
import { ProviderScopes, SocialLayout } from '@supabase/auth-ui-shared';
import { Appearance, AuthI18nVariables } from '../types';

type RedirectTo = undefined | string;
export interface SocialAuthProps {
    supabaseClient: SupabaseClient;
    socialLayout?: SocialLayout;
    providers?: Provider[];
    providerScopes?: Partial<ProviderScopes>;
    queryParams?: {
        [key: string]: string;
    };
    redirectTo?: RedirectTo;
    onlyThirdPartyProviders?: boolean;
    view?: 'sign_in' | 'sign_up' | 'magic_link';
    i18n?: AuthI18nVariables;
    appearance?: Appearance;
}
declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SocialAuthProps>, {
    socialLayout: string;
    providers: () => string[];
    onlyThirdPartyProviders: boolean;
    view: string;
}>>, {}, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<__VLS_WithDefaults<__VLS_TypePropsToRuntimeProps<SocialAuthProps>, {
    socialLayout: string;
    providers: () => string[];
    onlyThirdPartyProviders: boolean;
    view: string;
}>>> & Readonly<{}>, {
    view: "sign_in" | "sign_up" | "magic_link";
    providers: Provider[];
    socialLayout: "horizontal" | "vertical";
    onlyThirdPartyProviders: boolean;
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
