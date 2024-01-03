
using StaffScanner.Exam.Application.Interfaces;

namespace StaffScanner.Exam.Application.Commands
{
    public record CreateCommentCommand : IRequest<int>
    {
        public string? CommentText { get; set; }

        public int HeadLineId { get; set; }

        public string? CreatedBy { get; set; }
    }

    public class CreateCommentCommandHandler : IRequestHandler<CreateCommentCommand, int>
    {
        private readonly IApplicationDbContext _context;
        public CreateCommentCommandHandler(IApplicationDbContext context)
        {
            _context = context;
        }

        public async Task<int> Handle(CreateCommentCommand request, CancellationToken cancellationToken)
        {
            _context.Comments.Add(new Comment
                                {
                                    HeadLineItemId = request.HeadLineId,
                                    CommentText = request.CommentText,
                                    CreatedBy = request.CreatedBy,
                                    CreatedTime = DateTime.UtcNow
                                });

            return await _context.SaveChangesAsync(cancellationToken);
        }
    }
}