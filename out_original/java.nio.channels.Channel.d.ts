/// <reference path="./_helpers.d.ts" />

declare module java {
	export module nio {
		export module channels {
			export class Channel {
				public isOpen(): boolean;
				public close(): void;
			}
		}
	}
}
