/// <reference path="./_helpers.d.ts" />

declare module android {
	export module support {
		export module annotation {
			export class FloatRange {
				public from(): number;
				public to(): number;
				public fromInclusive(): boolean;
				public toInclusive(): boolean;
			}
		}
	}
}
