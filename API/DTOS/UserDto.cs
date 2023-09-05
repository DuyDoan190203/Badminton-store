namespace API.DTOS
{
    public class UserDto
    {
        //Jason Web Tokens
        public string Email { get; set; }
        public string Token { get; set; }
        public BasketDto Basket { get; set; }
    }
}