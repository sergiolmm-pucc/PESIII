const request = require("supertest");
const app = require("../app");

describe("POST - MKP2", () => {
    it("should not be possible to make the calc without cost", async () => {
        const res = await request(app).post("/MKP2").send({ markup: 12 })
        expect(res.body).toStrictEqual({error: "Custo e markup são obrigatórios"})
    })

    it("should not be possible to make the calc without markup", async () => {
        const res = await request(app).post("/MKP2").send({ custo: 100 })
        expect(res.body).toStrictEqual({error: "Custo e markup são obrigatórios"})
    })

    it("should be possible to make the calc", async () => {
        const res = await request(app).post("/MKP2").send({markup: 12, custo: 100})
        expect(res.body).toStrictEqual({precoVenda: 112.00000000000001})
    })
})