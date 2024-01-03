using Microsoft.AspNetCore.Mvc;
using StaffScanner.Exam.Application.Commands;
using StaffScanner.Exam.Application.Dtos;
using StaffScanner.Exam.Application.Queries;

namespace StaffScanner.Exam.Web.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class CommentController : ControllerBase
    {
        private readonly ILogger<CommentController> logger;
        private readonly ISender sender;

        public CommentController(ISender sender, ILogger<CommentController> logger)
        {
            this.logger = logger;
            this.sender = sender;
        }

        [HttpGet(Name = "GetComments")]
        public async Task<List<CommentDto>> Get([FromQuery] GetCommentsQuery request)
        {
            return await sender.Send(request);
        }

        [HttpPost(Name = "AddComment")]
        public async Task<int> Add([FromBody] CreateCommentCommand request)
        {
            return await sender.Send(request);
        }
    }
}
