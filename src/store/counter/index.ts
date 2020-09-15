import { CommitOptions, DispatchOptions, Module } from 'vuex';
import { IState, state } from './state';
import { IMutations, mutations } from './mutations';
import { Actions, actions, IActions } from './actions';
import { Getters, getters } from './getters';
import { addPath } from '@/store/utils'

export { IActions } from './actions';
export { IState } from './state';
export { IMutations } from './mutations';
export { Getters } from './getters';

// export type CounterStore = {
//     commit<K extends keyof Mutations, P extends Parameters<Mutations[K]>[1]>(
//         key: K,
//         payload: P,
//         options?: CommitOptions
//     ): ReturnType<Mutations[K]>;
// } & {
//     dispatch<K extends keyof Actions>(
//         key: K,
//         payload: Parameters<Actions[K]>[1],
//         options?: DispatchOptions
//     ): ReturnType<Actions[K]>;
// } & {
//     getters: {
//         [K in keyof Getters]: ReturnType<Getters[K]>
//     };
// };

export const ActionTypes = addPath(IActions, 'counter')
export const MutationTypes = addPath(IMutations, 'counter')
// export const GettersTypes = addPath(Getters, 'auth')

const counter: Module<IState, any> = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters,
};

export default counter;
