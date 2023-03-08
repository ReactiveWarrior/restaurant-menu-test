"use strict";

type Category = "Vegetarian" | "Vegan";
type Allergen = "Milk" | "Wheat" | "Pumpkin" | "Seafood" | "Egg";

interface MenuItem {
  name: string;
  image: string;
  description: string;
  categories?: Category[];
  allergens?: Allergen[];
}

const menu: MenuItem[] = [
  {
    name: "Beefsteak",
    image: "./images/beefsteak.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
  },
  {
    name: "Steak with chips",
    image: "./images/steak-with-chips.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
  },

  {
    name: "Chicken stroganoff",
    image: "./images/chicken-stroganoff.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    allergens: ["Milk", "Wheat"],
  },
  {
    name: "Chicken with spinach",
    image: "./images/chicken-with-spinach.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
  },
  {
    name: "Chicken with pumpkin",
    image: "./images/chicken-with-pumpkin.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    allergens: ["Pumpkin"],
  },
  {
    name: "Pasta with prawns",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    allergens: ["Seafood", "Wheat"],
  },
  {
    name: "Carbonara",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    allergens: ["Wheat", "Egg", "Milk"],
  },
  {
    name: "Pumpkin pasta",
    image: "./images/pumpkin-pasta.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian", "Vegan"],
    allergens: ["Pumpkin", "Wheat"],
  },
  {
    name: "Spinach and ricotta",
    image: "./images/spinach-and-richotta.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian"],
    allergens: ["Milk"],
  },
  {
    name: "Purple basil pesto",
    image: "./images/purple-basil-pesto.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian"],
    allergens: ["Milk"],
  },
  {
    name: "Spinach salad",
    image: "./images/spinach-salad.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian", "Vegan"],
  },
  {
    name: "Pumpkin soup",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian", "Vegan"],
    allergens: ["Pumpkin"],
  },
  {
    name: "Chicken soup",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
  },
  {
    name: "Grilled romaine",
    image: "",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian", "Vegan"],
  },
  {
    name: "Americano",
    image: "./images/americano.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian", "Vegan"],
  },
  {
    name: "Capuccino",
    image: "./images/capuccino.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian"],
    allergens: ["Milk"],
  },
  {
    name: "Iced tea",
    image: "./images/iced-tea.webp",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian", "Vegan"],
  },
  {
    name: "Orange juice",
    image: "./images/orange-juice.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian", "Vegan"],
  },
  {
    name: "Strawberry juice",
    image: "./images/strawberry-juice.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian", "Vegan"],
  },
  {
    name: "Lemonade",
    image: "./images/lemonaide.jpg",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    categories: ["Vegetarian", "Vegan"],
  },
];

// utils
const getAllergensFilteredMenu = (menu: MenuItem[]) => {
  const allergens = Array.from(document.querySelectorAll(".allergen"));
  // @ts-ignore
  const excludedAllergens: Allergen[] = allergens
    .filter(
      // @ts-ignore
      (allergen) => allergen.checked
    )
    // @ts-ignore
    .map((excludedAllergen) => excludedAllergen.name);

  const allergensFilteredMenu = menu.filter((item) => {
    if (!item.allergens) {
      return true;
    }
    const hasExcludedAllergen = item.allergens.some((allergen) =>
      excludedAllergens.includes(allergen)
    );
    return !hasExcludedAllergen;
  });

  return allergensFilteredMenu;
};

const getMenuByCategory = (menu: MenuItem[]) => {
  const activeCategoryEl = document.querySelector(".category_active");
  if (!activeCategoryEl) {
    return;
  }
  const activeCategory = activeCategoryEl.innerHTML;

  if (activeCategory === "All") {
    return menu;
  }

  const menuByCategory = menu.filter((item) =>
    // @ts-ignore
    item.categories?.includes(activeCategory)
  );

  return menuByCategory;
};

const getSearchedMenu = (menu: MenuItem[]) => {
  const searchEl = document.getElementById("search");
  if (!searchEl) {
    return;
  }
  // @ts-ignore
  const searchedValue = searchEl.value;
  const searchedMenu = menu.filter((item) =>
    item.name.toLowerCase().includes(searchedValue.toLowerCase())
  );
  return searchedMenu;
};

const renderMenu = (menu: MenuItem[]) => {
  const cardsWrapper = document.querySelector(".cards-wrapper");
  if (!cardsWrapper) {
    return;
  }
  cardsWrapper.innerHTML = "";
  menu.forEach((item) =>
    cardsWrapper.insertAdjacentHTML(
      "beforeend",
      `<div class="card">
        <div class="card__img-wrapper">
          <img
            src="${item.image}"
            alt="${item.name}"
            class="card__img"
            width="320"
            height="200"
          />
        </div>
        <div class="card__body">
          <h4 class="card__title">${item.name}</h4>
          <p>${item.description}</p>
        </div>
      </div>`
    )
  );
};
// ------------
renderMenu(menu); // init render

// handling search
const searchInput = document.getElementById("search");

const handleSearchChange = (e) => {
  const menuByCategory = getMenuByCategory(menu);
  if (!menuByCategory) {
    return;
  }
  const currentMenu = getAllergensFilteredMenu(menuByCategory);

  const searchedMenu = currentMenu.filter((item) =>
    item.name.toLowerCase().includes(e.target.value.toLowerCase())
  );
  renderMenu(searchedMenu);
};

searchInput?.addEventListener("input", handleSearchChange);

// handling catgory change
const categoriesWrapper = document.querySelector(".categories");

const handleCategoryChange = (e) => {
  if (!categoriesWrapper?.children) {
    return;
  }
  const categories = Array.from(categoriesWrapper.children);
  const isTargetCategory = categories.some((category) => category === e.target);
  if (!isTargetCategory) {
    return;
  }

  categories.forEach((category) =>
    category.classList.remove("category_active")
  );
  e.target.classList.add("category_active");

  const searchedMenu = getSearchedMenu(menu);
  if (!searchedMenu) {
    return;
  }
  const currentMenu = getAllergensFilteredMenu(searchedMenu);

  if (e.target.innerText === "All") {
    return renderMenu(currentMenu);
  }

  const menuByCategory = currentMenu.filter((item) =>
    item.categories?.includes(e.target.innerText)
  );
  renderMenu(menuByCategory);
};

categoriesWrapper?.addEventListener("click", handleCategoryChange);

// handling allergen exclude
const allergens = document.querySelector(".allergens");

const handleAllergenChange = (e) => {
  const allergens = Array.from(document.querySelectorAll(".allergen"));
  // @ts-ignore
  const excludedAllergens: Allergen[] = allergens
    .filter(
      // @ts-ignore
      (allergen) => allergen.checked
    )
    // @ts-ignore
    .map((excludedAllergen) => excludedAllergen.name);

  const menuByCategory = getMenuByCategory(menu);
  if (!menuByCategory) {
    return;
  }
  const currentMenu = getSearchedMenu(menuByCategory);
  if (!currentMenu) {
    return;
  }

  const allergensFilteredMenu = currentMenu.filter((item) => {
    if (!item.allergens) {
      return true;
    }
    const hasExcludedAllergen = item.allergens.some((allergen) =>
      excludedAllergens.includes(allergen)
    );
    return !hasExcludedAllergen;
  });

  renderMenu(allergensFilteredMenu);
};

allergens?.addEventListener("change", handleAllergenChange);

// scrollToTop logic
const scrollToTopBtn = document.querySelector(".scrollToTop");

const handleDisplayScrollToTop = () => {
  if (!scrollToTopBtn) {
    return;
  }
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    // @ts-ignore
    scrollToTopBtn.style.display = "flex";
  } else {
    // @ts-ignore
    scrollToTopBtn.style.display = "none";
  }
};

const handleScrollToTop = () => {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
};

window.addEventListener("scroll", handleDisplayScrollToTop);
scrollToTopBtn?.addEventListener("click", handleScrollToTop);
