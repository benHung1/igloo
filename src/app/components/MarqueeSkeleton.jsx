export default function MarqueeSkeleton() {
  return (
    <>
      <section className="pt-6 pb-12 relative flex items-center overflow-hidden">
        <div className="overflow-hidden flex">
          {Array(20)
            .fill(null)
            .map((__, index) => {
              return (
                <p
                  key={index}
                  className="text-3xl font-bold ml-72 animate-pulse text-transparent  bg-gray-300"
                >
                  @IGLOO
                </p>
              );
            })}
        </div>

        <div className="relative">
          {/* img */}
          <div className="overflow-hidden flex">
            {Array(20)
              .fill(null)
              .map((__, index) => {
                return (
                  <div
                    key={index}
                    className="mr-36 w-[300px] h-[300px] animate-pulse  bg-gray-300"
                  />
                );
              })}
          </div>
        </div>
      </section>
    </>
  );
}
