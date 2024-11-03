import { SupabaseClient, User } from '@supabase/supabase-js';
import { PropType } from 'vue';

declare const _default: import('vue').DefineComponent<import('vue').ExtractPropTypes<{
    supabaseClient: {
        type: PropType<SupabaseClient<any, "public", any>>;
        required: true;
    };
}>, () => import('vue').VNode<import('vue').RendererNode, import('vue').RendererElement, {
    [key: string]: any;
}>, {}, {}, {}, import('vue').ComponentOptionsMixin, import('vue').ComponentOptionsMixin, {}, string, import('vue').PublicProps, Readonly<import('vue').ExtractPropTypes<{
    supabaseClient: {
        type: PropType<SupabaseClient<any, "public", any>>;
        required: true;
    };
}>> & Readonly<{}>, {}, {}, {}, {}, string, import('vue').ComponentProvideOptions, true, {}, any>;
export default _default;
export declare const useSupabaseUser: (supabaseClient: SupabaseClient) => {
    supabaseUser: import('vue').Ref<{
        id: string;
        app_metadata: {
            [x: string]: any;
            provider?: string | undefined;
        };
        user_metadata: import('@supabase/supabase-js').UserMetadata;
        aud: string;
        confirmation_sent_at?: string | undefined;
        recovery_sent_at?: string | undefined;
        email_change_sent_at?: string | undefined;
        new_email?: string | undefined;
        new_phone?: string | undefined;
        invited_at?: string | undefined;
        action_link?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        created_at: string;
        confirmed_at?: string | undefined;
        email_confirmed_at?: string | undefined;
        phone_confirmed_at?: string | undefined;
        last_sign_in_at?: string | undefined;
        role?: string | undefined;
        updated_at?: string | undefined;
        identities?: {
            id: string;
            user_id: string;
            identity_data?: {
                [key: string]: any;
            } | undefined;
            identity_id: string;
            provider: string;
            created_at?: string | undefined;
            last_sign_in_at?: string | undefined;
            updated_at?: string | undefined;
        }[] | undefined;
        is_anonymous?: boolean | undefined;
        factors?: {
            id: string;
            friendly_name?: string | undefined;
            factor_type: string;
            status: "verified" | "unverified";
            created_at: string;
            updated_at: string;
        }[] | undefined;
    } | null, User | {
        id: string;
        app_metadata: {
            [x: string]: any;
            provider?: string | undefined;
        };
        user_metadata: import('@supabase/supabase-js').UserMetadata;
        aud: string;
        confirmation_sent_at?: string | undefined;
        recovery_sent_at?: string | undefined;
        email_change_sent_at?: string | undefined;
        new_email?: string | undefined;
        new_phone?: string | undefined;
        invited_at?: string | undefined;
        action_link?: string | undefined;
        email?: string | undefined;
        phone?: string | undefined;
        created_at: string;
        confirmed_at?: string | undefined;
        email_confirmed_at?: string | undefined;
        phone_confirmed_at?: string | undefined;
        last_sign_in_at?: string | undefined;
        role?: string | undefined;
        updated_at?: string | undefined;
        identities?: {
            id: string;
            user_id: string;
            identity_data?: {
                [key: string]: any;
            } | undefined;
            identity_id: string;
            provider: string;
            created_at?: string | undefined;
            last_sign_in_at?: string | undefined;
            updated_at?: string | undefined;
        }[] | undefined;
        is_anonymous?: boolean | undefined;
        factors?: {
            id: string;
            friendly_name?: string | undefined;
            factor_type: string;
            status: "verified" | "unverified";
            created_at: string;
            updated_at: string;
        }[] | undefined;
    } | null>;
};
