declare module 'auspice/src/reducers/tree' {
  export declare type TreeState = Record<string, unknown>
  declare function tree(state?: TreeState): TreeState | undefined
  export default tree
}
