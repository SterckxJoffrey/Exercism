/// <reference path="./global.d.ts" />
//
// @ts-check

/**
 * Determine the price of the pizza given the pizza and optional extras
 *
 * @param {Pizza} pizza name of the pizza to be made
 * @param {Extra[]} extras list of extras
 *
 * @returns {number} the price of the pizza
 */
export function pizzaPrice(pizza, ...extras) {
  const basePrices = {
    Margherita: 7,
    Caprese: 9,
    Formaggio: 10,
  };

  const extraPrices = {
    ExtraSauce: 1,
    ExtraToppings: 2,
  };

  // prix de base
  let total = basePrices[pizza] || 0;

  // ajout des extras (options)
  for (const extra of extras) {
    total += extraPrices[extra] || 0;
  }

  return total;
}


/**
 * Calculate the price of the total order, given individual orders
 *
 * (HINT: For this exercise, you can take a look at the supplied "global.d.ts" file
 * for a more info about the type definitions used)
 *
 * @param {PizzaOrder[]} pizzaOrders a list of pizza orders
 * @returns {number} the price of the total order
 */
export function orderPrice(orders) {
  let total = 0;

  // boucle sur toutes les pizzas de la commande
  for (const order of orders) {
    total += pizzaPrice(order.pizza, ...order.extras);
  }

  return total;
}
