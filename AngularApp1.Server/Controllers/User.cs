using Microsoft.AspNetCore.Identity;

namespace AngularApp1.Server.Controllers
{
    public class User
    {
        public required string UserName { get; set; }
        public string Password { get; set; }
    }
}