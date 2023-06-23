using System.ComponentModel.DataAnnotations.Schema;

namespace API.Entities
{
  [Table("BasketItems")] //Database annotations in case Enity FrameWork Core 
  public class BasketItem
  {
    public int Id {get; set;}
    public int Quantity { get; set; }

    // Navigation Properties force the delete behavior to be cascading inside our class 
    public int  ProductId { get; set; }
    public Product Product { get; set; }

    public int BasketId { get; set; }
    public Basket Basket { get; set; }
  }
}