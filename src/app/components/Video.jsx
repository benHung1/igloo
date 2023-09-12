export default function Video() {
  return (
    <section className="h-videoHeight relative border-[1px] border-black">
      <div className="bg-video absolute top-0 left-0 h-full bg-red-200 w-full ">
        <video
          preload="true"
          loop
          muted
          playsInline
          autoPlay
          className="h-full w-full object-cover"
        >
          <source
            src="https://cdn.shopify.com/videos/c/o/v/94b7b181674946eeb253c48015783fd8.mp4"
            type=""
          />
        </video>
      </div>

      <div className="relative h-full">
        <div className="flex flex-col items-center justify-center h-full">
          <p>DEBUT DELIVERY</p>
          <p className="text-3xl">
            <strong>SPRING/SUMMER ‘23</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
