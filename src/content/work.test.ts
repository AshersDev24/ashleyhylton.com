import { describe, expect, it } from "vitest";
import { teaPoweredClients } from "./site";
import { clientShots, fanClients } from "./work";

describe("work imagery", () => {
  it("has a screenshot and domain for every Tea Powered client", () => {
    for (const { name } of teaPoweredClients) {
      expect(clientShots[name], name).toBeDefined();
      expect(clientShots[name].domain).toMatch(/^[a-z0-9.-]+\.[a-z]{2,}$/);
    }
  });

  it("only fans out clients that have a screenshot", () => {
    expect(fanClients).toHaveLength(3);
    for (const name of fanClients) expect(clientShots[name], name).toBeDefined();
  });
});
