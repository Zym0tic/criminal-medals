const db = require('../config/connection');
const {User, Product, Category} = require('../models');

db.once('open', async () => {
 await Category.deleteMany();

 const categories = await Category.insertMany([
    {
         name: "Bracelets"
     },
     {
         name: "Cord Necklaces"
     },
     {
         name: "Sterling Silver"
     },
     {
         name: "Rings"
     },
     {
         name: "Chain Necklaces"
     },
     {
         name: "Earrings"
     }
 ]);

 console.log('categories seeded');

 await Product.deleteMany();

 const products = [
    {
        name: "FIGHT WAR NOT WARS",
        description: "Made of brass, acid etched, soldered and connected with brass rope chain.",
        image: "image0.jpeg",
        price: 20,
        quantity: 5,
        category: categories[4]._id
    },
    {
        name: "GODDESS COLLAR",
        description: "Made entirely of textured brass, hand hammered studs and soldered bondage components.",
        image: "image1.jpeg",
        price: 20,
        quantity: 5,
        category: categories[1]._id
    },
    {
        name: "MEDIEVAL CHANDILIER",
        description: "Hand hammered and textured chandelier brass hoops. On the heavier side, could be considered ear weights. Not for unstretched ears.",
        image: "image2.jpeg",
        price: 20,
        quantity: 5,
        category: categories[5]._id
    },
    {
        name: "RING",
        description: "I just like this photo if it made a better big picture than the other id be down fr that just figured id include it cause i like it alot",
        image: "image3.jpeg",
        price: 20,
        quantity: 5,
        category: categories[3]._id
    },
    {
        name: "FOAD",
        description: "Nickel silver ring with insignia FOAD, etched hand sawed and soldered. Ring size 8",
        image: "image4.jpeg",
        price: 20,
        quantity: 5,
        category: categories[5]._id
    },
    {
        name: "OVERKILL HOOPS",
        description: "Hand textured and hammered hoops. Etched, soldered with stainless ear hooks.",
        image: "image5.jpeg",
        price: 20,
        quantity: 5,
        category: categories[5]._id
    },
    {
        name: "FOAD EARINGS",
        description: "Heavy weight FOAD earrings, made of brass. Hand cut, soldered and patinaed with stainless earring hooks.",
        image: "image6.jpeg",
        price: 20,
        quantity: 5,
        category: categories[5]._id
    },
    {
        name: "COYOTE CALLER",
        description: "Double chain coyote teeth necklace. Mixed metal necklace adorned with ethically sourced coyote teeth.",
        image: "image7.jpeg",
        price: 20,
        quantity: 5,
        category: categories[4]._id
    },
    {
        name: "BUFFALO",
        description: "Soldered mixed metal buffalo necklace with nickel adornments. Teeth ethically sourced.",
        image: "image8.jpeg",
        price: 20,
        quantity: 5,
        category: categories[1]._id
    }

]

 for (let i = 0; i < products.length; i++) {
    let product = await Product.create(products[i]);
    // console.log(snippet, "message");
    
      for (let i = 0; i < categories.length; i++) {

        const category = categories[i];
        console.log(category);
        console.log(product.category);
        if (product.category === category._id) {
          const newCat = await Category.findOneAndUpdate({_id: category._id}, {
            $addToSet: {
              products: product._id,
            },
          }) 
          console.log(newCat);
        }
      }
    }

 console.log('products seeded');

 process.exit();
});