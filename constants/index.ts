export const sidebarLinks = [
  {
    imgURL: "/icons/home.svg",
    route: "/",
    label: "Home",
  },
  {
    imgURL: "/icons/dollar-circle.svg",
    route: "/my-banks",
    label: "My Banks",
  },
  {
    imgURL: "/icons/transaction.svg",
    route: "/transaction-history",
    label: "Transaction History",
  },
  {
    imgURL: "/icons/money-send.svg",
    route: "/payment-transfer",
    label: "Transfer Funds",
  },
];

// good_user / good_password - Bank of America
export const TEST_USER_ID = "6627ed3d00267aa6fa3e";

// custom_user -> Chase Bank
// export const TEST_ACCESS_TOKEN =
//   "access-sandbox-da44dac8-7d31-4f66-ab36-2238d63a3017";

// custom_user -> Chase Bank
export const TEST_ACCESS_TOKEN =
  "access-sandbox-229476cf-25bc-46d2-9ed5-fba9df7a5d63";

export const ITEMS = [
  {
    id: "6624c02e00367128945e", // appwrite item Id
    accessToken: "access-sandbox-83fd9200-0165-4ef8-afde-65744b9d1548",
    itemId: "VPMQJKG5vASvpX8B6JK3HmXkZlAyplhW3r9xm",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "X7LMJkE5vnskJBxwPeXaUWDBxAyZXwi9DNEWJ",
  },
  {
    id: "6627f07b00348f242ea9", // appwrite item Id
    accessToken: "access-sandbox-74d49e15-fc3b-4d10-a5e7-be4ddae05b30",
    itemId: "Wv7P6vNXRXiMkoKWPzeZS9Zm5JGWdXulLRNBq",
    userId: "6627ed3d00267aa6fa3e",
    accountId: "x1GQb1lDrDHWX4BwkqQbI4qpQP1lL6tJ3VVo9",
  },
];

export const topCategoryStyles = {
  "Food and Drink": {
    bg: "bg-gradient-to-br from-purple-50 to-pink-50",
    circleBg: "bg-gradient-to-br from-purple-100 to-purple-200",
    text: {
      main: "text-purple-900",
      count: "text-purple-700",
    },
    progress: {
      bg: "bg-purple-100",
      indicator: "bg-gradient-to-r from-purple-600 to-pink-600",
    },
    icon: "/icons/monitor.svg",
  },
  Travel: {
    bg: "bg-gradient-to-br from-amber-50 to-orange-50",
    circleBg: "bg-gradient-to-br from-amber-100 to-amber-200",
    text: {
      main: "text-amber-900",
      count: "text-amber-700",
    },
    progress: {
      bg: "bg-amber-100",
      indicator: "bg-gradient-to-r from-amber-600 to-orange-600",
    },
    icon: "/icons/coins.svg",
  },
  default: {
    bg: "bg-gradient-to-br from-pink-50 to-purple-50",
    circleBg: "bg-gradient-to-br from-pink-100 to-pink-200",
    text: {
      main: "text-pink-900",
      count: "text-pink-700",
    },
    progress: {
      bg: "bg-pink-100",
      indicator: "bg-gradient-to-r from-pink-600 to-purple-600",
    },
    icon: "/icons/shopping-bag.svg",
  },
};

export const transactionCategoryStyles = {
  "Food and Drink": {
    borderColor: "border-pink-500",
    backgroundColor: "bg-gradient-to-r from-pink-500 to-purple-500",
    textColor: "text-pink-700",
    chipBackgroundColor: "bg-pink-50",
  },
  Payment: {
    borderColor: "border-amber-500",
    backgroundColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    textColor: "text-amber-700",
    chipBackgroundColor: "bg-amber-50",
  },
  "Bank Fees": {
    borderColor: "border-amber-500",
    backgroundColor: "bg-gradient-to-r from-amber-500 to-orange-500",
    textColor: "text-amber-700",
    chipBackgroundColor: "bg-amber-50",
  },
  Transfer: {
    borderColor: "border-purple-600",
    backgroundColor: "bg-gradient-to-r from-purple-600 to-pink-600",
    textColor: "text-purple-700",
    chipBackgroundColor: "bg-purple-50",
  },
  Processing: {
    borderColor: "border-slate-300",
    backgroundColor: "bg-gradient-to-r from-slate-400 to-slate-500",
    textColor: "text-slate-700",
    chipBackgroundColor: "bg-slate-50",
  },
  Success: {
    borderColor: "border-emerald-500",
    backgroundColor: "bg-gradient-to-r from-emerald-500 to-teal-500",
    textColor: "text-emerald-700",
    chipBackgroundColor: "bg-emerald-50",
  },
  Travel: {
    borderColor: "border-purple-500",
    backgroundColor: "bg-gradient-to-r from-purple-500 to-indigo-500",
    textColor: "text-purple-700",
    chipBackgroundColor: "bg-purple-50",
  },
  default: {
    borderColor: "border-purple-300",
    backgroundColor: "bg-gradient-to-r from-purple-500 to-pink-500",
    textColor: "text-purple-700",
    chipBackgroundColor: "bg-purple-50",
  },
};
