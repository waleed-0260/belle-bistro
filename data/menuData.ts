export interface MenuItem {
  id: string;
  name: string;
  price: number;
  description: string;
  special?: boolean;
}

export interface MenuCategory {
  id: string;
  label: string;
  note?: string;
  imageUrl: string;
  items: MenuItem[];
}

export const menuCategories: MenuCategory[] = [
  {
    id: "appetizers",
    label: "Appetizers",
    note: "Per serving",
    imageUrl: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=200&q=80",
    items: [
      { id: "app-1", name: "French Fries", price: 499, description: "Potatoes, salt, served with garlic mayo" },
      { id: "app-2", name: "Loaded Fries", price: 999, description: "Fries, cheese sauce, ketchup, garlic mayo, spicy mayo, bbq, jalapeno & olives", special: true },
      { id: "app-3", name: "Chicken Strips", price: 899, description: "Boneless chicken, batter, served with spicy mayo" },
      { id: "app-4", name: "Dynamite Chicken", price: 849, description: "Boneless chicken, batter, served with dynamite sauce" },
      { id: "app-5", name: "Dynamite Prawns", price: 1849, description: "Prawns, batter, served with dynamite sauce", special: true },
      { id: "app-6", name: "Peri Peri Chili Bites", price: 899, description: "Green chili, mozzarella, cheddar cheese, breadcrum, served with spicy mayo sauce" },
      { id: "app-7", name: "Chicken Dumplings", price: 949, description: "Dough, minced, garlic, mushroom, carrot, green onion, served with japanese soya sauce" },
      { id: "app-8", name: "Chicken Tacos", price: 999, description: "Tacos bread, chicken, cabbage, carrot, served with tacos special sauce" },
      { id: "app-9", name: "Loaded Nachos", price: 949, description: "Tortilla chips, chilli garlic, onion, tomato, butt chilli, served with sour cream", special: true },
      { id: "app-10", name: "Fish & Chips", price: 1749, description: "Tortilla chips, chilli garlic, onion, tomato, butt chilli, served with sour cream" },
    ],
  },
  {
    id: "soups",
    label: "Soups",
    note: "Per serving — served with garlic bread",
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=200&q=80",
    items: [
      { id: "soup-1", name: "Hot & Sour Soup", price: 649, description: "Chicken wood ear, button mushrooms, egg, soy sauce, vinegar, chili sauce, white pepper garlic, chicken stock, cornflour, salt" },
      { id: "soup-2", name: "19-B Belle Special Soup", price: 999, description: "Chicken, prawns, egg, carrot, cabbage, spring onion, corn kernels, garlic & ginger, soy sauce, black pepper, chicken stock cornflour salt & vinegar", special: true },
      { id: "soup-3", name: "Corn Soup", price: 499, description: "Chicken, sweet corn, egg, chicken stock, cornflour, salt, white pepper, soy sauce (optional)" },
      { id: "soup-4", name: "Cream of Chicken", price: 599, description: "Chicken, butter, flour, milk / cream chicken stock, garlic, black pepper, salt" },
      { id: "soup-5", name: "Cream of Mushroom", price: 599, description: "Mushroom, butter, flour, milk / cream chicken stock, garlic, black pepper, salt" },
    ],
  },
  {
    id: "salads",
    label: "Salads",
    note: "Per serving",
    imageUrl: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=200&q=80",
    items: [
      { id: "salad-1", name: "Freekeh Chicken Salad", price: 899, description: "Grilled chicken, fresh apples, sliced lettuce leaves, mayo, fresh cream, black pepper, salt, lemon juice honey (optional)" },
      { id: "salad-2", name: "Caesar Salad", price: 1199, description: "Iceberg, grilled chicken, crouton, parmesan cheese, caesar dressing, garlic lemon, juice, olive oil, black pepper, salt" },
      { id: "salad-3", name: "Balsamic Salad", price: 1199, description: "Mixed iceberg, cherry tomatoes, cucumber, onion slices, olives, parmesan cheese, balsamic vinegar, olive oil, black pepper, salt" },
    ],
  },
  {
    id: "steakhouse",
    label: "Steakhouse",
    note: "Per serving — served with brown mushroom sauce, mashed & sauté vegetable",
    imageUrl: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=200&q=80",
    items: [
      { id: "steak-1", name: "Tomahawk", price: 4299, description: "Tomahawk beef, butter, garlic, fresh rosemary, olive oil, black pepper, salt" },
      { id: "steak-2", name: "T-bone", price: 3199, description: "T-bone beef, butter, garlic, thyme, olive oil, black pepper, salt" },
      { id: "steak-3", name: "Rib-eye", price: 2999, description: "Rib-eye beef, butter, garlic, fresh herbs, olive oil, black pepper, salt" },
      { id: "steak-4", name: "Belle Surf & Turf", price: 5399, description: "Tomahawk beef steak, butter, garlic, fresh herbs, olive oil, black pepper, salt. Served with black pepper sauce, jumbo prawn, bonemarrow, baked potato & baked garlic saute vegetable", special: true },
      { id: "steak-5", name: "Lamb Chops", price: 2799, description: "Juicy mutton chops marinated with new style juicy and grilled to perfection. Served with mash potato & saute vegetable" },
    ],
  },
  {
    id: "seafood",
    label: "Seafood",
    note: "Per serving — served with rice/mash potato, saute vegetable",
    imageUrl: "https://images.unsplash.com/photo-1519708227418-c8fd9a32b7a2?w=200&q=80",
    items: [
      { id: "sea-1", name: "Atlantic Lemon Sole Fish", price: 1999, description: "Grilled fish with spicy atlantic lemon sole sauce" },
      { id: "sea-2", name: "Sole Mediterranean Fish", price: 2049, description: "Fish in a creamy sauce with mild spices" },
      { id: "sea-3", name: "Belle Bistro Special Fish", price: 2250, description: "Pan-fried fish with creamy sauce" },
      { id: "sea-4", name: "Thai Red Snaper Fish", price: 1999, description: "Red snaper fish marinated in thai herbs, cooked to perfection, with a smoky & aromatic flavor" },
      { id: "sea-5", name: "Kalamata Fish", price: 2100, description: "Fish fillet, multi olives, cherry tomatoes, garlic, lemon juice, olive oil, oregano, fresh herbs, black pepper, salt" },
      { id: "sea-6", name: "Jambo Prawns", price: 2349, description: "Grill jumbo prawns, garlic, butter, lemon juice, olive oil, fresh herbs, chilli flakes, black pepper, salt" },
    ],
  },
  {
    id: "chinese-thai",
    label: "Chinese & Thai",
    note: "Per serving — served with vegetable rice",
    imageUrl: "https://images.unsplash.com/photo-1563245372-f21724e3856d?w=200&q=80",
    items: [
      { id: "ct-1", name: "Chicken Chowmein", price: 1299, description: "Egg noodles, chicken strips, capsicum, carrot, cabbage, spring onions, garlic, soy sauce, vinegar, black pepper, salt" },
      { id: "ct-2", name: "Thai Basil Chicken", price: 1399, description: "Chicken strips, fresh basil, leaves, garlic, green chilies, soy sauce, oyster sauce, fish sauce, sugar, black pepper" },
      { id: "ct-3", name: "Shashlik Chicken", price: 1699, description: "Chicken cubes, capsicum, onion, tomato, garlic, ginger, soy sauce, chili sauce, vinegar, black pepper, salt" },
      { id: "ct-4", name: "Cashew Nut Chicken", price: 1699, description: "Chicken cubes, cashew nuts, capsicum, onion, garlic, soy sauce, oyster sauce, black pepper, salt" },
      { id: "ct-5", name: "Manchurian", price: 1699, description: "Chicken cubes, cornflour, garlic, ginger, soy sauce, chili sauce, tomato ketchup, vinegar, spring onions, black pepper, salt" },
      { id: "ct-6", name: "Beef Chilli Dry", price: 1699, description: "Beef strips, chilies, garlic, soya sauce, vinegar, chili sauce, black pepper, salt, oil" },
      { id: "ct-7", name: "Chicken Chilli Dry", price: 1699, description: "Chicken strips, chilies, garlic, soya sauce, vinegar, chili sauce, black pepper, salt, oil" },
    ],
  },
  {
    id: "pasta",
    label: "Pasta",
    note: "Per serving — served with garlic bread",
    imageUrl: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=200&q=80",
    items: [
      { id: "pasta-1", name: "Alfredo Pasta", price: 1349, description: "Fettuccine pasta, grilled chicken, butter, fresh cream, garlic, parmesan cheese, black pepper, salt" },
      { id: "pasta-2", name: "Penne Jalapeno Pasta", price: 1249, description: "Penne pasta, grilled chicken, jalapeño slices, onion, garlic, fresh cream, tomato sauce, black pepper, salt, butter" },
      { id: "pasta-3", name: "Mac & Cheese Pasta", price: 1449, description: "Macaroni pasta, cheddar, mozzarella cheese, milk, butter, flour, black pepper, salt. Served with fried chicken with spicy pan sauce" },
      { id: "pasta-4", name: "Chicken Lasagna", price: 1949, description: "Lasagna sheets, minced chicken, tomato sauce, onion, jalapeno sauce, garlic, mozzarella, cheddar cheese, oregano, black pepper, salt, butter", special: true },
    ],
  },
  {
    id: "main-course",
    label: "Main Course",
    note: "Per serving — served with sauce, rice/mash potato, saute vegetable",
    imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=200&q=80",
    items: [
      { id: "main-1", name: "Parmesan Chicken", price: 1749, description: "Chicken breast, parmesan cheese, bread crumbs, garlic, tomato sauce, olive oil, black pepper, salt" },
      { id: "main-2", name: "Three Cheese Chicken", price: 1899, description: "Chicken breast, mozzarella, cheddar & parmesan cheese, fresh cream, garlic, black pepper, salt", special: true },
      { id: "main-3", name: "Swiss Moroccan Stuffed Chicken", price: 2099, description: "Chicken breast (rolled) stuffing with spanish mozzarella, cheddar & parmesan cheese, fresh cream, garlic, black pepper, salt, bread crum", special: true },
      { id: "main-4", name: "Roulade Stuffed Chicken", price: 2499, description: "Chicken (rolled) stuffing cheese, multi capsicum, capper, mushrooms, olives, herbs, garlic, butter, black pepper, salt, bread crum" },
      { id: "main-5", name: "Stuffed Chicken", price: 2499, description: "Chicken breast, cheese, multi capsicum, capper, mushrooms, garlic, herbs, butter, black pepper, salt", special: true },
      { id: "main-6", name: "Kalamata Olive Chicken", price: 1799, description: "Chicken breast, stuffing with spanish mozzarella, cheddar & parmesan cheese, fresh cream, garlic, black pepper, salt, bread crum" },
      { id: "main-7", name: "Moroccan Chicken", price: 1999, description: "Grilled chicken, moroccan spices, garlic, lemon juice, butter, fresh black pepper, salt" },
      { id: "main-8", name: "Tarragon Chicken", price: 1849, description: "Chicken fillet, fresh cream, tarragon herb, garlic, butter, black pepper, salt" },
      { id: "main-9", name: "Picata De Polo Chicken", price: 1849, description: "Chicken breast, lemon juice, tomato sauce, cream, capers, butter, garlic, chicken stock, butter, black pepper, salt, black olives" },
      { id: "main-10", name: "Honey Mustard Chicken", price: 1849, description: "Chicken breast, honey, mustard sauce, garlic, lemon juice, butter, black pepper, salt" },
      { id: "main-11", name: "Bearnaise Chicken", price: 1899, description: "Chicken breast, mustard sauce, white sauce, herbs butter, tarragon, vinegar, black pepper, salt" },
      { id: "main-12", name: "Chipotle Chicken", price: 2199, description: "Chicken breast, chipotle sauce, garlic, lemon juice, butter, paprika, black pepper, salt", special: true },
    ],
  },
  {
    id: "wings",
    label: "Wings",
    note: "Per serving",
    imageUrl: "https://images.unsplash.com/photo-1567620832903-9fc6debc209f?w=200&q=80",
    items: [
      { id: "wing-1", name: "Belle Special Wings", price: 1299, description: "Wings, belle special bbq sauce, sesame seed", special: true },
      { id: "wing-2", name: "Spicy Wings", price: 999, description: "Wings, spicy sauce, sesame seed" },
      { id: "wing-3", name: "Honey Wings", price: 999, description: "Wings, honey spicy sauce, sesame seed" },
    ],
  },
  {
    id: "desserts",
    label: "Desserts",
    note: "Per serving",
    imageUrl: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=200&q=80",
    items: [
      { id: "dessert-1", name: "Molten Lava Cake", price: 649, description: "Rich chocolate cake with a gooey molten center, served with ice cream" },
      { id: "dessert-2", name: "Sizzling Brownie", price: 599, description: "Hot chocolate brownie served on a sizzling plate, topped with ice cream and drizzled with molten chocolate sauce" },
    ],
  },
];

export const featuredDishes = [
  {
    id: "feat-1",
    name: "Belle Surf & Turf",
    price: 5399,
    imageUrl: "https://images.unsplash.com/photo-1600891964092-4316c288032e?w=600&q=80",
    description: "Tomahawk beef steak with jumbo prawn, bonemarrow, baked potato & garlic sauté vegetables.",
  },
  {
    id: "feat-2",
    name: "19-B Belle Special Soup",
    price: 999,
    imageUrl: "https://images.unsplash.com/photo-1547592166-23ac45744acd?w=600&q=80",
    description: "Chicken, prawns, egg & vegetables in a rich, aromatic broth — our signature starter.",
  },
  {
    id: "feat-3",
    name: "Stuffed Chicken",
    price: 2499,
    imageUrl: "https://images.unsplash.com/photo-1598103442097-8b74394b95c3?w=600&q=80",
    description: "Chicken breast stuffed with cheese, capsicum, mushrooms, olives & herbs.",
  },
  {
    id: "feat-4",
    name: "Loaded Fries",
    price: 999,
    imageUrl: "https://images.unsplash.com/photo-1541014741259-de529411b96a?w=600&q=80",
    description: "Crispy fries loaded with cheese sauce, bbq, jalapeño & olives — a crowd favorite.",
  },
];

export const allMenuItems = menuCategories.flatMap((cat) => cat.items);
