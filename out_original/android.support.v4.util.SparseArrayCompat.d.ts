/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module util {
				export class SparseArrayCompat {
					public constructor();
					public constructor(param0: number);
					public clone(): java.lang.Object;
					public clone(): android.support.v4.util.SparseArrayCompat;
					public get(param0: number): java.lang.Object;
					public get(param0: number, param1: java.lang.Object): java.lang.Object;
					public delete(param0: number): void;
					public remove(param0: number): void;
					public removeAt(param0: number): void;
					public removeAtRange(param0: number, param1: number): void;
					public put(param0: number, param1: java.lang.Object): void;
					public size(): number;
					public keyAt(param0: number): number;
					public valueAt(param0: number): java.lang.Object;
					public setValueAt(param0: number, param1: java.lang.Object): void;
					public indexOfKey(param0: number): number;
					public indexOfValue(param0: java.lang.Object): number;
					public clear(): void;
					public append(param0: number, param1: java.lang.Object): void;
					public toString(): string;
				}
			}
		}
	}
}