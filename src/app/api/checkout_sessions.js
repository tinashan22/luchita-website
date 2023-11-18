// //const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);

// async function handler(req, res) {
//   console.log("checkout sessions js", req);
//   switch (req.method) {
//     case "POST":
//       try {
//         console.log("api POSTING");
//         // Create Checkout Sessions from body params.
//         const session = await stripe.checkout.sessions.create({
//           ui_mode: "embedded",
//           line_items: [
//             {
//               // Provide the exact Price ID (for example, pr_1234) of the product you want to sell
//               price: "{{PRICE_ID}}",
//               quantity: 1,
//             },
//           ],
//           mode: "payment",
//           return_url: `${req.headers.origin}/return?session_id={CHECKOUT_SESSION_ID}`,
//           automatic_tax: { enabled: true },
//         });

//         res.send({ clientSecret: session.client_secret });
//       } catch (err) {
//         res.status(err.statusCode || 500).json(err.message);
//       }
//     case "GET":
//       try {
//         const session = await stripe.checkout.sessions.retrieve(
//           req.query.session_id
//         );

//         res.send({
//           status: session.status,
//           customer_email: session.customer_details.email,
//         });
//       } catch (err) {
//         res.status(err.statusCode || 500).json(err.message);
//       }
//     default:
//       res.setHeader("Allow", req.method);
//       res.status(405).end("Method Not Allowed");
//   }
// }

// export { handler as POST };
