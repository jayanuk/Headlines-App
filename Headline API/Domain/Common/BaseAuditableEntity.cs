using System.ComponentModel.DataAnnotations;

namespace StaffScanner.Exam.Domain.Common;

public abstract class BaseAuditableEntity : BaseEntity
{
    public DateTime CreatedTime { get; set; }

    [MaxLength(100)]
    public string? UserName { get; set; }

    public string? CreatedBy { get; set; }

    public DateTime? LastModifiedTime { get; set; }

    public string? LastModifiedBy { get; set; }
}
