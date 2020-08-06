export interface TypedData {
    types: TypedDataTypes;
    primaryType: string;
    domain: TypedDataDomain;
    message: object;
}
export declare type TypedDataTypes = {
    [key: string]: TypedDataArgument[];
};
export interface TypedDataArgument {
    name: string;
    type: string;
}
export interface TypedDataDomain {
    name?: string;
    version?: string;
    chainId?: number;
    verifyingContract?: string;
}
export declare const TypedDataUtils: {
    encodeDigest(typedData: TypedData): Uint8Array;
    encodeData(typedData: TypedData, primaryType: string, data: object): Uint8Array;
    hashStruct(typedData: TypedData, primaryType: string, data: object): Uint8Array;
    typeHash(typedDataTypes: TypedDataTypes, primaryType: string): Uint8Array;
    encodeType(typedDataTypes: TypedDataTypes, primaryType: string): string;
};
export declare const encodeTypedDataDigest: (typedData: TypedData) => Uint8Array;
