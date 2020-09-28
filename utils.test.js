import { add } from "./utils";

test("this is from es modules", () => {
	expect(add(1, 1)).toBe(2);
});
