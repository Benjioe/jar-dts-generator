/// <reference path="./_helpers.d.ts" />
/// <reference path="./java.lang.Object.d.ts" />
/// <reference path="./java.util.Collection.d.ts" />
/// <reference path="./java.util.Comparator.d.ts" />
/// <reference path="./java.util.Iterator.d.ts" />
/// <reference path="./java.util.NavigableSet.d.ts" />
/// <reference path="./java.util.SortedSet.d.ts" />

declare module java {
	export module util {
		export class TreeSet {
			public constructor();
			public constructor(param0: java.util.Collection);
			public constructor(param0: java.util.Comparator);
			public constructor(param0: java.util.SortedSet);
			public add(param0: java.lang.Object): boolean;
			public addAll(param0: java.util.Collection): boolean;
			public clear(): void;
			public clone(): java.lang.Object;
			public comparator(): java.util.Comparator;
			public contains(param0: java.lang.Object): boolean;
			public isEmpty(): boolean;
			public iterator(): java.util.Iterator;
			public descendingIterator(): java.util.Iterator;
			public remove(param0: java.lang.Object): boolean;
			public size(): number;
			public first(): java.lang.Object;
			public last(): java.lang.Object;
			public pollFirst(): java.lang.Object;
			public pollLast(): java.lang.Object;
			public higher(param0: java.lang.Object): java.lang.Object;
			public lower(param0: java.lang.Object): java.lang.Object;
			public ceiling(param0: java.lang.Object): java.lang.Object;
			public floor(param0: java.lang.Object): java.lang.Object;
			public descendingSet(): java.util.NavigableSet;
			public subSet(param0: java.lang.Object, param1: boolean, param2: java.lang.Object, param3: boolean): java.util.NavigableSet;
			public headSet(param0: java.lang.Object, param1: boolean): java.util.NavigableSet;
			public tailSet(param0: java.lang.Object, param1: boolean): java.util.NavigableSet;
			public subSet(param0: java.lang.Object, param1: java.lang.Object): java.util.SortedSet;
			public headSet(param0: java.lang.Object): java.util.SortedSet;
			public tailSet(param0: java.lang.Object): java.util.SortedSet;
		}
	}
}
