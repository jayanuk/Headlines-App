using Microsoft.AspNetCore.Mvc;
using StaffScanner.Exam.Application.Commands;
using StaffScanner.Exam.Application.Interfaces;
using StaffScanner.Exam.Application.Queries;
using StaffScanner.Exam.Domain.Entities;

namespace StaffScanner.Exam.Web.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class HeadLinesController : ControllerBase
    {
        private readonly ILogger<HeadLinesController> logger;
        private readonly INewsApiService newsApiService;
        private readonly ISender sender;
        public HeadLinesController(ISender sender, ILogger<HeadLinesController> logger, INewsApiService newsApiService)
        {
            this.logger = logger;
            this.newsApiService = newsApiService;
            this.sender = sender;
        }

        [HttpGet(Name = "GetHeadLines")]
        public async Task<HeadLineListDto> GetHeadLines()
        {
            return await sender.Send(new GetHeadLineItemQuery());
        }

        [HttpGet("GetById")]
        public async Task<HeadLineItemDto> GetById([FromQuery] GetHeadLineItemByIdQuery request)
        {
            return await sender.Send(request);
        }

        [HttpPost(Name = "SyncHeadLines")]
        public async Task<bool> Sync()
        {
            return await sender.Send(new CreateHeadLineItemCommand());
        }
    }
}
