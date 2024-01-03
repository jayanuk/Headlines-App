using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace StaffScanner.Exam.Domain.Entities;
public  class Comment : BaseAuditableEntity
{
    public int HeadLineItemId { get; set; }

    [Required]
    [MaxLength(500)]
    public string? CommentText { get; set; }

    public HeadLineItem HeadLineItem { get; set; } = null;

    public IList<Vote> Votes { get; set; } = new List<Vote>();
}
