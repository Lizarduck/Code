const words = ["albert", "BIG WRIGGLE", "superhot"];

function convertToLowercaseAndSort(arr) {
  // Convert each word to lowercase and then sort
  let lowercased = arr.map((word) => word.toLowerCase());
  let sorted = lowercased.sort();
  return sorted;
}

console.log(convertToLowercaseAndSort(words));
