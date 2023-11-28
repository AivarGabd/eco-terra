"use client";

const menuItems = [
  "ППЖ",
  "Экологический консалтинг",
  "Услуги",
  "Преимущество",
  "Клиеты",
  "Контакты",
];

function CustomNavbar() {
  const linkClick = (index: number) => {
    let target: HTMLElement = document.getElementById(`section-${index}`)!;
    if (!target) return;
    target.scrollIntoView();
  };

  return (
    <div className="fixed m-auto top-5 left-0 right-0 bg-white w-fit p-3 rounded-lg flex gap-5 z-10 flex-row align-bottom">
      <div className="font-bold text-xl">Эко-Терра</div>
      <div className="flex gap-1">
        {menuItems.map((x, index) => (
          <button
            className="hover:bg-gray-100 rounded-lg py-1 px-1.5 transition-all"
            key={x}
            onClick={() => linkClick(index)}
          >
            {x}
          </button>
        ))}
      </div>
      <div className="flex h-full align-middle text-center m-auto ">
        <a href="tel:+ 7 (800) 555-14-08" className="font-semibold mb-auto">
          + 7 (800) 555-14-08
        </a>
      </div>
    </div>
  );
}

/**
 *
 */
export default CustomNavbar;
