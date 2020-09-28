const functions = require("./functions");

const initDatabase = () => console.log("Database initialized...");
const closeDatabase = () => console.log("Database closed...");

// each
// beforeEach(() => initDatabase());
// afterEach(() => closeDatabase());

// together
beforeAll(() => initDatabase());
afterAll(() => closeDatabase());

const nameCheck = () => console.log("Checking name...");

describe("checking names", () => {
	beforeEach(() => nameCheck());

	test("User is Jeff", () => {
		const user = "Jeff";
		expect(user).toBe("Jeff");
	});

	test("User is Karen", () => {
		const user = "Karen";
		expect(user).toBe("Karen");
	});
});

test("Adds 2 + 2 to equal 4", () => {
	expect(functions.add(2, 2)).toBe(4);
});

test("Adds 2 + 2 to NOT equal 5", () => {
	expect(functions.add(2, 2)).not.toBe(5);
});

test("should be null", () => {
	expect(functions.isNull()).toBeNull();
});

test("should be falsy", () => {
	expect(functions.checkValue(0)).toBeFalsy();
});

test("should be falsy", () => {
	expect(functions.checkValue("")).toBeFalsy();
});

test("should be truthy", () => {
	expect(functions.checkValue(2)).toBeTruthy();
});

test("User should be Kenny To obj", () => {
	expect(functions.createUser()).toEqual({
		firstName: "Kenny",
		lastName: "To"
	});
});

test("should be under 1600", () => {
	const load1 = 800;
	const load2 = 800;
	expect(load1 + load2).toBeLessThanOrEqual(1600);
});

test("there is no I in team", () => {
	expect("team").not.toMatch(/I/);
});

test("there is an i", () => {
	expect("teami").toMatch(/I/i);
});

// Arrays
test("Admins should be usernames", () => {
	const usernames = ["john", "karen", "admin"];
	expect(usernames).toContain("admin");
});

// async data, promise
test("user fetched name should be Leanne Graham", () => {
	expect.assertions(1); // needed for async
	return functions.fetchUser().then(data => {
		expect(data.name).toEqual("Leanne Graham");
	});
});

// async data, async / await
test("user fetched name should be Leanne Graham", async () => {
	expect.assertions(1); // needed for async
	const data = await functions.fetchUser();
	expect(data.name).toEqual("Leanne Graham");
});

test("sleep", async () => {
	const data = await functions.sleep(1000);
	expect(data).toEqual("done");
});
