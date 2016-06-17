/// <reference path="./_helpers.d.ts" />
/// <reference path="./android.hardware.Sensor.d.ts" />

declare module android {
	export module hardware {
		export class SensorEvent {
			public accuracy: number;
			public sensor: android.hardware.Sensor;
			public timestamp: number;
			public values: native.Array<number>;
		}
	}
}
