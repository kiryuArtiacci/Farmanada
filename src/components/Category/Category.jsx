import React from "react";
import imagen2 from "../../assets/Loratadina.png";

const Category = () => {
  return (
    <div className="py-8">
      <div className="container">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Primera Columna */}
          <div className="relative flex h-[320px] items-end rounded-3xl bg-gradient-to-br from-slate-300 to-slate-500 py-10 pl-5 text-white">
            <div>
              <div className="mb-4">
                <p>Disfruta</p>
                <p>nose w</p>
                <p>Placeholder momento</p>
              </div>
            </div>
            <img src={imagen2} alt="" className="absolute top-5 w-[200px]" />
          </div>
          {/* Segunda Columna  */}
          <div className="relative flex h-[320px] items-end rounded-3xl bg-gradient-to-br from-slate-300 to-slate-500 py-10 pl-5 text-white">
            <div>
              <div className="mb-4">
                <p>Disfruta</p>
                <p>nose w</p>
                <p>Placeholder momento</p>
              </div>
            </div>
            <img src={imagen2} alt="" className="absolute top-5 w-[200px]" />
          </div>
          {/* Tercera Columna  */}
        </div>
      </div>
    </div>
  );
};

export default Category;
