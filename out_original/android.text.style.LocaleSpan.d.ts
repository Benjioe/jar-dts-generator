/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.os.Parcel.d.ts" />
/// <reference path="./android.text.TextPaint.d.ts" />
/// <reference path="./java.util.Locale.d.ts" />

declare module android {
	export module text {
		export module style {
			export class LocaleSpan {
				public constructor();
				public constructor(param0: java.util.Locale);
				public constructor(param0: android.os.Parcel);
				public getSpanTypeId(): number;
				public describeContents(): number;
				public writeToParcel(param0: android.os.Parcel, param1: number): void;
				public getLocale(): java.util.Locale;
				public updateDrawState(param0: android.text.TextPaint): void;
				public updateMeasureState(param0: android.text.TextPaint): void;
			}
		}
	}
}
