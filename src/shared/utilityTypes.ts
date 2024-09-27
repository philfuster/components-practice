export type Remap<TType> = { [Key in keyof TType]: TType[Key] };
