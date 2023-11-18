import { NextRequest, NextResponse } from "next/server";
import { headers } from "next/headers";
// import {CartItem} from "@/types/type";

import getStripe from "@/utils/getStripe";
import { CartItem } from "@/interfaces";
import { useStripe } from "@stripe/react-stripe-js";

export async function POST(req: NextRequest, res: NextResponse) {
  const headersList = headers();
  const { cartDetails } = await req.json();
  // const cartDetailsArray: CartItem[] = Object.values(cartDetails) as CartItem[];

  // const lineItems = cartDetailsArray.map((item: CartItem) => {
  // return {
  //     price_data: {
  //         currency: item.currency,
  //         product_data: {
  //             name: item.name,
  //         },
  //         unit_amount: item.price,
  //     },
  //     quantity: item.quantity,
  // };
  // });

  // const stripe = await getStripe();

  try {
    const session = await stripe?.checkout.sessions.create({
      payment_method_types: ["card"],
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Universe",
            },
            unit_amount: 38,
          },
          quantity: 1,
        },
      ], //change to proper productRecord items later
      mode: "payment",
      success_url: `${headersList.get("origin")}/profile`,
      cancel_url: `${headersList.get("origin")}/`,
    });

    // return NextResponse.json({ sessionId: session.id });
    // return NextResponse.json({
    //   sessionId: session.id,
    //   url: session.url,
    //   session: session,
    // });
    return NextResponse.json({ hello: "world" });
  } catch (err) {
    return NextResponse.json({ error: err });
  }
}

// import getStripe from "@/utils/getStripe";
// import { Stripe } from "@stripe/stripe-js";
// import { NextApiRequest, NextApiResponse } from "next";
// import {headers} from "next/headers";
// import { NextResponse } from "next/server";

// //const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// export const runtime = "edge";

// // const cors = Cors({
// //   methods: ["POST", "GET", "OPTIONS"],
// // });

// //const stripe = getStripe().then((stripe)=> {return stripe});

// async function handler(req: NextApiRequest, res: NextApiResponse) {
//   console.log("checkout sessions", req);
//   if (req.method === "POST") {
//     try {

//       let stripe = await getStripe();

//       // Create Checkout Sessions from body params.
//       const session = await stripe!.checkout.sessions.create({
//         line_items: [
//           {
//             // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//             price: "{{PRICE_ID}}",
//             quantity: 1,
//           },
//         ],
//         mode: "payment",
//         success_url: `${req.headers.origin}/?success=true`,
//         cancel_url: `${req.headers.origin}/?canceled=true`,
//         automatic_tax: { enabled: true },
//       });
//       res.redirect(303, session.url);
//     } catch (err) {
//       console.error(err);
//       //res.status(500).json({ error: err });
//     }
//   } else {
//     res.setHeader("Allow", "POST");
//     res.status(405).end("Method Not Allowed");
//   }
// }

// export { handler as POST };
