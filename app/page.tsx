import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div>
        <h2>Welcome to the Product Jam</h2>
        <Image
          src="/huji.svg"
          alt="HUJI Logo"
          width="80"
          height="80"
          priority
        />
        <Image
          src="/bezalel.svg"
          alt="Bezalel Logo"
          className="item"
          width="80"
          height="80"
          priority
        />
      </div>
    </main>
  );
}
