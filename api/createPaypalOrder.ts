import type { VercelRequest, VercelResponse } from '@vercel/node';
import type Order from './Order';
import { paypalCreateOrder } from './_paypal';

export default async function handler(request: VercelRequest, response: VercelResponse) {
  const { productDescription, shortDescription, totalPrice }: Partial<Order> = request.body;

  if (request.method !== 'POST') {
    response.status(404);
    return;
  }

  if (!productDescription) {
    response.status(400).send('Expected body to contain productDescription, but none provided.');
  } else if (!shortDescription) {
    response.status(400).send('Expected body to contain shortDescription, but none provided.');
  } else if (!totalPrice) {
    response.status(400).send('Expected body to contain totalPrice, but none provided.');
  } else {
    try {
      const paypalResponse = await paypalCreateOrder({ productDescription, shortDescription, totalPrice });

      if (paypalResponse.ok) {
        response.status(200).json({
          orderId: paypalResponse.id,
        });
      } else {
        throw new Error(`PayPal returned ${paypalResponse.statusCode} ${paypalResponse.statusMessage}`);
      }
    } catch (err) {
      response.status(500).send(`Internal server error. ${err}`);
    }
  }
}
