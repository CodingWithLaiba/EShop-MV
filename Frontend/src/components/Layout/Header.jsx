import { Link } from "react-router-dom";
import styles from "../../styles/styles";
import { AiOutlineHeart, AiOutlineSearch, AiOutlineShoppingCart } from "react-icons/ai";
import { IoIosArrowForward } from "react-icons/io";
import { BiMenuAltLeft } from "react-icons/bi";
import { useState } from "react";
import { categoriesData, productData } from "../../static/data";
import { IoIosArrowDown } from "react-icons/io";
import DropDown from "./DropDown";
import Navbar from "./Navbar";
import { CgProfile } from "react-icons/cg";

export default function Header({ activeHeading }) {
  const [searchTerm, setSearchTerm] = useState("");
  const [searchData, setSearchData] = useState(null);
  const [active, setActive] = useState(false);
  const [dropDown, setDropDown] = useState(false);

  const handleSearchChange = (e) => {
    const term = e.target.value;
    setSearchTerm(term);

    const filteredProducts = productData?.filter((product) =>
      product.name.toLowerCase().includes(term.toLowerCase()),
    );

    setSearchData(term ? filteredProducts : null);
  };

  window.addEventListener("scroll", () => {
    if (window.scrollY > 70) {
      setActive(true);
    } else {
      setActive(false);
    }
  });

  return (
    <>
      <div className={`${styles.section} py-5`}>
        {/* fixed: was "hidden flex ..." which hides at every width.
            "hidden 800px:flex" hides on mobile, shows as flex at 800px+ */}
        <div className="hidden 800px:flex items-center justify-between gap-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/">
              <img
                src="https://shopo.quomodothemes.website/assets/images/logo.svg"
                alt="ShopO"
                className="w-[150px]"
              />
            </Link>
          </div>

          {/* Search Box */}
          <div className="relative flex-1 max-w-[600px]">
            <input
              type="text"
              placeholder="Search Product..."
              value={searchTerm}
              onChange={handleSearchChange}
              className="w-full h-[45px] px-4 pr-12 border-2 border-[#3957db] rounded-md outline-none focus:border-[#3957db]"
            />

            <AiOutlineSearch
              size={28}
              className="absolute right-3 top-[9px] cursor-pointer"
            />

            {searchData && searchData.length > 0 && (
              <div className="absolute left-0 top-[50px] w-full bg-white shadow-lg rounded-md z-50 p-3 max-h-[350px] overflow-y-auto">
                {searchData.map((item, index) => {
                  const productName = item.name.replace(/\s+/g, "-");
                  return (
                    <Link
                      to={`/product/${productName}`}
                      key={`${item.id}-${index}`}
                      onClick={() => {
                        setSearchData(null);
                        setSearchTerm("");
                      }}
                    >
                      <div className="w-full flex items-center py-3 px-2 hover:bg-gray-100 rounded-md">
                        <img
                          src={item.image_Url?.[0]?.url}
                          alt={item.name}
                          className="w-12 h-12 mr-3 object-contain"
                        />
                        <p className="text-sm text-gray-700">{item.name}</p>
                      </div>
                    </Link>
                  );
                })}
              </div>
            )}
          </div>

          {/* Become Seller Button */}
          <div className={`${styles.button} flex-shrink-0`}>
            <Link to="/seller">
              <h1 className="text-white flex items-center whitespace-nowrap">
                Become Seller
                <IoIosArrowForward className="ml-1" size={18} />
              </h1>
            </Link>
          </div>
        </div>
      </div>

      <div
        className={`${
          active === true ? "shadow-sm fixed top-0 left-0 z-10" : ""
        } transition hidden 800px:flex items-center justify-between w-full bg-[#3321c8] h-[70px]`}
      >
        <div className={`${styles.section} relative ${styles.noramlFlex} justify-between`}>
          {/* categories */}
          <div className="relative h-[60px] mt-[10px] w-[270px] hidden 1000px:block">
            <BiMenuAltLeft size={30} className="absolute top-3 left-2" />
            <button className="h-[100%] w-full flex justify-between items-center pl-10 bg-white font-sans text-lg font-[500] select-none rounded-t-md">
              All Categories
            </button>
            <IoIosArrowDown
              size={20}
              className="absolute right-2 top-4 cursor-pointer"
              onClick={() => setDropDown(!dropDown)}
            />
            {dropDown ? (
              <DropDown categoriesData={categoriesData} setDropDown={setDropDown} />
            ) : null}
          </div>
        </div>

        {/* navitems */}
        <div className={`${styles.noramlFlex}`}>
          <Navbar active={activeHeading} />
        </div>

        <div className="flex">
          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer mr-[15px]">
              <AiOutlineHeart size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                0
              </span>
            </div>
          </div>

          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer mr-[15px]">
              <AiOutlineShoppingCart size={30} color="rgb(255 255 255 / 83%)" />
              <span className="absolute right-0 top-0 rounded-full bg-[#3bc177] w-4 h-4 p-0 m-0 text-white font-mono text-[12px] leading-tight text-center">
                1
              </span>
            </div>
          </div>

          <div className={`${styles.noramlFlex}`}>
            <div className="relative cursor-pointer mr-[15px]">
              <Link to="/login">
                <CgProfile size={30} color="rgb(255 255 255 / 83%)" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}