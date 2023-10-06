import Link from "next/link";

export default function Login() {
  return (
    <>
      <section className="pt-32 pb-60 min-h-screen">
        <main className="flex flex-col items-center gap-4">
          <h2 className="text-2xl mb-6">SIGN IN</h2>

          <form action="#" className="w-[340px] flex flex-col gap-6">
            <input type="account" placeholder="EMAIL" />
            <input type="password" placeholder="PASSWORD" />
            <button className="btn w-full">SIGN IN</button>
          </form>

          <div className="flex flex-col items-center">
            <Link href="#">CREATE ACCOUNT</Link>
            <button>FORGOT YOUR PASSWORD?</button>
          </div>
        </main>
      </section>
    </>
  );
}
