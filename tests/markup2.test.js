const request = require("supertest");
const app = require("../app");
const calcMarkup = require("../pages/Grupo03/markup2");

describe("POST - MKP2", () => {
    it("should not be possible to make the calc without cost", async () => {
        const res = await request(app).post("/MKP2").send({ margem: 12 })
        expect(res.body).toStrictEqual({ error: "Custo e margem são obrigatórios" })
    })

    it("should not be possible to make the calc without margem", async () => {
        const res = await request(app).post("/MKP2").send({ custo: 100 })
        expect(res.body).toStrictEqual({ error: "Custo e margem são obrigatórios" })
    })

    it("should be possible to make the calc", async () => {
        const res = await request(app).post("/MKP2").send({ margem: 12, custo: 100 })
        expect(res.body).toStrictEqual({ markup: 13.63636363636364, precoVenda: 113.63636363636364 })
    })
})

describe("unit test Markup", () => {
    it("should be possible to calculate markup correcly", () => {
        const result = calcMarkup(100, 12)

        expect(result).toStrictEqual({ markup: 13.63636363636364, precoVenda: 113.63636363636364 })
    })

    it("should not be possible to calculate with wrong params", () => {
        const result = calcMarkup("100", "12")
        expect(result).toBe(null)
    })
})