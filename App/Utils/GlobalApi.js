const MASTER_URL = "https://ap-south-1.cdn.hygraph.com/content/cm0i2nouz020f07w1k81sp6in/master";

const getSlider = async () => {
  const query = `
    query GetSlider {
      sliders {
        id
        name
        image {
          url
        }
      }
    }
  `;

  const response = await fetch(MASTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  console.log(result, "res");
  return result.data;
};
const getCategories = async () => {
  const query = `
    query GetCategory {
  categories {
    id
    name
    icon {
      url
    }
  }
}
  `;

  const response = await fetch(MASTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  console.log(result, "res");
  return result.data;
};

const getBusinessList = async () => {
  const query = `
   query getBusinessList {
  businessLists {
    id
    name
    email
    address
    about
    contactPerson
    category {
      name
    }
    images {
      url
    }
  }
}
  `;

  const response = await fetch(MASTER_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ query }),
  });

  const result = await response.json();
  console.log(result, "res");
  return result.data;
};

export default {
  getSlider, getCategories,getBusinessList
};
