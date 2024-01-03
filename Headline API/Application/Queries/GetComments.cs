using StaffScanner.Exam.Application.Dtos;
using StaffScanner.Exam.Application.Interfaces;

namespace StaffScanner.Exam.Application.Queries
{
    public record GetCommentsQuery : IRequest<List<CommentDto>>
    {
        public int HeadLineItemId { get; init; } = 1;
    }

    public class GetCommentsQueryHandler : IRequestHandler<GetCommentsQuery, List<CommentDto>>
    {
        private readonly IApplicationDbContext _context;

        public GetCommentsQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<CommentDto>> Handle(GetCommentsQuery request, CancellationToken cancellationToken)
        {
            var commentList = _context.Comments.Include(c => c.Votes).Where(
                c => c.HeadLineItemId == request.HeadLineItemId).Select(
                c => new CommentDto { 
                                    Id = c.Id,
                                    HeadLineId = c.HeadLineItemId, 
                                    CommentText = c.CommentText, 
                                    Points = c.Votes.Sum(v => v.Point),
                                    CreatedBy = c.CreatedBy, 
                                    CreatedTime = c.CreatedTime 
                                    });

            return await commentList.OrderByDescending(c => c.CreatedTime).ToListAsync();

        }
    }

}
