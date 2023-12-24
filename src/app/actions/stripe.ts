'use server'

import type { Stripe } from 'stripe'

import { redirect } from 'next/navigation'
import { headers } from 'next/headers'

import { formatAmountForStripe } from '@/utils/stripeHelpers'
import { stripe } from '@/lib/stripe'

export async function CreateCheckoutSession(data: FormData, lineItems: {}[]): Promise<void> {
  const checkoutSession: Stripe.Checkout.Session =
    await stripe.checkout.sessions.create({
      mode: 'payment',
      submit_type: 'pay',
      line_items: lineItems,
      success_url: `${headers().get(
        'origin'
      )}/cart/result?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${headers().get('origin')}/cart`,
    })

  redirect(checkoutSession.url as string)
}

// export async function createPaymentIntent(
//   data: FormData
// ): Promise<{ client_secret: string }> {
//   const paymentIntent: Stripe.PaymentIntent =
//     await stripe.paymentIntents.create({
//       amount: formatAmountForStripe(
//         Number(data.get('customDonation') as string),
//         'usd'
//       ),
//       automatic_payment_methods: { enabled: true },
//       currency: 'usd',
//     })

//   return { client_secret: paymentIntent.client_secret as string }
// }