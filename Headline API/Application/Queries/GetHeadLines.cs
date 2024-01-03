using StaffScanner.Exam.Application.Interfaces;

namespace StaffScanner.Exam.Application.Queries
{
    public record GetHeadLineItemQuery : IRequest<HeadLineListDto>
    {
        public string? query { get; init; }
        public int PageNumber { get; init; } = 1;
        public int PageSize { get; init; } = 10;
    }

    public class GetHeadLineItemQueryHandler : IRequestHandler<GetHeadLineItemQuery, HeadLineListDto>
    {
        private readonly IApplicationDbContext _context;

        public GetHeadLineItemQueryHandler(IApplicationDbContext context, INewsApiService newsApiService)
        {
            _context = context;
        }

        public async Task<HeadLineListDto> Handle(GetHeadLineItemQuery request, CancellationToken cancellationToken)
        {
            var headLineList = new HeadLineListDto();
            headLineList.TotalResults = _context.HeadLineItems.Count();
            var articles = await _context.HeadLineItems.OrderByDescending(a => a.PublishedAt).Skip(0).Take(10).ToListAsync();
            headLineList.Articles = articles.Select(a => new HeadLineItemDto
            {
                Id = a.Id,
                Source = new HeadLineSourceDto { Id = a.SourceId, Name = a.SourceName },
                Author = a.Author,
                Title = a.Title,
                Description = a.Description,
                Url = a.Url,
                UrlToImage = a.UrlToImage,
                PublishedAt = a.PublishedAt,
                Content = a.Content
            }).ToList();

            return await Task.FromResult(headLineList);
        }
    }

}
