
using StaffScanner.Exam.Application.Interfaces;

namespace StaffScanner.Exam.Application.Commands
{
    public record CreateRatingCommand : IRequest<int>
    {
        public int Rating { get; set; }

        public int HeadLineId { get; set; }

        public string? CreatedBy { get; set; }
    }

    public class CreateRatingCommandHandler : IRequestHandler<CreateRatingCommand, int>
    {
        private readonly IApplicationDbContext _context;
        public CreateRatingCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateRatingCommand request, CancellationToken cancellationToken)
        {
            _context.Ratings.Add(new Rating
            {
                HeadLineItemId = request.HeadLineId,
                Value = request.Rating,
                CreatedBy = request.CreatedBy,
                CreatedTime = DateTime.UtcNow
            });

            return await _context.SaveChangesAsync(cancellationToken);
        }
    }
}