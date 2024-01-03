using System.ComponentModel.DataAnnotations.Schema;

namespace StaffScanner.Exam.Domain.Common;

public abstract class BaseEntity
{  
    public int Id { get; set; }
}
