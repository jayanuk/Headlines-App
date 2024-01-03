using Microsoft.AspNetCore.Mvc;
using StaffScanner.Exam.Application.Commands;
using StaffScanner.Exam.Application.Dtos;
using StaffScanner.Exam.Application.Queries;

namespace StaffScanner.Exam.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class VoteController : ControllerBase
    {
        private readonly ILogger<VoteController> logger;
        private readonly ISender sender;

        public VoteController(ISender sender, ILogger<VoteController> logger)
        {
            this.logger = logger;
            this.sender = sender;
        }

        [HttpPost(Name = "AddVote")]
        public async Task<VoteDto> Add([FromBody] CreateVotetCommand request)
        {
            return await sender.Send(request);
        }
    }
}
