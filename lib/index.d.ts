import { Plugin } from 'vue';
import { Auth, ForgottenPassword, UpdatePassword, MagicLink, UserContextProvider, useSupabaseUser } from './component';
import { injectStrict } from './utils';
import { UserContextProviderInjection, UserContextProviderKey } from './types';

export { Auth, ForgottenPassword, UpdatePassword, MagicLink, injectStrict, UserContextProvider, useSupabaseUser, UserContextProviderInjection, UserContextProviderKey };
declare const plugin: Plugin;
export default plugin;
