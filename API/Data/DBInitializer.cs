using API.Entities;

namespace API.Data
{
   public static class DBInitializer
    {
        public static void Initialize(StoreContext context)
        {
            if(context.Products.Any()) return;

            var products = new List<Product>
            {
                new Product
                {
                    Name = "Astrox 100zz",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 24699,
                    PictureUrl = "/Images/products/ax100z-ynex2.png",
                    Brand = "Yonex",
                    Type = "Badminton racket",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Jet-speed 10",
                    Description = "Nunc viverra imperdiet enim. Fusce est. Vivamus a tellus.",
                    Price = 16000,
                    PictureUrl = "/Images/products/Jspeed10-victor1.png",
                    Brand = "Victor",
                    Type = "Badminton racket",
                    QuantityInStock = 90
                },
                new Product
                {
                    Name = "Lining 9000c (COMBAT)",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 28000,
                    PictureUrl = "/Images/products/Li9000C-lining1.png",
                    Brand = "Lining",
                    Type = "Badminton racket",
                    QuantityInStock = 50
                },
                new Product
                {
                    Name = "Thurster F",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 18999,
                    PictureUrl = "/Images/products/Thrusterf-victor2.png",
                    Brand = "Victor",
                    Type = "Badminton racket",
                    QuantityInStock = 39
                },
                new Product
                {
                    Name = "Axtrox 88d pro",
                    Description =
                        "Yonex ASTROX 88D Pro racket is also built using with Rotational Generator System.The counter balanced head adapts to each shot, helping you to control the drive and attack the opposition with increased acceleration, steeper angle and power on the smash. ",
                    Price = 19999,
                    PictureUrl = "/Images/products/ax88d-ynex1.png",
                    Brand = "Yonex",
                    Type = "Badminton racket",
                    QuantityInStock = 30
                },
                new Product
                {
                    Name = "TJ Power (Goh V Shem)",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 14089,
                    PictureUrl = "/Images/products/TJPower-Felet1.png",
                    Brand = "Felet",
                    Type = "Badminton racket",
                    QuantityInStock = 99
                },
                new Product
                {
                    Name = "Yonex 65z",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 12050,
                    PictureUrl = "/Images/products/shoes-yonex1.png",
                    Brand = "Yonex",
                    Type = "Shoes",
                    QuantityInStock = 20
                },
                new Product
                {
                    Name = "Yonex Eclipson Z",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 14999,
                    PictureUrl = "/images/products/shoes-yonex2.png",
                    Brand = "Yonex",
                    Type = "Shoes",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Mizuno Wave Clang",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 15099,
                    PictureUrl = "/Images/products/Shoes-mizuno1.png",
                    Brand = "Mizuno",
                    Type = "Shoes",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Victor 86",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 11099,
                    PictureUrl = "/Images/products/shoes-victor1.png",
                    Brand = "Victor",
                    Type = "Shoes",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Victor 86H",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 15055,
                    PictureUrl = "/Images/products/shoes-victor2.png",
                    Brand = "Victor",
                    Type = "Shoes",
                    QuantityInStock = 12
                },
                new Product
                {
                    Name = "Yonex DD1",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1900,
                    PictureUrl = "/Images/products/Shirt-Yonex1.png",
                    Brand = "Yonex",
                    Type = "Shirt",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Yonex KH1004",
                    Description =
                        "Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 1499,
                    PictureUrl = "/Images/products/Shirt-Yonex2.png",
                    Brand = "Yonex",
                    Type = "Shirt",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Victor KH",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 2519,
                    PictureUrl = "/Images/products/Shirt-victor1.png",
                    Brand = "Victor",
                    Type = "Shirt",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Lining DD99",
                    Description =
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Maecenas porttitor congue massa. Fusce posuere, magna sed pulvinar ultricies, purus lectus malesuada libero, sit amet commodo magna eros quis urna.",
                    Price = 2999,
                    PictureUrl = "/Images/products/shirt-lining1.png",
                    Brand = "Lining",
                    Type = "Shirt",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Shuttle Lining 1.pro",
                    Description =
                        "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Proin pharetra nonummy pede. Mauris et orci.",
                    Price = 2222,
                    PictureUrl = "/Images/products/Shuttle-lining1.png",
                    Brand = "Lining",
                    Type = "Shuttles",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Shuttles Victor pro",
                    Description = "Aenean nec lorem. In porttitor. Donec laoreet nonummy augue.",
                    Price = 2020,
                    PictureUrl = "/Images/products/Shuttles-Victor1.png",
                    Brand = "Victor",
                    Type = "Shuttles",
                    QuantityInStock = 100
                },
                new Product
                {
                    Name = "Shuttles Yonex ADCz 10",
                    Description =
                        "Suspendisse dui purus, scelerisque at, vulputate vitae, pretium mattis, nunc. Mauris eget neque at sem venenatis eleifend. Ut nonummy.",
                    Price = 3519,
                    PictureUrl = "/Images/products/Shuttles-Yonex1.png",
                    Brand = "Yonex",
                    Type = "Shuttles",
                    QuantityInStock = 100
                },
            };
            // anotherway: context.Products.AddRange(product);
            foreach (var product in products)
            {
                context.Products.Add(product);
            }

            context.SaveChanges();
        }
    }
}