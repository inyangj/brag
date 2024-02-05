import React from "react";

function Nav() {
  const menu = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "Review",
    },
    {
      id: 3,
      name: "Add Business",
    },
    {
      id: 4,
      name: "Profile",
    },
  ];
  return (
    <header className="sticky top-0 bg-white">
      <div className="flex justify-between px-[114px] py-[20px] border-b-[1px]">
        <div className="text-[#095EDC] font-bold text-[20px] ">BRAG</div>
        <div className="hidden md:flex gap-10">
          {menu.map((item, index) => (
            <div
              key={index}
              className="cursor-pointer  hover:underline font-medium "
            >
              <h2>{item.name}</h2>
            </div>
          ))}
        </div>
      </div>
    </header>
  );
}

export default Nav;
