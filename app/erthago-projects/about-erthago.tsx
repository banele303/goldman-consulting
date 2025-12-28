import Image from "next/image";

export default function AboutErthago() {
  return (
    <div className="mx-auto px-[2rem] py-8">
      <h1 className="text-2xl md:text-4xl font-bold text-center mb-2">
        Erthago Projects
      </h1>
      <div className="w-24 h-1 bg-green-600 mx-auto mb-6"></div>

      <p className="text-[18px] mb-12 text-center">
        Welcome to Ernthego Projects a subsidiary of Goldman Holding, your Partner in the Construction Industry.
        <br/><br/>
        We are a leading construction company specializing in General Building and specialized construction services. With a commitment to quality and excellence, we deliver superior results tailored to your specific needs.
      </p>

      <h2 className="text-2xl font-bold mb-4">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        <div className="p-4 border rounded-lg shadow">
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/consulting/const-hero.jpeg"
              alt="General Building"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">General Building</h3>
          <ul className="list-disc list-inside">
            <li>Brickwork</li>
            <li>Plastering</li>
            <li>Painting</li>
            <li>Plumbing</li>
            <li>Roofing</li>
            <li>Paving</li>
            <li>Ceiling</li>
            <li>Partition</li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg shadow">
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/environ/alumin.jpeg"
              alt="Aluminium Services"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Aluminium</h3>
          <ul className="list-disc list-inside">
            <li>Shopfront</li>
            <li>Folding Door</li>
            <li>Pivot Doors</li>
            <li>Sliding Doors</li>
            <li>Trellidor</li>
            <li>Glass Partition</li>
            <li>Garage Doors</li>
            <li>Aluminium Windows</li>
          </ul>
        </div>

        <div className="p-4 border rounded-lg shadow">
          <div className="w-full h-48 mb-4 overflow-hidden rounded-lg">
            <Image
              src="/consulting/hero-interior.jpeg"
              alt="Flooring"
              width={400}
              height={300}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-xl font-bold mb-2">Flooring</h3>
          <ul className="list-disc list-inside">
            <li>Vinyl Flooring</li>
            <li>Epoxy Flooring</li>
            <li>Carpet Flooring</li>
            <li>Laminate Flooring</li>
            <li>Rubber Flooring</li>
            <li>Concrete Flooring</li>
            <li>Seamless Flooring</li>
            <li>Artificial Grass Flooring</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
