import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import istock from "../assets/homepage/istockphoto-941841640-612x612-removebg-preview.png";

const HomePage = () => {
  return (
    <>
      <header className="w-full min-h-screen flex justify-between md:px-24 items-center">
        <div>
          <h1 className="lg:text-7xl sm:text-2xl md:text-4xl font-bold mb-8 text-white">
            Solusi Cetak Mudah <br /> dan Cepat
          </h1>
          <p className="text-xl mb-5 text-white">
            Kami menydiakan segala jenis cetak dengan kualitas terbaik serta
            proses <br /> yang cepat dan pemesan yang mudah dapat membanti
            solusi cetak anda.
          </p>
          <button className="bg-green-900 text-white py-4 px-6 rounded-xl">
            <FontAwesomeIcon icon={faWhatsapp} size="xl" className="mr-2" />
            Hubungi Kami
          </button>
        </div>
        <div>
          <img src={istock} alt="homepage" className="w-[700px]" />
        </div>
      </header>
    </>
  );
};

export default HomePage;
