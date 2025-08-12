//Navbar Components .....
export default function Navbar() {
  return (
    <div>
      <nav style={{ background: "#333", color: "#fff", padding: "10px" }}>
        Fable Forge
      </nav>
      <div>
        <h1 className="text-2xl font-bold text-blue-600">Fable Forge</h1>
        <ul className="flex space-x-6 text-gray-700 font-medium">
          <li className="hover:text-blue-600 cursor pointer"> Home </li>
          <li className="hover:text-blue-600 cursor pointer"> Browse </li>
          <li className="hover:text-blue-600 cursor pointer"> Account </li>
        </ul>
      </div>
    </div>
  );
}
