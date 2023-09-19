export default function Video() {
  return (
    <section className="h-videoHeight relative">
      <div className="bg-video absolute top-0 left-0 h-full border-t-[1px] border-b-[1px] w-full border-black">
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
        <div className="flex flex-col items-center justify-center h-full gap-[1.3vw]">
          <p className="text-[1.38vw] leading-5">DEBUT DELIVERY</p>
          <p className="text-[2.78vw]">
            <strong className="font-normal">SPRING/SUMMER ‘23</strong>
          </p>
        </div>
      </div>
    </section>
  );
}
