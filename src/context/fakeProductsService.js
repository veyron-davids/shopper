const PRODUCTS = [
  {
    id: "10",
    pname: "Terminator",
    category: { id: "1", cname: "Male" },
    numberInStock: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8aHVtYW58ZW58MHx8MHw%3D&ixlib=rb-1.2.1&w=1000&q=80",
    price: "4,800",
  },
  {
    id: "11",
    pname: "\Hard",
    category: { id: "1", cname: "Male" },
    numberInStock: 5,
    price: "30,000",
    imageUrl:
      "https://images.unsplash.com/photo-1611615696555-9e59508cdd9b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwN3x0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "12",
    pname: "Get",
    category: { id: "1", cname: "Male" },
    numberInStock: 8,
    price: "50,000",
    imageUrl:
      "https://images.unsplash.com/photo-1611593006970-1b8cd8a27873?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIyMHx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "13",
    pname: "Italy",
    category: { id: "2", cname: "Female" },
    numberInStock: 7,
    price: "50,000",
    imageUrl:
      "https://images.unsplash.com/photo-1612301973929-ce3cc5ec04b4?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDkyfHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "14",
    pname: "Airplane",
    category: { id: "2", cname: "Female" },
    numberInStock: 7,
    price: "50,000",
    imageUrl:
      "https://images.unsplash.com/photo-1610659695521-d119bbcfb3c1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDg1fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "15",
    pname: "Wedding",
    category: { id: "2", cname: "Female" },
    numberInStock: 7,
    price: "50,000",
    imageUrl:
      "https://images.unsplash.com/photo-1611770708564-50ecde16ffe4?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwNnx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "16",
    pname: "Girl",
    category: { id: "3", cname: "Unisex" },
    numberInStock: 7,
    price: "80,000",
    imageUrl:
      "https://images.unsplash.com/photo-1612536307836-5985d2d29b18?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDc1fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "17",
    pname: "Sense",
    category: { id: "3", cname: "Unisex" },
    numberInStock: 4,
    price: "50,000",
    imageUrl:
      "https://images.unsplash.com/photo-1612694875291-04cf58085fa5?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY4fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },
  {
    id: "18",
    pname: "Avengers",
    category: { id: "3", cname: "Unisex" },
    numberInStock: 7,
    price: "20,000",
    imageUrl:
      "https://images.unsplash.com/photo-1612782972309-728cbb6da8f0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDY2fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
  },

  {
    id: "19",
    pname: "Brown Brim",
    imageUrl:
      "https://images.unsplash.com/photo-1611827281392-a2dbd1534d92?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwMHx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: { id: "3", cname: "Unisex" },
    price: "15,000",
  },
  {
    id: "20",
    pname: "Blue Beanie",
    imageUrl:
      "https://images.unsplash.com/photo-1548142542-c53707f8b05b?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5NXx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: { id: "3", cname: "Unisex" },
    price: "26,000",
  },
  {
    id: "21",
    pname: "Brown Cowboy",
    imageUrl:
      "https://images.unsplash.com/photo-1605129706501-be8fb44abe20?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDIwNHx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    category: { id: "3", cname: "Unisex" },
    price: "10,000",
  },
  {
    id: "22",
    pname: "Grey Brim",
    imageUrl:
      "https://images.unsplash.com/photo-1612216094015-675b26ffd7b4?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyNnx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "98,000",
    category: { id: "1", cname: "Action" },
  },
  {
    id: "23",
    pname: "Green Beanie",
    imageUrl:
      "https://images.unsplash.com/photo-1611948357031-ef7bce1e44f0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE2NHx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "64,000",
    category: { id: "1", cname: "Action" },
  },
  {
    id: "24",
    pname: "Palm Tree Cap",
    imageUrl:
      "https://images.unsplash.com/photo-1611867416224-2bed6e3e4cd1?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE3NHx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "63,000",
    category: { id: "2", cname: "Female" },
  },
  {
    id: "25",
    pname: "Red Beanie",
    imageUrl:
      "https://images.unsplash.com/photo-1611806751834-514b4bd797cc?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDE5OXx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "72,000",
    category: { id: "2", cname: "Female" },
  },
  {
    id: "26",
    pname: "Wolf Cap",
    imageUrl:
      "https://images.unsplash.com/photo-1612209992975-954021ffc595?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDk5fHRvd0paRnNrcEdnfHxlbnwwfHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "89,000",
    category: { id: "2", cname: "Female" },
  },
  {
    id: "27",
    pname: "Blue Snapback",
    imageUrl:
      "https://images.unsplash.com/photo-1612217088043-3628414d8e8d?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyOHx0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "41,000",
    category: { id: "1", cname: "Action" },
  },

  {
    id: "28",
    pname: "Adidas NMD",
    imageUrl:
      "https://images.unsplash.com/photo-1612216094008-17e666065bc0?ixid=MXwxMjA3fDB8MHx0b3BpYy1mZWVkfDEyN3x0b3dKWkZza3BHZ3x8ZW58MHx8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
    price: "36,000",
    category: { id: "2", cname: "Female" },
  },
];

export function getProduct(id) {
  return PRODUCTS.find((p) => p.id === id);
}

export function getProducts() {
  return PRODUCTS;
}
