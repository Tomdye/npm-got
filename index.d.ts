declare module got {
	interface Got {
		stream (path: string): any;
	}
}

declare var got: got.Got;

export = got;