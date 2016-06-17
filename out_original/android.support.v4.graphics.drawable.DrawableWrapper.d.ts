/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.graphics.drawable.Drawable.d.ts" />

declare module android {
	export module support {
		export module v4 {
			export module graphics {
				export module drawable {
					export class DrawableWrapper {
						public getWrappedDrawable(): android.graphics.drawable.Drawable;
						public setWrappedDrawable(param0: android.graphics.drawable.Drawable): void;
					}
				}
			}
		}
	}
}
