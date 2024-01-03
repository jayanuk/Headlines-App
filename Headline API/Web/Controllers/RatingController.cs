using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using StaffScanner.Exam.Application.Commands;
using StaffScanner.Exam.Application.Dtos;
using StaffScanner.Exam.Application.Queries;

namespace StaffScanner.Exam.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class RatingController : ControllerBase
    {
        private readonly ILogger<RatingController> logger;
        private readonly ISender sender;

        public RatingController(ISender sender, ILogger<RatingController> logger)
        {
            this.logger = logger;
            this.sender = sender;
        }

        [HttpGet(Name = "GetRatings")]
        public async Task<List<RatingDto>> Get([FromQuery] GetRatingsQuery request)
        {
            return await sender.Send(request);
        }

        [HttpPost(Name = "AddRating")]
        public async Task<int> Add([FromBody] CreateRatingCommand request)
        {
            return await sender.Send(request);
        }
    }
}
