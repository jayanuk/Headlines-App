using StaffScanner.Exam.Application.Dtos;
using StaffScanner.Exam.Application.Interfaces;

namespace StaffScanner.Exam.Application.Queries
{
    public record GetRatingsQuery : IRequest<List<RatingDto>>
    {
        public int HeadLineItemId { get; init; } = 1;
    }

    public class GetRatingsQueryHandler : IRequestHandler<GetRatingsQuery, List<RatingDto>>
    {
        private readonly IApplicationDbContext _context;

        public GetRatingsQueryHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<List<RatingDto>> Handle(GetRatingsQuery request, CancellationToken cancellationToken)
        {
            var commentList = _context.Ratings.Where(
                r => r.HeadLineItemId == request.HeadLineItemId).GroupBy( r => r.Value).Select(
                grp => new RatingDto
                {
                   Count = grp.Count(), Value = grp.Key
                });

            return await commentList.ToListAsync();

        }
    }

}
