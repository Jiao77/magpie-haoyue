import assert from "node:assert/strict"
import HaoyuePlugin from "../index.mjs"

const plugin = await HaoyuePlugin()
assert.equal(plugin.auth.provider, "haoyue")
assert.equal(plugin.provider.id, "haoyue")
assert.equal(plugin.auth.methods[0].prompts.length, 5)

const cfg = {}
plugin.config(cfg)
assert.equal(cfg.provider.haoyue.name, "皓悦API")

console.log("单供应商聚合架构测试通过！")
