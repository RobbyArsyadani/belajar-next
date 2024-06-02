import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <div>
        <nav className="navbar flex gap-3 text-5xl text-[#5e1e6e] ml-10 mt-10">
          <Link className="home hover:underline" href={"/"}>
            Home
          </Link>
          <Link className="about hover:underline" href={"/about"}>
            About
          </Link>
        </nav>
      </div>
    </div>
  );
}
