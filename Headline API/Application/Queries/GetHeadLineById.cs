using StaffScanner.Exam.Application.Interfaces;

namespace StaffScanner.Exam.Application.Queries
{
    public record GetHeadLineItemByIdQuery : IRequest<HeadLineItemDto>
    {
       public int HeadLineItemId { get; set; }
    }

    public class GetHeadLineItemByIdQueryHandler : IRequestHandler<GetHeadLineItemByIdQuery, HeadLineItemDto>
    {
        private readonly IApplicationDbContext _context;

        public GetHeadLineItemByIdQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<HeadLineItemDto> Handle(GetHeadLineItemByIdQuery request, CancellationToken cancellationToken)
        {
            var headLineItem = new HeadLineItemDto();
            var a = await _context.HeadLineItems.FirstOrDefaultAsync(a => a.Id == request.HeadLineItemId);
            headLineItem = new HeadLineItemDto
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
            };

            return await Task.FromResult(headLineItem);
        }
    }

}
