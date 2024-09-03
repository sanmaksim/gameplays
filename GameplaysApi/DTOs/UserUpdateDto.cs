using System.ComponentModel.DataAnnotations;

namespace GameplaysApi.DTOs
{
    public class UserUpdateDto
    {
        [MaxLength(255)]
        public string? Username { get; set; }

        [MaxLength(255)]
        public string? Email { get; set; }

        [MaxLength(255)]
        public string? Password { get; set; }
    }
}
