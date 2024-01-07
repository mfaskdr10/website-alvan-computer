import { NavLink } from "react-router-dom";

const FooterComp = () => {
  return (
    <>
      <div className="w-full bg-slate-900 text-white md:px-20 md:py-20 px-5 py-10">
        <div className="mb-20">
          <NavLink to="/" className="font-bold text-4xl">
            Alvan Computer.
          </NavLink>
        </div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col">
            <span>Alamat:</span>
            <span className="mb-10">
              Jl. Joyoboyo 1 No. 41 Dusun Tepus
              <br /> Desa Sukorejo Kecamatan Ngasem
              <br /> Kabupaten Kediri 64182
              <br /> Jawa Timur, Indonesia
            </span>
            <span>Hari dan Jam Kerja:</span>
            <span>Senin-Minggu: 06.00 - 20.30</span>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col">
              <span>Telepon</span>
              <span>+6289517265058</span>
            </div>
            <div className="flex flex-col">
              <span>Whatsapp</span>
              <span>+6285235051966</span>
            </div>
            <div className="flex flex-col">
              <span>Email</span>
              <span>alcomkdr2824@gmail.com</span>
            </div>
          </div>
          <div className="flex flex-col">
            <span>Layanan Kami:</span>
            <span>Print</span>
            <span>Pengetikan</span>
            <span>Scan</span>
          </div>
          <div className="flex flex-col">
            <span>Layanan Kami:</span>
            <span>Print</span>
            <span>Pengetikan</span>
            <span>Scan</span>
          </div>
          <div className="flex flex-col">
            <span>Layanan Kami:</span>
            <span>Print</span>
            <span>Pengetikan</span>
            <span>Scan</span>
          </div>
        </div>
        <div className="text-center mt-20">
          <p className="">Alvan Computer. 2024. All rights reserved.</p>
        </div>
      </div>
    </>
  );
};

export default FooterComp;
