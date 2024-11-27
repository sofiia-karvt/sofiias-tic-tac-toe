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
        <div>
          <h2>Links To Apps:</h2>
            <a href="/tic-tac-toe"><h3>Tic-Tac-Toe</h3></a>
            
            <a href="/nasa"><h3>Nasa API</h3></a>
            
            <a href="/design"><h3>Color Wheel</h3></a>
        </div>
      </div>
    </main>
  );
}
