/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.lang.String.d.ts" />

declare module android {
	export module util {
		export class SizeF {
			public constructor();
			public constructor(param0: number, param1: number);
			public getWidth(): number;
			public getHeight(): number;
			public equals(param0: java.lang.Object): boolean;
			public toString(): string;
			public static parseSizeF(param0: string): android.util.SizeF;
			public hashCode(): number;
		}
	}
}
