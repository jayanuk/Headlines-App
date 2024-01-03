
using StaffScanner.Exam.Application.Dtos;
using StaffScanner.Exam.Application.Interfaces;

namespace StaffScanner.Exam.Application.Commands
{
    public record CreateVotetCommand : IRequest<VoteDto>
    {
        public int CommentId{ get; set; }

        public int Point { get; set; }

        public string? CreatedBy { get; set; }
    }

    public class CreateVotetCommandHandler : IRequestHandler<CreateVotetCommand, VoteDto>
    {
        private readonly IApplicationDbContext _context;
        public CreateVotetCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<VoteDto> Handle(CreateVotetCommand request, CancellationToken cancellationToken)
        {
            _context.Votes.Add(new Vote
            {
                CommentId = request.CommentId,
                Point = request.Point,
                CreatedBy = request.CreatedBy,
                CreatedTime = DateTime.UtcNow
            });

            await _context.SaveChangesAsync(cancellationToken);

            var totalPoints = await _context.Votes.Where(v => v.CommentId == request.CommentId).SumAsync(v => v.Point);
            return new VoteDto { CommentId = request.CommentId, Points = totalPoints };
        }
    }
}