import { describe,test,expect } from '@jest/globals';

import * as decorator from "./decorator";

describe("Sistema de bebidas", () => {

  test("Expresso simples", () => {
    const bebida = new decorator.cafe_expresso()

    expect(bebida.getnome()).toBe("Cafe Expresso")
    expect(bebida.getpreco()).toBe(5)
  })

  test("Expresso com leite", () => {
    let bebida = new decorator.cafe_expresso()
    bebida = new decorator.leite(bebida)

    expect(bebida.getnome()).toBe("Cafe Expresso, Leite")
    expect(bebida.getpreco()).toBe(7)
  })

  test("Expresso com leite, canela e chantilly", () => {
    let bebida = new decorator.cafe_expresso()
    bebida = new decorator.leite(bebida)
    bebida = new decorator.canela(bebida)
    bebida = new decorator.chantilly(bebida)

    expect(bebida.getnome())
      .toBe("Cafe Expresso, Leite, Canela, Chantilly")

    expect(bebida.getpreco())
      .toBe(11)
  })
})