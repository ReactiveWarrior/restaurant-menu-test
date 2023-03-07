"use strict";
const menu = [
    {
        name: "Beefsteak",
        image: "./images/beefsteak.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    },
    {
        name: "Steak with chips",
        image: "./images/steak-with-chips.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    },
    {
        name: "Chicken stroganoff",
        image: "./images/chicken-stroganoff.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        allergens: ["Milk", "Wheat"],
    },
    {
        name: "Chicken with spinach",
        image: "./images/chicken-with-spinach.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    },
    {
        name: "Chicken with pumpkin",
        image: "./images/chicken-with-pumpkin.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        allergens: ["Pumpkin"],
    },
    {
        name: "Pasta with prawns",
        image: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        allergens: ["Seafood", "Wheat"],
    },
    {
        name: "Carbonara",
        image: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        allergens: ["Wheat", "Egg", "Milk"],
    },
    {
        name: "Pumpkin pasta",
        image: "./images/pumpkin-pasta.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian", "Vegan"],
        allergens: ["Pumpkin", "Wheat"],
    },
    {
        name: "Spinach and ricotta",
        image: "./images/spinach-and-richotta.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian"],
        allergens: ["Milk"],
    },
    {
        name: "Purple basil pesto",
        image: "./images/purple-basil-pesto.webp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian"],
        allergens: ["Milk"],
    },
    {
        name: "Spinach salad",
        image: "./images/spinach-salad.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian", "Vegan"],
    },
    {
        name: "Pumpkin soup",
        image: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian", "Vegan"],
        allergens: ["Pumpkin"],
    },
    {
        name: "Chicken soup",
        image: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
    },
    {
        name: "Grilled romaine",
        image: "",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian", "Vegan"],
    },
    {
        name: "Americano",
        image: "./images/americano.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian", "Vegan"],
    },
    {
        name: "Capuccino",
        image: "./images/capuccino.webp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian"],
        allergens: ["Milk"],
    },
    {
        name: "Iced tea",
        image: "./images/iced-tea.webp",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian", "Vegan"],
    },
    {
        name: "Orange juice",
        image: "./images/orange-juice.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian", "Vegan"],
    },
    {
        name: "Strawberry juice",
        image: "./images/strawberry-juice.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian", "Vegan"],
    },
    {
        name: "Lemonade",
        image: "./images/lemonaide.jpg",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum itaque nam, distinctio quia magni possimus adipisci quod saepe aliquam debitis quis nihil nesciunt quidem quaerat dolore explicabo quasi ab nulla.",
        categories: ["Vegetarian", "Vegan"],
    },
];
let currentMenu = [...menu];
const getAllergensFilteredMenu = (menu) => {
    const allergens = Array.from(document.querySelectorAll(".allergen"));
    // @ts-ignore
    const excludedAllergens = allergens
        .filter(
    // @ts-ignore
    (allergen) => allergen.checked)
        // @ts-ignore
        .map((excludedAllergen) => excludedAllergen.name);
    const allergensFilteredMenu = menu.filter((item) => {
        if (!item.allergens) {
            return true;
        }
        const hasExcludedAllergen = item.allergens.some((allergen) => excludedAllergens.includes(allergen));
        return !hasExcludedAllergen;
    });
    return allergensFilteredMenu;
};
const getMenuByCategory = (menu) => {
    const activeCategoryEl = document.querySelector(".category_active");
    if (!activeCategoryEl) {
        return;
    }
    const activeCategory = activeCategoryEl.innerHTML;
    if (activeCategory === "All") {
        return menu;
    }
    const menuByCategory = menu.filter((item) => { var _a; 
    // @ts-ignore
    return (_a = item.categories) === null || _a === void 0 ? void 0 : _a.includes(activeCategory); });
    return menuByCategory;
};
const getSearchedMenu = (menu) => {
    const searchEl = document.getElementById("search");
    if (!searchEl) {
        return;
    }
    // @ts-ignore
    const searchedValue = searchEl.value;
    const searchedMenu = menu.filter((item) => item.name.toLowerCase().includes(searchedValue.toLowerCase()));
    return searchedMenu;
};
const cardsWrapper = document.querySelector(".cards-wrapper");
const renderMenu = (menu) => {
    if (!cardsWrapper) {
        return;
    }
    cardsWrapper.innerHTML = "";
    menu.forEach((item) => cardsWrapper === null || cardsWrapper === void 0 ? void 0 : cardsWrapper.insertAdjacentHTML("beforeend", `<div class="card">
        <img 
          src="${item.image}"
          alt="${item.name}" class="card__img"
          width="320"
          height="200"
        />
        <h4>${item.name}</h4>
        <p>${item.description}</p>
    </div>`));
};
renderMenu(menu);
const getCurrentMenuItems = () => {
    if (!cardsWrapper) {
        return;
    }
    const currentMenuItems = Array.from(cardsWrapper === null || cardsWrapper === void 0 ? void 0 : cardsWrapper.children);
    return currentMenuItems;
};
const searchInput = document.getElementById("search");
const handleSearchChange = (e) => {
    const menuByCategory = getMenuByCategory(menu);
    if (!menuByCategory) {
        return;
    }
    const currentMenu = getAllergensFilteredMenu(menuByCategory);
    const searchedMenu = currentMenu.filter((item) => item.name.toLowerCase().includes(e.target.value.toLowerCase()));
    renderMenu(searchedMenu);
};
searchInput === null || searchInput === void 0 ? void 0 : searchInput.addEventListener("input", handleSearchChange);
const categoriesWrapper = document.querySelector(".categories");
const handleCategoryChange = (e) => {
    if (!(categoriesWrapper === null || categoriesWrapper === void 0 ? void 0 : categoriesWrapper.children)) {
        return;
    }
    const categories = Array.from(categoriesWrapper === null || categoriesWrapper === void 0 ? void 0 : categoriesWrapper.children);
    const isTargetCategory = categories.some((category) => category === e.target);
    if (!isTargetCategory) {
        return;
    }
    categories.forEach((category) => category.classList.remove("category_active"));
    e.target.classList.add("category_active");
    const searchedMenu = getSearchedMenu(menu);
    if (!searchedMenu) {
        return;
    }
    const currentMenu = getAllergensFilteredMenu(searchedMenu);
    if (e.target.innerText === "All") {
        return renderMenu(currentMenu);
    }
    const menuByCategory = currentMenu.filter((item) => { var _a; return (_a = item.categories) === null || _a === void 0 ? void 0 : _a.includes(e.target.innerText); });
    renderMenu(menuByCategory);
};
categoriesWrapper === null || categoriesWrapper === void 0 ? void 0 : categoriesWrapper.addEventListener("click", handleCategoryChange);
const allergens = document.querySelector(".allergens");
const handleAllergenChange = (e) => {
    const allergens = Array.from(document.querySelectorAll(".allergen"));
    // @ts-ignore
    const excludedAllergens = allergens
        .filter(
    // @ts-ignore
    (allergen) => allergen.checked)
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
        const hasExcludedAllergen = item.allergens.some((allergen) => excludedAllergens.includes(allergen));
        return !hasExcludedAllergen;
    });
    renderMenu(allergensFilteredMenu);
};
allergens === null || allergens === void 0 ? void 0 : allergens.addEventListener("change", handleAllergenChange);
