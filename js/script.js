"use strict";

// - `subtotal` with an initial value of $50.
// - `shipping` with an initial value of $10.
// - `quantity` with an initial value of 3.

let subtotal = 50;
let shipping = 10;
let quantity = 3;

// 6. Use the `+=` operator to add $20 to the `subtotal`.

subtotal += 20;

// 7. Calculate the total excluding tax (`totalExclusivTax`) as `(quantity * subtotal) + shipping`.

let totalExclusivTax = (quantity * subtotal) + shipping;

// 8. Apply a 25% tax using the formula `totalInclusivTax = totalExclusivTax * 1.25`.

let totalInclusivTax = totalExclusivTax * 1.25;

// 9. Use document.getElementById to select the subtotal, shipping, and total spans from the HTML. Assign these elements to variables for later use in updating the displayed values.

let subtotalElement = document.getElementById("subtotal");
let shippingElement = document.getElementById("shipping");
let totalElement = document.getElementById("total");

// 10. Dynamically update the HTML content to display the calculated values: - `subtotal`, `shipping`, and `totalInclusivTax`.

subtotalElement.textContent = `${subtotal}`;
shippingElement.textContent = `${shipping}`;
totalElement.textContent = `${totalInclusivTax}`;

// 11. Use `console.log` to log the calculated values (`subtotal`, `shipping`, and `totalInclusivTax`) for debugging purposes.

console.log(`Subtotal: ${subtotal}`);
console.log(`Shipping: ${shipping}`);
console.log(`Total: ${totalInclusivTax}`);

// 12. Open Go Live in your VS Code editor and check that the content has been updated.