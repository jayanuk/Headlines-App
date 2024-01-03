
using StaffScanner.Exam.Application.Interfaces;

namespace StaffScanner.Exam.Application.Commands
{
    public record CreateHeadLineItemCommand : IRequest<bool> { }

    public class CreateHeadLineItemCommandHandler : IRequestHandler<CreateHeadLineItemCommand, bool>
    {
        private readonly IApplicationDbContext _context;
        private readonly INewsApiService _newsApiService;

        public CreateHeadLineItemCommandHandler(IApplicationDbContext context, INewsApiService newsApiService)
        {
            _context = context;
            _newsApiService = newsApiService;
        }

        public async Task<bool> Handle(CreateHeadLineItemCommand command, CancellationToken cancellationToken)
        {
            var result = await _newsApiService.GetData();
            if (result == null)
                return false;

            foreach(var article in result.Articles)
            {
                var existing = await _context.HeadLineItems.FirstOrDefaultAsync(
                    a => a.SourceId == article.Source.Id && a.Title == article.Title);

                if(existing == null)
                {
                    _context.HeadLineItems.Add(new HeadLineItem
                    {
                        SourceId = article.Source.Id,
                        SourceName = article.Source.Name,
                        Author = article.Author,
                        Title = article.Title,
                        Description = article.Description,
                        Url = article.Url,
                        UrlToImage = article.UrlToImage,
                        PublishedAt = article.PublishedAt,
                        Content = article.Content,
                        CreatedTime = DateTime.UtcNow,
                        CreatedBy = "Admin"
                    });                    
                }
            }
            await _context.SaveChangesAsync(cancellationToken);

            return true;
        }
    }
}
