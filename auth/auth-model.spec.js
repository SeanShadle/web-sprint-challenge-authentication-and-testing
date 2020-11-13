const db = require("../database/dbConfig");
const Users = require("./auth-model")

beforeEach(async () => {
    await db("users").truncate();
});

describe("models", () => {
    it("insert a user", async () => {
        await Users.insert({username: "asdf", password: "asdf"});
        const users = await db("users");
        expect(users).toHaveLength(1);
    });

    it("returns date", async () => {
        await Users.findBy({username: "asdf"});
        const users = await("users");
        expect(Array.isArray([users])).toBe(true);
    });
});