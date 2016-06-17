/// <reference path="./_helpers.d.ts" />

declare module org {
	export module w3c {
		export module dom {
			export class Notation {
				public getPublicId(): string;
				public getSystemId(): string;
			}
		}
	}
}
