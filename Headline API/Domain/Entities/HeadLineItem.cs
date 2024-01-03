using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices.Marshalling;
using System.Text;
using System.Threading.Tasks;

namespace StaffScanner.Exam.Domain.Entities;
public class HeadLineItem : BaseAuditableEntity
{
    public string? SourceId { get; set; }

    public string? SourceName { get; set; }

    public string? Author { get; set; }

    public string? Title { get; set; }

    public string? Description { get; set; }

    public string? Url { get; set; }

    public string? UrlToImage { get; set; }

    public DateTime? PublishedAt { get; set; }

    public string? Content { get; set; }

    public IList<Comment> Comments { get; set; } = new List<Comment>();

    public IList<Rating> Ratings { get; set; } = new List<Rating>();

}
