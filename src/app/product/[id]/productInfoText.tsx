export default function ProductInfoText() {
  return (
    <div className="flex flex-col pt-6 pb-12">
      <h2 className="font-roboto font-medium text-2xl">Product Name</h2>
      <div className="flex flex-row justify-between">
        {" "}
        <h4 className="font-garamond text-xl">$00</h4>
        <div className="flex flex-row">
          {/* to add share icon */}
          <h4 className="font-garamond text-lg">Share</h4>
        </div>
      </div>
      <p className="font-garamond text-lg pt-4">
        Noguchi&rsquo;s rose marble sculpture “The Void” was an early
        inspiration for this recurring portal shape in our design.
      </p>
      <p className="font-garamond text-lg pt-4">
        {" "}
        All earrings sold in pairs. DM me @lucha.luchita to customize in a color
        to your liking.{" "}
      </p>
    </div>
  );
}
